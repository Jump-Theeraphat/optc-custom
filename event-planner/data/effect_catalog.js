// Catalog of effects for the Guide Builder picker.
// Icons still render via CSS class `{key}-div` (see decorateSpIcon).
// Groups follow boss-effect categories used in Mini Guides.

var EFFECT_GROUPS = [
    { id: 'immunity', label: 'Immunity' },
    { id: 'status', label: 'Status' },
    { id: 'chain', label: 'Chain' },
    { id: 'slot', label: 'Slot' },
    { id: 'barrier', label: 'Barrier' },
    { id: 'damage', label: 'Damage' },
    { id: 'other', label: 'Other' }
];

var effect_catalog = [
    // ---------- Immunity ----------
    { key: 'immu-all', label: 'All Immunity', group: 'immunity' },
    { key: 'immu-delay', label: 'Delay Immunity', group: 'immunity' },
    { key: 'immu-def', label: 'Defense Down Immunity', group: 'immunity' },
    { key: 'immu-poison', label: 'Poison Immunity', group: 'immunity' },
    { key: 'immu-except', label: 'All Immunity Except', group: 'immunity' },
    // { key: 'Immu Instant Defeat', label: 'Immu Instant Defeat', group: 'immunity' },
    { key: 'immu-blow-away', label: 'Blow Away Immunity', group: 'immunity' },

    // ---------- Status ----------
    { key: 'bind', label: 'Bind', group: 'status' },
    { key: 'desp', label: 'Despair', group: 'status' },
    { key: 'sp-bind', label: 'Special Bind', group: 'status' },
    { key: 'para', label: 'Paralysis', group: 'status' },
    { key: 'blind', label: 'Blind', group: 'status' },
    { key: 'burn', label: 'Burn', group: 'status' },
    { key: 'burn-p', label: 'Burn while Perfect', group: 'status' },
    { key: 'atk-down', label: 'Atk Down', group: 'status' },
    { key: 'stun', label: 'Stun', group: 'status' },
    { key: 'fear', label: 'Fear', group: 'status' },
    { key: 'silence', label: 'Action Silence', group: 'status' },
    { key: 'heal-bind', label: 'Heal Bind', group: 'status' },
    { key: 'heal-down', label: 'Heal Down', group: 'status' },
    { key: 'ship-bind', label: 'Ship Bind', group: 'status' },
    { key: 'ca-swap', label: 'Captain Swap', group: 'status' },
    { key: 'blow-away', label: 'Blow Away', group: 'status' },
    { key: 'nao', label: 'Normal Attack Only', group: 'status' },
    { key: 'sp-limit', label: 'Limit Special Usage', group: 'status' },
    { key: 'tap-limit', label: 'Tap Limit', group: 'status' },
    { key: 'target-lock', label: 'Target Lock', group: 'status' },
    { key: 'intim', label: 'Intimidate', group: 'status' },
    { key: 'hunger', label: 'Hunger', group: 'status' },
    { key: 'cd-rew', label: 'CD Rewind', group: 'status' },
    { key: 'cd-lock', label: 'CD Lock', group: 'status' },
    { key: 'p-hard', label: 'Makes Perfect Harder', group: 'status' },
    { key: 'p-easy', label: 'Makes Perfect Easier', group: 'status' },
    { key: 'clear-buff', label: 'Clear Buff', group: 'status' },
    { key: 'type-change', label: 'Type Change', group: 'status' },

    // ---------- Chain ----------
    { key: 'chain-lock', label: 'Chain Lock', group: 'chain' },
    { key: 'chain-down', label: 'Chain Down', group: 'chain' },
    { key: 'chain-bound', label: 'Set Chain Boundary', group: 'chain' },
    { key: 'chain-atk-down-min', label: 'Chain ATK Down (Min)', group: 'chain' },
    { key: 'chain-atk-down-max', label: 'Chain ATK Down (Max)', group: 'chain' },
    { key: 'chain-add', label: 'Chain Boost (Add)', group: 'chain' },
    { key: 'chain-mult', label: 'Chain Boost (Multiply)', group: 'chain' },

    // ---------- Slot ----------
    { key: 'slot-block', label: 'Change to BLOCK Slots', group: 'slot' },
    { key: 'slot-para', label: 'Change to PARALYSIS Slots', group: 'slot' },
    { key: 'slot-poison', label: 'Change to POISON Slots', group: 'slot' },
    { key: 'slot-neg', label: 'Treat Slots as Badly Matching', group: 'slot' },
    { key: 'slot-bind', label: 'Slot Bind', group: 'slot' },
    { key: 'slot-change', label: 'Change Slots', group: 'slot' },
    { key: 'slot-change-block', label: 'Change BLOCK Slots', group: 'slot' },
    { key: 'slot-lock', label: 'Lock Slots', group: 'slot' },
    { key: 'slot-lock-tap', label: 'Lock Slot until Certain Tap', group: 'slot' },
    { key: 'slot-pos', label: 'Treat Slots as Matching', group: 'slot' },
    // { key: 'slot-pos-pass', label: 'Treat Slots as Matching', group: 'slot' },
    { key: 'slot-atk-down', label: 'Slot Atk Down', group: 'slot' },
    // { key: 'slot-effect-down', label: 'Slot Effect Down', group: 'slot' },
    { key: 'orb-boost', label: 'Slot Effect Boost', group: 'slot' },

    // ---------- Barrier ----------
    { key: 'bar-p', label: 'Perfect Barrier', group: 'barrier' },
    { key: 'bar-gt', label: 'Great Barrier', group: 'barrier' },
    { key: 'bar-gd', label: 'Good Barrier', group: 'barrier' },
    { key: 'bar-hit', label: 'Hit Barrier', group: 'barrier' },
    { key: 'bar-slot', label: 'Slot Barrier', group: 'barrier' },
    { key: 'bar-hp', label: 'HP Barrier', group: 'barrier' },

    // ---------- Damage ----------
    { key: 'dmg-normal', label: 'Damage', group: 'damage' },
    { key: 'dmg-fixed', label: 'Fixed Damage', group: 'damage' },
    { key: 'dmg-eot', label: 'End of Turn Damage', group: 'damage' },
    { key: 'dmg-eot-e', label: 'End of Turn Damage (Enemy)', group: 'damage' },
    { key: 'dmg-add', label: 'Additional Damage', group: 'damage' },
    { key: 'hp-cut', label: 'HP Cut', group: 'damage' },
    { key: 'dmg-limit', label: 'Damage Limit', group: 'damage' },
    { key: 'inc-dmg', label: 'Increase Damage Taken', group: 'damage' },
    { key: 'anti-heal', label: 'Receive Damage from Healing', group: 'damage' },
    { key: 'anti-rcv', label: 'Receive Damage from Consuming RCV', group: 'damage' },
    { key: 'bleed', label: 'Bleed', group: 'damage' },
    { key: 'pain', label: 'Pain', group: 'damage' },
    { key: 'poison', label: 'Poison', group: 'damage' },
    { key: 'counter', label: 'Counter', group: 'damage' },

    // ---------- Other ----------
    { key: 'atk', label: 'Increase Atk', group: 'other' },
    { key: 'def', label: 'Increase Defense', group: 'other' },
    { key: 'def-perc', label: '% Damage Reduce', group: 'other' },
    { key: 'def-thres', label: 'Threshold Damage Reduce', group: 'other' },
    { key: 'def-null', label: 'Nullify Damage', group: 'other' },
    { key: 'resil', label: 'Resilience', group: 'other' },
    { key: 'enrage', label: 'Enrage', group: 'other' },
    { key: 'fixed-target', label: 'Fixed Target', group: 'other' },
    { key: 'heal', label: 'Heal', group: 'other' },
    { key: 'territory', label: 'Territory', group: 'other' },
    { key: 'territory-enemy', label: 'Territory (Enemy)', group: 'other' },
    { key: 'nullify-potential-ability', label: 'Nullify Potential Ability', group: 'other' },
    { key: 'delay', label: 'Delay', group: 'other' },
    { key: 'def-down', label: 'Reduce Enemy Defense', group: 'other' },
    { key: 'bypass-def', label: 'Bypass Enemy Defense', group: 'other' },
    { key: 'cd-red', label: 'Reduce Special Charge', group: 'other' },
    { key: 'cd-rew-red', label: 'Reduce Special Rewind', group: 'other' },
    { key: 'vs-red', label: 'Reduce VS Gauge', group: 'other' },
    { key: 'sw-red', label: 'Reduce Super Switch Gauge', group: 'other' },
    { key: 'atk-boost', label: 'Attack Boost', group: 'other' },
    { key: 'affinity', label: 'Color Affinity', group: 'other' },
    { key: 'atk-delay', label: 'Delay Atk Boost', group: 'other' },
    { key: 'atk-def-down', label: 'Defense Down Atk Boost', group: 'other' },
    { key: 'atk-poison', label: 'Poison Atk Boost', group: 'other' },
    { key: 'atk-burn', label: 'Burn Atk Boost', group: 'other' },
    { key: 'atk-inc-dmg', label: 'Increase Damage Taken Atk Boost', group: 'other' },
    { key: 'base-atk-boost', label: 'Base Attack Boost', group: 'other' },
    { key: 'bind-red', label: 'Reduce Bind', group: 'other' },
    { key: 'desp-red', label: 'Reduce Despair', group: 'other' },
    { key: 'sp-bind-red', label: 'Reduce Special Bind', group: 'other' },
    { key: 'para-red', label: 'Reduce Paralysis', group: 'other' },
    { key: 'poison-red', label: 'Reduce Poison', group: 'other' },
    { key: 'blind-red', label: 'Reduce Blind', group: 'other' },
    { key: 'burn-red', label: 'Reduce Burn', group: 'other' },
    { key: 'atk-down-red', label: 'Reduce Atk Down', group: 'other' },
    { key: 'stun-red', label: 'Remove Stun', group: 'other' },
    { key: 'ca-swap-red', label: 'Remove Captain Swap', group: 'other' },
    { key: 'chain-lock-red', label: 'Reduce Chain Lock / Limit', group: 'other' },
    { key: 'chain-down-red', label: 'Reduce Chain Down', group: 'other' },
    { key: 'inc-dmg-red', label: 'Reduce Increase Damage Taken', group: 'other' },
    { key: 'dmg-eot-red-e', label: 'Reduce Enemy End of Turn Damage', group: 'other' },
    { key: 'def-red-e', label: 'Reduce Enemy Def Up', group: 'other' },
    { key: 'def-perc-red-e', label: 'Reduce Enemy % Damage Reduction', group: 'other' },
    { key: 'def-thres-red-e', label: 'Reduce Enemy Threshold Damage Reduction', group: 'other' },
    { key: 'def-null-red-e', label: 'Reduce Enemy Nullify Damage', group: 'other' },
    { key: 'bar-red-e', label: 'Reduce Enemy Barrier', group: 'other' },
    { key: 'resil-red-e', label: 'Reduce Enemy Resilience', group: 'other' },
    { key: 'enrage-red-e', label: 'Reduce Enemy Enrage', group: 'other' }
];

function getEffectCatalogEntry(key) {
    if (typeof effect_catalog === 'undefined')
        return null;

    for (var i = 0; i < effect_catalog.length; i++) {
        if (effect_catalog[i].key === key)
            return effect_catalog[i];
    }
    return null;
}

function getEffectCatalogLabel(key) {
    var entry = getEffectCatalogEntry(key);
    if (entry)
        return entry.label;

    if (typeof icon_tooltips !== 'undefined' && icon_tooltips[key])
        return icon_tooltips[key];

    return key;
}
