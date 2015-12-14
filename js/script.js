window.onload = function(){
	createImageTag(images, "gallery");
	createImageTag(images, "gallery-mob");
}

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
		console.log(elements)
	}

	var element = document.getElementById('img1');

	function hideImage() {
		element.style.transition = "opacity 0.3s";
		element.style.opacity = 0;
		setTimeout(showImage, DELAY);
		console.log(element);
	}

	function showImage() {
		element.style.transition = "opacity 0.3s";
		element.style.opacity = 1;
		setTimeout(hideImage, DELAY);
	}

	setTimeout(hideImage, DELAY);
}



