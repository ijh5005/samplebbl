"use strict";

let angleone = -24;

setInterval( () => {
	angleone -= 1;
	$(".img").css("transform", "perspective( 600px ) rotateX(-27deg) rotateY(" + angleone + "deg )");
	//$(".bubbleone").css("transform", "perspective( 600px ) rotateX(-27deg) rotateY(" + angleone + "deg )");
}, 100);

let img = 2;

setInterval( () => {
	$("img").attr("src", "img" + img + ".jpg");
	img++;
	if(img === 4){ img = 1 };
}, 10000);
