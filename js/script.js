$(document).ready(function() {
	displayNextImage();
})
	
function displayNextImage() {
	console.log(i, x);
	console.log(img[i][x]);
	if(x >= img[1].length){
        x = 0;
    } 
	document.getElementById("img").src=img[i][x];
	document.getElementById("img-mob").src=img[i][x];
	x++;
	setTimeout("displayNextImage()", 3000);
}

var i = Math.floor(Math.random()*2);
console.log(i)

x = 0;
var img = []; 
img[0]= [];
img[1]= [];
img[0][0]= "img/normal_world.png";
img[0][1]=	"img/p2p_world.png"
img[1][0]= "img/normal.png"
img[1][1]=	"img/p2p.png"

/*
$(document).ready(function() {
startTimer();
})

function displayNextImage() {
	console.log(img[x])
	if(x >= img.length){
        x = 0;
    } 
	document.getElementById("img").src=img[x];
	document.getElementById("img-mob").src=img[x];
	x++;

}
 
function startTimer() {
    setInterval(displayNextImage, 3000);
}

var img = [], x = 0;
img[0]= "img/normal_world.png";
img[1]=	"img/p2p_world.png"
img[2]= "img/normal.png"
img[3]=	"img/p2p.png"
setInterval(changeImage, 3000);

function changeImage() {
    x = x < img.length ? x : 0;
    $('#img').fadeOut(200, function(){
        $(this).attr('src', img[x]).fadeIn(200);
    })
    x++;
}
*/