var x = 0;
var y = 0;
var z = 0;
var text1 = "tech geek";
var text2 = "car nerd";
var text3 = "code fanatic";
var terminalprompttext = '<span style="color: var(--ubuntugreentext);">ryanku98@github.io</span><span style="color: white;">:</span><span style="color: var(--ubuntubluetext);">~</span><span style="color: white;">$ </span>'
var captionspeed = 150;
var terminalspeed = 50;
var terminalwaittime = 1000;

function printDescriptions() {
	setTimeout(line1, 3000);
	setTimeout(line2, 3000 + (text1.length + 3) * 150);
	setTimeout(line3, 3000 + (text1.length + 3 + text2.length + 3) * 150);
}

function line1() {
  if(x < text1.length) {
		document.getElementById("line1").innerHTML += text1.charAt(x);
    x++;
    setTimeout(line1, captionspeed);
  }
}

function line2() {
  if(y < text2.length) {
		document.getElementById("line2").innerHTML += text2.charAt(y);
    y++;
    setTimeout(line2, captionspeed);
  }
}

function line3() {
  if(z < text3.length) {
		document.getElementById("line3").innerHTML += text3.charAt(z);
    z++;
    setTimeout(line3, captionspeed);
  }
}