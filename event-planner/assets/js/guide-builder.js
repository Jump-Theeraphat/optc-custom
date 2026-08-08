// Custom Mini Guide builder.
// Custom events live in localStorage and get merged into tm_opponents, so the
// existing board / Mini Guide / counter-filter code keeps working untouched.

var EP_CUSTOM_STORE_KEY = 'ep_custom_events';

// Ids stay >= 4147 so guide.js uses the new action format, and < 4464 so every
// board (4 regular + boss + ambush) stays visible.
var EP_CUSTOM_ID_MIN = 4148;
var EP_CUSTOM_ID_MAX = 4463;

var EP_TYPES = ['STR', 'DEX', 'QCK', 'PSY', 'INT'];

var EP_CLASSES = [
    'Fighter', 'Slasher', 'Striker', 'Shooter',
    'Free Spirit', 'Cerebral', 'Powerhouse', 'Driven'
];

var EP_BOARDS = [
    { pos: 0, label: 'Board 1' },
    { pos: 1, label: 'Board 2' },
    { pos: 2, label: 'Board 3' },
    { pos: 3, label: 'Board 4' },
    { pos: 4, label: 'Board 5 (Boss)' },
    { pos: 5, label: 'Board 6 (Ambush)' }
];

var epStore = epReadStore();
var epDraft = null;
var epPickerTarget = null;

function epReadStore() {
    try {
        var raw = localStorage.getItem(EP_CUSTOM_STORE_KEY);
        if (!raw)
            return { version: 1, events: [] };

        var parsed = JSON.parse(raw);
        if (!parsed || !Array.isArray(parsed.events))
            return { version: 1, events: [] };

        return parsed;
    } catch (err) {
        return { version: 1, events: [] };
    }
}

function epWriteStore() {
    localStorage.setItem(EP_CUSTOM_STORE_KEY, JSON.stringify(epStore));
}

function epIsCustomEvent(id) {
    var numId = parseInt(id);
    return epStore.events.some(function (e) {
        return e.id === numId;
    });
}

function epFindEvent(id) {
    var numId = parseInt(id);
    for (var i = 0; i < epStore.events.length; i++) {
        if (epStore.events[i].id === numId)
            return epStore.events[i];
    }
    return null;
}

function epNextCustomId() {
    for (var id = EP_CUSTOM_ID_MIN; id <= EP_CUSTOM_ID_MAX; id++) {
        if (!epFindEvent(id) && typeof tm_opponents[id] === 'undefined')
            return id;
    }
    return null;
}

function epToNumber(value) {
    if (value === null || typeof value === 'undefined')
        return null;

    var cleaned = String(value).replace(/[,\s]/g, '');
    if (!cleaned)
        return null;

    var num = Number(cleaned);
    return isNaN(num) ? null : num;
}

// ---------- draft <-> tm_opponents ----------

function epStageToGuide(stage, index) {
    var g = { stageNum: index + 1 };

    if (stage.bossName) {
        g.boss = [stage.bossName, stage.bossType || 'STR'];

        var hp = epToNumber(stage.hp);
        var atk = epToNumber(stage.atk);

        if (hp !== null) {
            if (stage.hpConfirmed)
                g.hp = hp;
            else
                g.hp_ = hp;
        }

        if (atk !== null) {
            if (stage.atkConfirmed)
                g.atk = atk;
            else
                g.atk_ = atk;
        }
    }

    if (stage.weakness)
        g.weakness = stage.weakness;

    g.detail = (stage.detail || []).map(function (d) {
        return {
            type: d.type || '',
            action: (d.action || []).filter(function (a) {
                return a && a.type;
            }).map(function (a) {
                var action = { type: a.type };

                if (a.turn)
                    action.turn = String(a.turn);
                if (a.detail)
                    action.detail = a.detail;

                return action;
            })
        };
    });

    return g;
}

function epEventToOpponents(evt) {
    var opponents = {};

    (evt.opponents || []).forEach(function (op, i) {
        var entry = {
            name: op.name || ('Opponent ' + (i + 1)),
            type: op.type || 'STR',
            pos: typeof op.pos === 'number' ? op.pos : i
        };

        if (op.rec && op.rec.length)
            entry.rec = op.rec;

        var guide = (op.stages || []).map(epStageToGuide);
        if (guide.length)
            entry.guide = guide;

        opponents['c' + i] = entry;
    });

    return opponents;
}

