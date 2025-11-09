$(document).ready(function () {
    $('#guide-raw').change(function () {
        const guideRaw = $(this).val();

        let guideConverted = guideRaw;

        guideReplacements.forEach(({ regex, replacement }) => {
            guideConverted = guideConverted.replace(regex, replacement);
        });

        // Remove empty lines
        guideConverted = guideConverted.replace(/^$\n/gm, "");

        // Not translated
        guideConverted = guideConverted.replace(/^(\n?)([^\{].+[^\}])(\n?)$/gm, "$1\"Not Translated: $2\",$3");

        // Remove last comma to make valid JSON
        guideConverted = guideConverted.replace(/,\s*$/, "");

        guideConverted = `[${guideConverted}]`;

        $('#guide-converted').val(guideConverted);

        var guideStageTypeClone = $('#guide-stage-type-clone').clone();
        guideStageTypeClone.attr('id', 'guide-converter-stage-type');
        decorateGuideAction(JSON.parse(guideConverted), 'guide-converter', guideStageTypeClone, -1);

        $('#guide-display-div').empty();
        $('#guide-display-div').append(guideStageTypeClone);
    });
});