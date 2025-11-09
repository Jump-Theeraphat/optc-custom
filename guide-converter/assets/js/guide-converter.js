$(document).ready(function () {
    $('#guide-raw').change(function () {
        const guideRaw = $(this).val();

        let guideConverted = guideRaw;

        guideReplacements.forEach(({ regex, replacement }) => {
            guideConverted = guideConverted.replace(regex, replacement);
        });

        // Not translated
        guideConverted = guideConverted.replace(/\n([^\{].*[^\}])\n/, "\n\"Not Translated: $1\",\n");

        // Remove last comma to make valid JSON
        guideConverted = guideConverted.replace(/,\s*$/, "");

        guideConverted = `[${guideConverted}]`;

        $('#guide-converted').val(guideConverted);

        var guideStageTypeClone = $('#guide-stage-type');
        var guideJson = JSON.parse(guideConverted, (key, value) => {
            console.log(`key: ${key}, value: ${value}`);
            return typeof key === undefined ? 'Not Translated' : value;
        });
        decorateGuideAction(guideJson, 'guide-converter', guideStageTypeClone, -1);

        $('#guide-display-div').empty();
        $('#guide-display-div').append(guideStageTypeClone);
    });
});