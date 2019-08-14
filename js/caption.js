var x = 0;
var y = 0;
var z = 0;
var text1 = "tech geek";
var text2 = "car nerd";
var text3 = "code fanatic";
var speed = 150;

function printCaption() {
	setTimeout(line1, 3000);
	setTimeout(line2, 3000 + (text1.length + 3) * 150);
	setTimeout(line3, 3000 + (text1.length + 3 + text2.length + 3) * 150);
}

function line1() {
  if(x < text1.length) {
		document.getElementById("line1").innerHTML += text1.charAt(x);
    x++;
    setTimeout(line1, speed);
  }
}

function line2() {
  if(y < text2.length) {
		document.getElementById("line2").innerHTML += text2.charAt(y);
    y++;
    setTimeout(line2, speed);
  }
}

function line3() {
  if(z < text3.length) {
		document.getElementById("line3").innerHTML += text3.charAt(z);
    z++;
    setTimeout(line3, speed);
  }
}