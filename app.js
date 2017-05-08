let angleone = -24;
let angletwo = 14;
let anglethree = 48;
let anglefour = 4;
let anglefive = 36;
let anglesix = -12;
let angleseven = -6;
setInterval( () => {
	angleone -= 1;
	angletwo -= 1;
	anglethree -= 1;
	anglefour -= 1;
	anglefive -= 1;
	anglesix -= 1;
	angleseven -= 1;
	$(".imgone").css("transform", "perspective( 600px ) rotateX(-27deg) rotateY(" + angleone + "deg )");
	$(".bubbleone").css("transform", "perspective( 600px ) rotateX(-27deg) rotateY(" + angleone + "deg )");
	$(".imgtwo").css("transform", "perspective( 600px ) rotateX(-27deg) rotateY(" + angletwo + "deg )");
	$(".bubbletwo").css("transform", "perspective( 600px ) rotateX(-27deg) rotateY(" + angletwo + "deg )");
	$(".imgthree").css("transform", "perspective( 600px ) rotateX(-27deg) rotateY(" + anglethree + "deg )");
	$(".bubblethree").css("transform", "perspective( 600px ) rotateX(-27deg) rotateY(" + anglethree + "deg )");
	$(".imgfour").css("transform", "perspective( 600px ) rotateX(-27deg) rotateY(" + anglefour + "deg )");
	$(".bubblefour").css("transform", "perspective( 600px ) rotateX(-27deg) rotateY(" + anglefour + "deg )");
	$(".imgfive").css("transform", "perspective( 600px ) rotateX(-27deg) rotateY(" + anglefive + "deg )");
	$(".bubblefive").css("transform", "perspective( 600px ) rotateX(-27deg) rotateY(" + anglefive + "deg )");
	$(".imgsix").css("transform", "perspective( 600px ) rotateX(-27deg) rotateY(" + anglesix + "deg )");
	$(".bubblesix").css("transform", "perspective( 600px ) rotateX(-27deg) rotateY(" + anglesix + "deg )");
	$(".imgseven").css("transform", "perspective( 600px ) rotateX(-27deg) rotateY(" + angleseven + "deg )");
	$(".bubbleseven").css("transform", "perspective( 600px ) rotateX(-27deg) rotateY(" + angleseven + "deg )");
}, 100);

value = 7;
setInterval( () => {
	$(".arrow[data=" + value + "]").css("color", "#000");
	value--;
	if(value === 0){
		value = 6;
	}
	$(".arrow[data=" + value + "]").css("color", "#7659EA");
}, 500);