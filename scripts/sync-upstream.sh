#!/usr/bin/env bash
#
# Sync this fork with upstream (bitbucket.org/lukforce), then port the
# pure-data files from tm-planner/ into our customised event-planner/ copy.
#
# Usage:
#   scripts/sync-upstream.sh              # fetch + rebase + copy data + report
#   scripts/sync-upstream.sh --data-only  # skip fetch/rebase (use after fixing conflicts)
#   scripts/sync-upstream.sh --dry-run    # show what would happen, change nothing
#
set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT"

UPSTREAM_REMOTE="upstream"
UPSTREAM_BRANCH="master"
UPSTREAM_REF="$UPSTREAM_REMOTE/$UPSTREAM_BRANCH"
FORK_BRANCH="my-vibe-optc"
REPORT_DIR=".sync"

# Identical in both trees -> safe to copy verbatim.
DATA_FILES=(
    "data/tm_boosters.js"
    "data/tm_boosters_jpn.js"
    "data/tm_opponents.js"
)
DATA_DIRS=(
    "data/tm-booster-raw"
    "assets/img"
)
# Customised in event-planner/ -> must be ported by hand.
MANUAL_FILES=(
    "assets/js/tm-planner.js"
    "assets/css/tm-planner.css"
    "index.html"
    "data/counters.js"
    "data/filter_map.js"
    "data/icon_tooltips.js"
)

DATA_ONLY=0
DRY_RUN=0
for arg in "$@"; do
    case "$arg" in
        --data-only) DATA_ONLY=1 ;;
        --dry-run) DRY_RUN=1 ;;
        -h|--help) sed -n '2,10p' "$0"; exit 0 ;;
        *) echo "unknown option: $arg" >&2; exit 2 ;;
    esac
done

say() { printf '\n\033[1;36m==> %s\033[0m\n' "$1"; }
warn() { printf '\033[1;33m!! %s\033[0m\n' "$1"; }
run() {
    if [ "$DRY_RUN" = 1 ]; then
        printf '   [dry-run] %s\n' "$*"
    else
        "$@"
    fi
}

# ---------------------------------------------------------------- checks
if ! git remote get-url "$UPSTREAM_REMOTE" >/dev/null 2>&1; then
    echo "remote '$UPSTREAM_REMOTE' not found. add it with:" >&2
    echo "  git remote add $UPSTREAM_REMOTE https://bitbucket.org/lukforce/lukforce.bitbucket.org.git" >&2
    exit 1
fi

CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [ "$CURRENT_BRANCH" != "$FORK_BRANCH" ]; then
    warn "you are on '$CURRENT_BRANCH', expected '$FORK_BRANCH'"
    read -r -p "    continue anyway? [y/N] " reply
    [ "$reply" = "y" ] || [ "$reply" = "Y" ] || exit 1
fi

if [ -n "$(git status --porcelain)" ] && [ "$DATA_ONLY" = 0 ] && [ "$DRY_RUN" = 0 ]; then
    echo "working tree is dirty. commit or stash first." >&2
    git status --short >&2
    exit 1
fi

# ---------------------------------------------------------------- fetch + rebase
if [ "$DATA_ONLY" = 0 ]; then
    say "fetching $UPSTREAM_REMOTE"
    run git fetch "$UPSTREAM_REMOTE" --prune

    OLD_BASE="$(git merge-base HEAD "$UPSTREAM_REF")"
    NEW_HEAD="$(git rev-parse "$UPSTREAM_REF")"

    if [ "$OLD_BASE" = "$NEW_HEAD" ]; then
        say "already up to date with $UPSTREAM_REF — nothing to sync"
        exit 0
    fi

    echo "$OLD_BASE" > /tmp/optc-sync-base
    say "new upstream commits"
    git log --oneline --no-decorate "$OLD_BASE".."$NEW_HEAD" | cat

    BACKUP="backup/pre-sync-$(date +%Y%m%d-%H%M%S)"
    say "tagging current HEAD as branch '$BACKUP' (rollback: git reset --hard $BACKUP)"
    run git branch "$BACKUP"

    say "rebasing $CURRENT_BRANCH onto $UPSTREAM_REF"
    if [ "$DRY_RUN" = 0 ] && ! git rebase "$UPSTREAM_REF"; then
        warn "rebase hit conflicts. resolve them, run 'git rebase --continue',"
        warn "then finish with: scripts/sync-upstream.sh --data-only"
        exit 1
    fi
else
    OLD_BASE="$(cat /tmp/optc-sync-base 2>/dev/null || git merge-base HEAD "$UPSTREAM_REF")"
fi

# ---------------------------------------------------------------- copy data
say "copying pure-data files tm-planner/ -> event-planner/"
CHANGED=()
for f in "${DATA_FILES[@]}"; do
    if ! cmp -s "tm-planner/$f" "event-planner/$f"; then
        echo "   updated  $f"
        run cp "tm-planner/$f" "event-planner/$f"
        CHANGED+=("event-planner/$f")
    fi
done
for d in "${DATA_DIRS[@]}"; do
    # -c compares content, not timestamps; no --delete so event-planner-only
    # files (custom icons etc.) survive.
    out="$(rsync -rtcin "tm-planner/$d/" "event-planner/$d/" | grep -E '^[>c]' || true)"
    if [ -n "$out" ]; then
        echo "$out" | sed 's/^/   /'
        run rsync -rtc "tm-planner/$d/" "event-planner/$d/"
        CHANGED+=("event-planner/$d")
    fi
done

if [ ${#CHANGED[@]} -eq 0 ]; then
    echo "   (nothing to copy)"
else
    run git add -- "${CHANGED[@]}"
    say "staged ${#CHANGED[@]} path(s) — review with 'git diff --cached'"
fi

# ---------------------------------------------------------------- manual report
say "upstream changes to files we customised (port these by hand)"
mkdir -p "$REPORT_DIR"
PATCH="$REPORT_DIR/upstream-$(date +%Y%m%d).patch"
PATHSPEC=()
for f in "${MANUAL_FILES[@]}"; do PATHSPEC+=("tm-planner/$f"); done

if git diff --quiet "$OLD_BASE" "$UPSTREAM_REF" -- "${PATHSPEC[@]}"; then
    echo "   none — upstream only touched data this round"
else
    git diff --stat "$OLD_BASE" "$UPSTREAM_REF" -- "${PATHSPEC[@]}" | cat
    git diff "$OLD_BASE" "$UPSTREAM_REF" -- "${PATHSPEC[@]}" > "$PATCH"
    echo
    echo "   full diff saved to $PATCH"
    echo "   apply the equivalent edits to the event-planner/ copies:"
    for f in "${MANUAL_FILES[@]}"; do echo "     - event-planner/$f"; done
fi

say "done. nothing was committed or pushed."