function epRegisterCustomEvents() {
    if (typeof tm_opponents === 'undefined')
        return;

    epStore.events.forEach(function (evt) {
        tm_opponents[evt.id] = epEventToOpponents(evt);
    });
}

function epNewDraft() {
    return {
        id: null,
        name: '',
        opponents: []
    };
}

function epNewOpponent(pos) {
    return {
        name: '',
        type: 'STR',
        pos: pos,
        rec: [],
        stages: []
    };
}

function epNewStage() {
    return {
        bossName: '',
        bossType: 'STR',
        hp: '',
        hpConfirmed: true,
        atk: '',
        atkConfirmed: true,
        weakness: '',
        detail: []
    };
}

function epNewDetail() {
    return { type: 'Preemp', action: [] };
}

function epNewAction() {
    return { type: '', turn: '', detail: '' };
}

// ---------- choices pulled from existing data ----------

function epCollectPhasePresets() {
    var seen = {};

    for (var evId in tm_opponents) {
        var opponents = tm_opponents[evId];
        if (!opponents || Array.isArray(opponents))
            continue;

        for (var opId in opponents) {
            var guide = opponents[opId].guide;
            if (!guide)
                continue;

            guide.forEach(function (stage) {
                (stage.detail || []).forEach(function (d) {
                    if (d.type)
                        seen[d.type] = true;
                });
            });
        }
    }

    return Object.keys(seen).sort();
}

function epGetEffectCatalog() {
    return typeof effect_catalog !== 'undefined' ? effect_catalog : [];
}

function epGetEffectGroups() {
    return typeof EFFECT_GROUPS !== 'undefined' ? EFFECT_GROUPS : [];
}

function epDebuffLabel(key) {
    if (typeof getEffectCatalogLabel === 'function')
        return getEffectCatalogLabel(key);

    if (typeof getIconTooltip === 'function') {
        var tip = getIconTooltip(key);
        if (tip)
            return tip;
    }

    return key;
}

// ---------- panel markup ----------

function epBuildPanel() {
    var panel = $('<div id="ep-guide-builder" class="ep-builder-panel"></div>');

    var header = $('<div class="ep-builder-header"></div>');
    header.append('<span class="ep-builder-title"><i class="fas fa-book"></i>&nbsp;Guide Builder</span>');
    header.append('<button type="button" class="btn btn-sm btn-secondary" id="ep-builder-close">&times;</button>');
    panel.append(header);

    var body = $('<div class="ep-builder-body"></div>');

    body.append(`
        <div class="ep-builder-row">
            <label for="ep-event-select">Event</label>
            <select class="form-control form-control-sm" id="ep-event-select"></select>
        </div>
        <div class="ep-builder-row">
            <label for="ep-event-name">Event name</label>
            <input type="text" class="form-control form-control-sm" id="ep-event-name"
                placeholder="My Custom Event" autocomplete="off">
        </div>
        <div class="ep-builder-btn-row">
            <button type="button" class="btn btn-sm btn-primary" id="ep-event-save">Save</button>
            <button type="button" class="btn btn-sm btn-success" id="ep-event-open">Save &amp; Load</button>
            <button type="button" class="btn btn-sm btn-outline-secondary" id="ep-event-new">New</button>
            <button type="button" class="btn btn-sm btn-outline-danger" id="ep-event-delete">Delete</button>
            <button type="button" class="btn btn-sm btn-outline-dark" id="ep-event-export">Export</button>
            <button type="button" class="btn btn-sm btn-outline-dark" id="ep-event-import">Import</button>
            <input type="file" id="ep-event-import-file" accept="application/json,.json" hidden>
        </div>
        <div id="ep-opponent-list"></div>
        <button type="button" class="btn btn-sm btn-outline-primary ep-add-btn" id="ep-add-opponent">
            + Add Opponent
        </button>
    `);

    panel.append(body);
    return panel;
}

