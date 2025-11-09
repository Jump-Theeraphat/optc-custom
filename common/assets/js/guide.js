function decorateSpIcon(iconKey, isAction) {
    if (iconKey === 'Heal Team' ||
        iconKey === '- Max HP' ||
        iconKey === 'Bad Slot+' ||
        iconKey === 'Slot Atk Down' ||
        iconKey === 'Slot Effect Down' ||
        iconKey === 'Territory' ||
        iconKey === 'Immu Instant Defeat' ||
        iconKey === 'No Type Effect' ||
        iconKey === 'Mob' ||
        iconKey === 'Nullify Potential Ability'
    )
        return iconKey;

    if (isAction)
        iconKey = '<div class="guide-action-icon ' + iconKey + '-div"></div>';
    else
        iconKey = iconKey + '-div';

    return iconKey;
}

function decorateStr(str, isGuide) {
    // Decorate Type strings
    str = str
        .replace(/\[?(STR|DEX|QCK|PSY|INT)\]?/g, '<span class="$1-badge badge">$1</span>')
        .replace(/\[(RCV|TND|BLOCK|BOMB|RAINBOW|G|EMPTY)\]/g, '<span class="$1-div badge">$1</span>');

    // Decorate Class strings
    str = str.replace(/(Fighter|Slasher|Striker|Shooter|Free Spirit|Cerebral|Powerhouse|Driven)/g, function (match) {
        var matchClass = match.replace(' ', '-').toLowerCase();
        return '<span class="badge"><div class="' + matchClass + '-div class-decorate"></div>' + (isGuide ? '' : match) + '</span>';
    });

    if (!isGuide) {
        // highlight all numbers
        str = str.replace(/\d+(\,\d+)?(\.\d+)?(%|x| turns| turn| hp)/g, '<span class="highlight-numbers">$&</span>');
    }

    return str;
}

function createTooltip(imgDiv, text) {
    imgDiv.data('toggle', 'tooltip');
    imgDiv.data('placement', 'top');
    imgDiv.attr('title', text);
    imgDiv.tooltip({ html: true });
}

function getIconTooltip(iconKey) {
    if (icon_tooltips[iconKey])
        return icon_tooltips[iconKey];

    return '';
}

function decorateGuideAction(actionList, guideStageTypeId, guideStageTypeClone, tmId) {
    var i = 0;
    for (var ai in actionList) {
        var a = actionList[ai];

        var guideActionClone;

        if (tmId >= 4147 || tmId < 0)
            guideActionClone = $('#guide-action-clone').clone();
        else
            guideActionClone = $('#guide-action-clone-old').clone();

        var guideActionId = guideStageTypeId + '-a' + i;
        guideActionClone.attr('id', guideActionId);

        if (tmId >= 4147 || tmId < 0) {
            if (a.type) {
                guideActionClone.find('.guide-action-type').html(decorateSpIcon(a.type, true));
                createTooltip(guideActionClone.find('.guide-action-type'), getIconTooltip(a.type));

                if (a.turn)
                    guideActionClone.find('.guide-action-turn').html(`${a.turn}T`);

                if (a.detail)
                    guideActionClone.find('.guide-action-detail').html(`(${decorateStr(a.detail, true)})`);
            } else {
                guideActionClone.find('.guide-action-detail').html(a);
            }
        } else {
            guideActionClone.find('.guide-action-type').html(decorateSpIcon(a[0], true));
            createTooltip(guideActionClone.find('.guide-action-type'), getIconTooltip(a[0]));
            guideActionClone.find('.guide-action-detail').html(decorateStr(a[1], true));
        }

        var aType;

        if (tmId >= 4147)
            aType = a.type;
        else
            aType = a[0];

        if (tmId > 0) {
            var aCounter = counters[aType];
            if (aCounter) {
                if (Array.isArray(aCounter)) {
                    for (var ac in aCounter)
                        createActionCounterBtn(guideActionClone, aCounter[ac]);
                } else
                    createActionCounterBtn(guideActionClone, aCounter);
            } else if (aType === 'cd-red') {
                var tcFilterClone = $('#guide-tc-filter-clone').clone();
                tcFilterClone.attr('id', '');

                var tcFilterBtn = tcFilterClone.find('.guide-tc-filter');
                createTooltip(tcFilterBtn, "Filter these Units");

                var tcStr;

                if (tmId >= 4147)
                    tcStr = a.detail;
                else
                    tcStr = a[1].substring(a[1].indexOf(', ') + 2);

                tcFilterBtn.data('tc', tcStr);

                guideActionClone.find('.guide-filter-list').append(tcFilterClone);
            }
        }

        guideStageTypeClone.find('.guide-action-list').append(guideActionClone);
        i++;
    }
}