function imgError(img) {
    img.onerror = '';
    img.src = '/tm-planner/assets/img/new-thumbs/0000.png';

    return true;
}

function getThumb(thumbId) {
    // Special case for 1 Turn Dmg Ranking
    if (thumbId === '1_turn_dmg_rank')
        return '/optc-cal/assets/img/1_turn_dmg_rank.jpg';

    // Special case for Universal SP Book
    if (thumbId === 'univ_sp')
        return '/optc-cal/assets/img/univ_sp.png';

    // Special case for Generic thumb
    if (thumbId === 'generic')
        return '/tm-planner/assets/img/new-thumbs/0000.png';

    // Zero pad IDs to get correct thumb
    var paddedThumbId = ('0000' + thumbId).slice(-4);

    // Special case for Kung Fu Luffy
    if (paddedThumbId === '5014' || paddedThumbId === '4987')
        return '/tm-planner/assets/img/new-thumbs/5014.png';

    // Special case for Log Vivi
    if (paddedThumbId === '5030' || paddedThumbId === '4989')
        return '/tm-planner/assets/img/new-thumbs/5030.png';

    // Special case for Log Ace
    if (paddedThumbId === '5032' || paddedThumbId === '4991')
        return '/tm-planner/assets/img/new-thumbs/5032.png';

    // Special case for Swimsuit Pudding (white)
    if (paddedThumbId === '5047' || paddedThumbId === '4993')
        return '/tm-planner/assets/img/new-thumbs/5047.png';

    // Special case for Coby (EX)
    if (paddedThumbId === '5055' || paddedThumbId === '4995')
        return '/tm-planner/assets/img/new-thumbs/5055.png';

    // Special case for Helmeppo (EX)
    if (paddedThumbId === '5056' || paddedThumbId === '4996')
        return '/tm-planner/assets/img/new-thumbs/5056.png';

    // Special case for VS Units
    // Kaido VS Big Mom
    if (paddedThumbId === '9001')
        return '/tm-planner/assets/img/new-thumbs/3135-1.png';
    if (paddedThumbId === '9002')
        return '/tm-planner/assets/img/new-thumbs/3135-2.png';
    // Ace VS Akainu
    if (paddedThumbId === '9003')
        return '/tm-planner/assets/img/new-thumbs/3253-1.png';
    if (paddedThumbId === '9004')
        return '/tm-planner/assets/img/new-thumbs/3253-2.png';
    // Whitebeard VS Shanks
    if (paddedThumbId === '9005')
        return '/tm-planner/assets/img/new-thumbs/3355-1.png';
    if (paddedThumbId === '9006')
        return '/tm-planner/assets/img/new-thumbs/3355-2.png';
    // Kaido VS Yamato
    if (paddedThumbId === '9007')
        return 'https://optc-db.github.io/api/images/thumbnail/jap/3/700/3788-1.png';
    if (paddedThumbId === '9008')
        return 'https://optc-db.github.io/api/images/thumbnail/jap/3/700/3788-2.png';
    // Whitebeard VS Blackbeard
    if (paddedThumbId === '9009')
        return 'https://optc-db.github.io/api/images/thumbnail/jap/3/900/3908-1.png';
    if (paddedThumbId === '9010')
        return 'https://optc-db.github.io/api/images/thumbnail/jap/3/900/3908-2.png';
    // Luffy VS Kaido
    if (paddedThumbId === '9011')
        return '/tm-planner/assets/img/new-thumbs/4211-1.png';
    if (paddedThumbId === '9012')
        return '/tm-planner/assets/img/new-thumbs/4211-2.png';
    // Blackbeard VS Law
    if (paddedThumbId === '9013')
        return '/tm-planner/assets/img/new-thumbs/4219-1.png';
    if (paddedThumbId === '9014')
        return '/tm-planner/assets/img/new-thumbs/4219-2.png';
    // Shanks VS Kid
    if (paddedThumbId === '9015')
        return '/tm-planner/assets/img/new-thumbs/4231-1.png';
    if (paddedThumbId === '9016')
        return '/tm-planner/assets/img/new-thumbs/4231-2.png';
    // Zoro VS Lucci
    if (paddedThumbId === '9017')
        return '/tm-planner/assets/img/new-thumbs/4469-1.png';
    if (paddedThumbId === '9018')
        return '/tm-planner/assets/img/new-thumbs/4469-2.png';

    if (
        paddedThumbId == 4321
    )
        return `/tm-planner/assets/img/new-thumbs/${paddedThumbId}.png`;

    // Official Site down temp
    var digit4 = Math.floor(thumbId / 1000);
    var digit3 = Math.floor((thumbId - digit4 * 1000) / 100) + '00';

    if (paddedThumbId >= 4202)
        return `https://2shankz.github.io/optc-db.github.io/api/images/thumbnail/jap/${digit4}/${digit3}/${paddedThumbId}.png`;

    return `https://optc-db.github.io/api/images/thumbnail/jap/${digit4}/${digit3}/${paddedThumbId}.png`;
}

function createImgHtml(imgSrc, size, floatLeft) {
    var imgHtml = $('<img></img>');
    imgHtml.attr('src', imgSrc);
    imgHtml.attr('height', size);
    imgHtml.attr('width', size);
    imgHtml.attr('onerror', 'imgError(this)');

    if (floatLeft)
        imgHtml.css('float', 'left');

    return imgHtml;
}

$(document).ready(function () {
    $('#header').load('/common/header.html', function () {
        if (typeof highlightNavbar !== 'undefined')
            highlightNavbar();
    });

    $('#footer').load('/common/footer.html', function () {
        if (typeof showFooter !== 'undefined')
            showFooter();
    });
});
