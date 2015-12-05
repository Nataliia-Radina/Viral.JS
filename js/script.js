var img = [
    ["img/normal_world.png", "img/p2p_world.png"],
    ["img/normal.png", "img/p2p.png"]
];

var currentImageIndex = 0;
var FADE_DELAY = 3000;
var FADE_SPEED = 200;
var imagesSet = [];

var oldImageTag = {};
var currentImageTag = {};

$(document).ready(function () {
    imagesSet = getImagesToDisplay();
    createTagsForImages(imagesSet);
    setInterval(displayNextImage, FADE_DELAY);
});

function displayNextImage() {
    currentImageTag = getCurrentImageTag();
    oldImageTag = currentImageTag;
    newImageTag = getNextImageTag();

    oldImageTag.fadeOut(FADE_SPEED);
    newImageTag.fadeIn(FADE_SPEED);
}

function getCurrentImageTag() {
    return $('#img' + currentImageIndex);
}

function getNextImageTag() {
    currentImageIndex = currentImageIndex < imagesSet.length - 1 ? currentImageIndex + 1 : 0;
    return getCurrentImageTag();
}

function createTagsForImages(images) {
    var normalContainer = $('#img');
    var mobileContainer = $('#img-mob');
    for (var i = 0; i < images.length; i++) {
        var display = i === currentImageIndex ? 'block' : 'none';
        normalContainer.append('<img id="img-mob' + i + '" style="display:' + display + ';" src="' + images[i] + '"/>');
        mobileContainer.append('<img id="img-mob' + i + '" style="display:' + display + ';" src="' + images[i] + '"/>');
    }
}

function getImagesToDisplay() {
    var result = [];
    if (Math.random() > 0.5) {
        result = img[0];
    } else {
        result = img[1];
    }
    return result;
}