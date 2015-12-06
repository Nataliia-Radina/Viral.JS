$(document).ready(function() {
	createImageTag(images, "gallery");
	createImageTag(images, "gallery-mob");
})

var SPEED = 300;
var DELAY = 3000;
var images = [
["img/p2p_world.png", "img/normal_world.png"],
["img/p2p.png", "img/normal.png"]
]; 

function getImages() {
	var randomIndex = Math.floor(Math.random()*2);
	return images[randomIndex];
}

images = getImages();

function createImageTag(arr, id) {
	var elements = [];
	for (i = 0; i < images.length; i++) {
		var img = document.createElement('img');
		img.src = images[i];
		img.id = "img"+i; 
		document.getElementById(id).appendChild(img);
		elements.push(img);
	}
	function hideImage() {
		$(elements[1]).fadeOut(SPEED);
		setTimeout(showImage, DELAY);
	}

	function showImage() {
		$(elements[1]).fadeIn(SPEED);
		setTimeout(hideImage, DELAY);
	}

	setTimeout(hideImage, DELAY);
}