function epBuildToggle() {
    return $('<button type="button" id="ep-builder-toggle" class="ep-builder-toggle">' +
        '<i class="fas fa-book"></i>&nbsp;Guide Builder</button>');
}

function epBuildPickerModal() {
    var modal = $(`
        <div class="modal fade" id="ep-debuff-modal">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Pick a debuff / effect</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <input type="text" class="form-control form-control-sm mb-2" id="ep-debuff-search"
                            placeholder="Search name" autocomplete="off">
                        <div id="ep-debuff-groups"></div>
                    </div>
                </div>
            </div>
        </div>
    `);

    var groupsRoot = modal.find('#ep-debuff-groups');
    var byGroup = {};

    epGetEffectCatalog().forEach(function (entry) {
        var groupId = entry.group || 'other';
        if (!byGroup[groupId])
            byGroup[groupId] = [];
        byGroup[groupId].push(entry);
    });

    epGetEffectGroups().forEach(function (group) {
        var entries = byGroup[group.id] || [];
        if (!entries.length)
            return;

        var section = $('<section class="ep-debuff-group"></section>');
        section.attr('data-group', group.id);
        section.append($('<h6 class="ep-debuff-group-title"></h6>').text(group.label));

        var grid = $('<div class="ep-debuff-grid"></div>');
        entries.forEach(function (entry) {
            var label = entry.label || epDebuffLabel(entry.key);
            var option = $('<button type="button" class="ep-debuff-option"></button>');
            option.attr('data-key', entry.key);
            option.attr('data-group', group.id);
            option.attr('data-search', (entry.key + ' ' + label + ' ' + group.label).toLowerCase());
            option.append('<span class="ep-debuff-icon">' + decorateSpIcon(entry.key, true) + '</span>');
            option.append($('<span class="ep-debuff-label"></span>').text(label));
            grid.append(option);
        });

        section.append(grid);
        groupsRoot.append(section);
    });

    return modal;
}

// ---------- rendering the draft ----------

function epSelectHtml(options, selected) {
    var html = '';
    options.forEach(function (opt) {
        var value = typeof opt === 'object' ? opt.value : opt;
        var label = typeof opt === 'object' ? opt.label : opt;
        var isSelected = String(value) === String(selected) ? ' selected' : '';
        html += '<option value="' + value + '"' + isSelected + '>' + label + '</option>';
    });
    return html;
}

function epRenderAction(action, actionIndex) {
    var row = $('<div class="ep-action"></div>');
    row.attr('data-action', actionIndex);

    var iconBtn = $('<button type="button" class="ep-action-icon-btn"></button>');
    if (action.type) {
        iconBtn.html(decorateSpIcon(action.type, true));
        iconBtn.attr('title', epDebuffLabel(action.type));
    } else {
        iconBtn.html('<i class="fas fa-plus"></i>');
        iconBtn.attr('title', 'Pick effect');
    }
    row.append(iconBtn);

    var nameSpan = $('<span class="ep-action-name"></span>');
    nameSpan.text(action.type ? epDebuffLabel(action.type) : 'Pick effect');
    row.append(nameSpan);

    var turn = $('<input type="text" class="form-control form-control-sm ep-action-turn" placeholder="T">');
    turn.attr('data-field', 'action.turn').val(action.turn || '');
    row.append(turn);

    var detail = $('<input type="text" class="form-control form-control-sm ep-action-detail" placeholder="detail">');
    detail.attr('data-field', 'action.detail').val(action.detail || '');
    row.append(detail);

    row.append('<button type="button" class="btn btn-sm btn-link ep-remove ep-remove-action" title="Remove">&times;</button>');

    return row;
}

function epRenderDetail(detail, detailIndex) {
    var box = $('<div class="ep-detail"></div>');
    box.attr('data-detail', detailIndex);

    var head = $('<div class="ep-detail-head"></div>');
    var phase = $('<input type="text" class="form-control form-control-sm" list="ep-phase-presets" placeholder="Preemp">');
    phase.attr('data-field', 'detail.type').val(detail.type || '');
    head.append(phase);
    head.append('<button type="button" class="btn btn-sm btn-link ep-remove ep-remove-detail" title="Remove">&times;</button>');
    box.append(head);

    var actions = $('<div class="ep-action-list"></div>');
    (detail.action || []).forEach(function (action, i) {
        actions.append(epRenderAction(action, i));
    });
    box.append(actions);

    box.append('<button type="button" class="btn btn-sm btn-outline-secondary ep-add-btn ep-add-action">+ Add Action</button>');

    return box;
}

