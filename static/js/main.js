var text="";
var image="";

var texts=[
"Dear Meili,^^This is the twice year we have known each other. Thank God for letting me meet someone like you. So pretty, cute, kind of you.",
"Last time when we travel, we are not in a group. So we did'nt have a photo. Sorry for letting you waite for so long.",
"We were studying and looking at the animation 'One Piece' together from summer holidays last year. I fall in love with you since then.",
"We said love to each other on January 8, 2013 and we become lovers. And then we spend a sweet week together. Sweetheart, I want to be with you from now to the end.^^I miss you!^^Happy Valentine's Day!"];

var images=[
"</br></br><img id=\"love_image1\" src=\"static/images/meili_1.png\" /><a href=\"#\" onclick=\"startTyping(1,'#message');return false;\">NEXT</a>",
"</br></br><img id=\"love_image2\" src=\"static/images/meili_2.png\" /><a href=\"#\" onclick=\"startTyping(2,'#message');return false;\">NEXT</a>",
"</br></br><img id=\"love_image3\" src=\"static/images/opfun.png\" /><a href=\"#\" onclick=\"startTyping(3,'#message');return false;\">NEXT</a>",
"</br></br><a href=\"#\" onclick=\"flower();return false;\">A ROSE FOR YOU</a>"
];

var delay=100;
var currentChar=1;
var destination="[not defined]";

function typing()
{
	$(destination).html(text.substr(0, currentChar).replace(/\^/g,'</br>'));
	currentChar++;
	if (currentChar>text.length){
		currentChar=1;
		$(destination).append(image);
	}else{
		setTimeout(typing, delay);
	}
}

function startTyping(textIndex, destinationParam)
{
  text=texts[textIndex];
  image=images[textIndex];
  destination=destinationParam;
  typing();
}

$(function() {
		startTyping(0, "#message");
	});