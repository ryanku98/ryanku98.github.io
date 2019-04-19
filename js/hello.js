var i = 0;
var text = "welcome";
var speed = 150;

function printBanner() {
	setTimeout(hello, 3000);
}

function hello() {
  if(i < text.length) {
		document.getElementById("banner").innerHTML += text.charAt(i);
    i++;
    setTimeout(hello, speed);
  }
}