function epRenderStage(stage, stageIndex) {
    var box = $('<div class="ep-stage"></div>');
    box.attr('data-stage', stageIndex);

    var head = $('<div class="ep-stage-head"></div>');
    head.append('<span class="ep-stage-title">Stage ' + (stageIndex + 1) + '</span>');
    head.append('<button type="button" class="btn btn-sm btn-link ep-remove ep-remove-stage" title="Remove">&times;</button>');
    box.append(head);

    var bossRow = $('<div class="ep-field-row"></div>');
    bossRow.append($('<input type="text" class="form-control form-control-sm" placeholder="Boss name (optional)">')
        .attr('data-field', 'stage.bossName').val(stage.bossName || ''));
    bossRow.append($('<select class="form-control form-control-sm ep-narrow"></select>')
        .attr('data-field', 'stage.bossType')
        .html(epSelectHtml(EP_TYPES, stage.bossType || 'STR')));
    box.append(bossRow);

    var statRow = $('<div class="ep-field-row"></div>');
    statRow.append($('<input type="text" class="form-control form-control-sm" placeholder="HP">')
        .attr('data-field', 'stage.hp').val(stage.hp || ''));
    statRow.append($('<label class="ep-check"><input type="checkbox" data-field="stage.hpConfirmed"' +
        (stage.hpConfirmed ? ' checked' : '') + '> confirmed</label>'));
    box.append(statRow);

    var atkRow = $('<div class="ep-field-row"></div>');
    atkRow.append($('<input type="text" class="form-control form-control-sm" placeholder="ATK">')
        .attr('data-field', 'stage.atk').val(stage.atk || ''));
    atkRow.append($('<label class="ep-check"><input type="checkbox" data-field="stage.atkConfirmed"' +
        (stage.atkConfirmed ? ' checked' : '') + '> confirmed</label>'));
    box.append(atkRow);

    var weakRow = $('<div class="ep-field-row"></div>');
    weakRow.append($('<input type="text" class="form-control form-control-sm" list="ep-weakness-presets" placeholder="Weakness (optional)">')
        .attr('data-field', 'stage.weakness').val(stage.weakness || ''));
    box.append(weakRow);

    var details = $('<div class="ep-detail-list"></div>');
    (stage.detail || []).forEach(function (detail, i) {
        details.append(epRenderDetail(detail, i));
    });
    box.append(details);

    box.append('<button type="button" class="btn btn-sm btn-outline-secondary ep-add-btn ep-add-detail">+ Add Detail</button>');

    return box;
}

function epRenderOpponent(op, opIndex) {
    var box = $('<div class="ep-opponent"></div>');
    box.attr('data-op', opIndex);

    var head = $('<div class="ep-opponent-head"></div>');
    head.append('<span class="ep-opponent-title">Opponent ' + (opIndex + 1) + '</span>');
    head.append('<button type="button" class="btn btn-sm btn-link ep-remove ep-remove-opponent" title="Remove">&times;</button>');
    box.append(head);

    var nameRow = $('<div class="ep-field-row"></div>');
    nameRow.append($('<input type="text" class="form-control form-control-sm" placeholder="Opponent name">')
        .attr('data-field', 'op.name').val(op.name || ''));
    nameRow.append($('<select class="form-control form-control-sm ep-narrow"></select>')
        .attr('data-field', 'op.type')
        .html(epSelectHtml(EP_TYPES, op.type || 'STR')));
    box.append(nameRow);

    var boardRow = $('<div class="ep-field-row"></div>');
    boardRow.append($('<select class="form-control form-control-sm"></select>')
        .attr('data-field', 'op.pos')
        .html(epSelectHtml(EP_BOARDS.map(function (b) {
            return { value: b.pos, label: b.label };
        }), op.pos)));
    box.append(boardRow);

    var recRow = $('<div class="ep-field-row"></div>');
    recRow.append($('<input type="text" class="form-control form-control-sm" placeholder="Recommended unit IDs e.g. 4608, 4609">')
        .attr('data-field', 'op.rec').val((op.rec || []).join(', ')));
    box.append(recRow);

    var stages = $('<div class="ep-stage-list"></div>');
    (op.stages || []).forEach(function (stage, i) {
        stages.append(epRenderStage(stage, i));
    });
    box.append(stages);

    box.append('<button type="button" class="btn btn-sm btn-outline-primary ep-add-btn ep-add-stage">+ Add Stage</button>');

    return box;
}

function epRenderDraft() {
    var list = $('#ep-opponent-list');
    list.empty();

    if (!epDraft)
        epDraft = epNewDraft();

    $('#ep-event-name').val(epDraft.name || '');

    if (!epDraft.opponents.length) {
        list.append('<div class="ep-empty">No opponent yet — press Add Opponent</div>');
        return;
    }

    epDraft.opponents.forEach(function (op, i) {
        list.append(epRenderOpponent(op, i));
    });
}

function epRefreshEventOptions() {
    var select = $('#tm-select');
    if (!select.length)
        return;

    var group = $('#ep-custom-optgroup');
    if (!group.length) {
        group = $('<optgroup id="ep-custom-optgroup" label="My Custom Events"></optgroup>');
        select.prepend(group);
    }

    group.empty();
    epStore.events.forEach(function (evt) {
        group.append($('<option class="tm-option glb-tm"></option>')
            .val(evt.id + '_glb')
            .text(evt.name || ('Custom ' + evt.id)));
    });

    var builderSelect = $('#ep-event-select');
    builderSelect.empty();
    builderSelect.append('<option value="">(new event)</option>');
    epStore.events.forEach(function (evt) {
        builderSelect.append($('<option></option>')
            .val(evt.id)
            .text(evt.name || ('Custom ' + evt.id)));
    });

    if (epDraft && epDraft.id)
        builderSelect.val(epDraft.id);
}

// ---------- draft mutation helpers ----------

function epTargetFromEl($el) {
    var opIndex = $el.closest('.ep-opponent').data('op');
    if (typeof opIndex === 'undefined')
        return null;

    var op = epDraft.opponents[opIndex];
    if (!op)
        return null;

    var result = { op: op };

    var $stage = $el.closest('.ep-stage');
    if ($stage.length) {
        result.stage = op.stages[$stage.data('stage')];
        if (!result.stage)
            return result;
    }

    var $detail = $el.closest('.ep-detail');
    if ($detail.length && result.stage) {
        result.detail = result.stage.detail[$detail.data('detail')];
        if (!result.detail)
            return result;
    }

    var $action = $el.closest('.ep-action');
    if ($action.length && result.detail)
        result.action = result.detail.action[$action.data('action')];

    return result;
}

function epApplyFieldChange($el) {
    var field = $el.data('field');
    if (!field)
        return;

    var parts = String(field).split('.');
    var scope = parts[0];
    var key = parts[1];

    var target = epTargetFromEl($el);
    if (!target || !target[scope])
        return;

    var obj = target[scope];

    if ($el.is(':checkbox')) {
        obj[key] = $el.prop('checked');
        return;
    }

    if (key === 'pos') {
        obj[key] = parseInt($el.val());
        return;
    }

    if (key === 'rec') {
        obj[key] = String($el.val()).split(',').map(function (part) {
            return parseInt(part.trim());
        }).filter(function (num) {
            return !isNaN(num);
        });
        return;
    }

    obj[key] = $el.val();
}

function epNextFreeBoard() {
    var used = {};
    epDraft.opponents.forEach(function (op) {
        used[op.pos] = true;
    });

    for (var i = 0; i < EP_BOARDS.length; i++) {
        if (!used[EP_BOARDS[i].pos])
            return EP_BOARDS[i].pos;
    }
    return 0;
}

function epSaveDraft() {
    if (!epDraft.name) {
        alert('Please give the event a name.');
        return false;
    }

    if (!epDraft.id) {
        var newId = epNextCustomId();
        if (newId === null) {
            alert('No free custom event slot left. Delete an old custom event first.');
            return false;
        }
        epDraft.id = newId;
    }

    var existing = epFindEvent(epDraft.id);
    var copy = JSON.parse(JSON.stringify(epDraft));

    if (existing)
        epStore.events[epStore.events.indexOf(existing)] = copy;
    else
        epStore.events.push(copy);

    epWriteStore();
    epRegisterCustomEvents();
    epRefreshEventOptions();

    return true;
}

function epDeleteDraft() {
    if (!epDraft.id)
        return;

    var existing = epFindEvent(epDraft.id);
    if (!existing)
        return;

    if (!confirm('Delete "' + (existing.name || existing.id) + '"?'))
        return;

    var deletedId = existing.id;
    epStore.events.splice(epStore.events.indexOf(existing), 1);
    epWriteStore();
    delete tm_opponents[deletedId];

    epDraft = epNewDraft();
    epRefreshEventOptions();
    epRenderDraft();

    if (parseInt($('#tm-select').val()) === deletedId) {
        var newest = $('#newest-tm-glb').val();
        $('#tm-select').val(newest).trigger('change');
    }
}

function epExportEvents() {
    var blob = new Blob([JSON.stringify(epStore, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob);

    var link = $('<a></a>')
        .attr('href', url)
        .attr('download', 'optc-custom-guides.json');

    $('body').append(link);
    link[0].click();
    link.remove();
    URL.revokeObjectURL(url);
}

function epImportEvents(text) {
    var parsed;
    try {
        parsed = JSON.parse(text);
    } catch (err) {
        alert('Not a valid JSON file.');
        return;
    }

    var incoming = Array.isArray(parsed) ? parsed : (parsed && parsed.events);
    if (!Array.isArray(incoming)) {
        alert('No events found in this file.');
        return;
    }

    incoming.forEach(function (evt) {
        if (!evt || !evt.name)
            return;

        var copy = JSON.parse(JSON.stringify(evt));
        copy.opponents = copy.opponents || [];

        // Always re-assign an id so imports never overwrite existing events
        copy.id = null;
        copy.id = epNextCustomId();
        if (copy.id === null)
            return;

        epStore.events.push(copy);
    });

    epWriteStore();
    epRegisterCustomEvents();
    epRefreshEventOptions();
    alert('Import done.');
}

function epFilterDebuffPicker(query) {
    query = (query || '').toLowerCase();

    $('#ep-debuff-groups .ep-debuff-group').each(function () {
        var $group = $(this);
        var visibleCount = 0;

        $group.find('.ep-debuff-option').each(function () {
            var match = !query || $(this).attr('data-search').indexOf(query) !== -1;
            $(this).toggle(match);
            if (match)
                visibleCount++;
        });

        $group.toggle(visibleCount > 0);
    });
}

function epOpenPicker($iconBtn) {
    epPickerTarget = $iconBtn;
    $('#ep-debuff-search').val('');
    epFilterDebuffPicker('');

    var $modal = $('#ep-debuff-modal');
    $modal.one('shown.bs.modal', function () {
        $('#ep-debuff-search').trigger('focus');
    });
    $modal.modal();
}

// ---------- wiring ----------

$(document).ready(function () {
    if (!$('#tm-select').length)
        return;

    $('body').append(epBuildPanel());
    $('body').append(epBuildToggle());
    $('body').append(epBuildPickerModal());

    var phaseList = $('<datalist id="ep-phase-presets"></datalist>');
    epCollectPhasePresets().forEach(function (phase) {
        phaseList.append($('<option></option>').attr('value', phase));
    });
    $('body').append(phaseList);

    var weaknessList = $('<datalist id="ep-weakness-presets"></datalist>');
    EP_TYPES.concat(EP_CLASSES).forEach(function (value) {
        weaknessList.append($('<option></option>').attr('value', value));
    });
    $('body').append(weaknessList);

    epDraft = epNewDraft();
    epRefreshEventOptions();
    epRenderDraft();

    // If the page already loaded a custom event, edit it right away
    var activeId = parseInt($('#tm-select').val());
    if (epIsCustomEvent(activeId)) {
        epDraft = JSON.parse(JSON.stringify(epFindEvent(activeId)));
        epRefreshEventOptions();
        epRenderDraft();
    }

    $('#ep-builder-toggle').click(function () {
        $('#ep-guide-builder').toggleClass('open');
        $(this).toggleClass('active');
    });

    $('#ep-builder-close').click(function () {
        $('#ep-guide-builder').removeClass('open');
        $('#ep-builder-toggle').removeClass('active');
    });

    $('#ep-event-name').on('input', function () {
        epDraft.name = $(this).val();
    });

    $('#ep-event-select').change(function () {
        var value = $(this).val();

        if (!value) {
            epDraft = epNewDraft();
        } else {
            var found = epFindEvent(value);
            epDraft = found ? JSON.parse(JSON.stringify(found)) : epNewDraft();
        }

        epRenderDraft();
    });

    $('#ep-event-save').click(function () {
        if (epSaveDraft())
            alert('Saved.');
    });

    $('#ep-event-open').click(function () {
        if (!epSaveDraft())
            return;

        $('#tm-select').val(epDraft.id + '_glb').trigger('change');
        $('#ep-guide-builder').removeClass('open');
        $('#ep-builder-toggle').removeClass('active');
    });

    $('#ep-event-new').click(function () {
        epDraft = epNewDraft();
        $('#ep-event-select').val('');
        epRenderDraft();
    });

    $('#ep-event-delete').click(epDeleteDraft);
    $('#ep-event-export').click(epExportEvents);

    $('#ep-event-import').click(function () {
        $('#ep-event-import-file').val('').click();
    });

    $('#ep-event-import-file').change(function () {
        var file = this.files && this.files[0];
        if (!file)
            return;

        var reader = new FileReader();
        reader.onload = function () {
            epImportEvents(reader.result);
        };
        reader.readAsText(file);
    });

    $('#ep-add-opponent').click(function () {
        if (epDraft.opponents.length >= EP_BOARDS.length) {
            alert('All 6 boards are already used.');
            return;
        }

        epDraft.opponents.push(epNewOpponent(epNextFreeBoard()));
        epRenderDraft();
    });

    $(document).on('input change', '#ep-opponent-list [data-field]', function () {
        epApplyFieldChange($(this));
    });

    $(document).on('click', '.ep-add-stage', function () {
        var target = epTargetFromEl($(this));
        target.op.stages.push(epNewStage());
        epRenderDraft();
    });

    $(document).on('click', '.ep-add-detail', function () {
        var target = epTargetFromEl($(this));
        target.stage.detail.push(epNewDetail());
        epRenderDraft();
    });

    $(document).on('click', '.ep-add-action', function () {
        var target = epTargetFromEl($(this));
        target.detail.action.push(epNewAction());
        epRenderDraft();
    });

    $(document).on('click', '.ep-remove-opponent', function () {
        epDraft.opponents.splice($(this).closest('.ep-opponent').data('op'), 1);
        epRenderDraft();
    });

    $(document).on('click', '.ep-remove-stage', function () {
        var target = epTargetFromEl($(this));
        target.op.stages.splice($(this).closest('.ep-stage').data('stage'), 1);
        epRenderDraft();
    });

    $(document).on('click', '.ep-remove-detail', function () {
        var target = epTargetFromEl($(this));
        target.stage.detail.splice($(this).closest('.ep-detail').data('detail'), 1);
        epRenderDraft();
    });

    $(document).on('click', '.ep-remove-action', function () {
        var target = epTargetFromEl($(this));
        target.detail.action.splice($(this).closest('.ep-action').data('action'), 1);
        epRenderDraft();
    });

    $(document).on('click', '.ep-action-icon-btn', function () {
        epOpenPicker($(this));
    });

    $('#ep-debuff-search').on('input', function () {
        epFilterDebuffPicker($(this).val());
    });

    $(document).on('click', '.ep-debuff-option', function () {
        if (!epPickerTarget)
            return;

        var target = epTargetFromEl(epPickerTarget);
        if (target && target.action)
            target.action.type = $(this).attr('data-key');

        epPickerTarget = null;
        $('#ep-debuff-modal').modal('hide');
        epRenderDraft();
    });
});

// Merge stored custom events before tm-planner's ready handler calls init()
epRegisterCustomEvents();
