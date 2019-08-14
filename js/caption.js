var x, y, z, a, b;
x = y = z = a = b = 0;
const text1 = "tech geek";
const text2 = "car nerd";
const text3 = "code fanatic";
const terminalprompt = '<span style="color: var(--ubuntugreentext);">ryanku98@github.io</span><span style="color: white;">:</span><span style="color: var(--ubuntubluetext);">~</span><span style="color: white;">$ </span>';
const terminalinput1 = "echo ryan_description.txt";
const terminalinput2 = "echo random_facts_about_ryan.txt";
const terminalresponse1 = '<span class="terminal-text">I’m one of the several people in the US who can never give you a straight answer when you ask where they’re from – I was born in Hong Kong, grew up in Shanghai, but regularly visited family in the Bay Area, where I am now located for college. Both my parents speak Cantonese, yet I only ever learned to speak Mandarin, which has been getting rusty anyways.</span>';
const terminalresponse2a = '<span class="terminal-text">- I spent much of high school trying to spread Ultimate Frisbee throughout Shanghai and nearly skipped my graduation ceremony to attend a tournament final</span>';
const terminalresponse2b = '<span class="terminal-text">- I grew up loving all types of cars, but never got to drive until I permanently moved to the US</span>';
const terminalresponse2c = '<span class="terminal-text">- I’ve spent half a day lining up at grand openings of major boba stores, simply because</span>';
const terminalresponse2d = '<span class="terminal-text">- I love chatting about ethical issues/implications revolving around cutting-edge technologies</span>';
const captionspeed = 150;
const terminalspeed = 65;
const terminalResponseTime = 250;
const terminalWaitTime = 500;

function printDescriptions() {
	setTimeout(line1, 3000);
    setTimeout(description1, terminalWaitTime);
}

// CAPTION
function line1() {
    if(x < text1.length) {
        document.getElementById("line1").innerHTML += text1.charAt(x++);
        setTimeout(line1, captionspeed);
    } else
        setTimeout(line2, terminalResponseTime);
}

function line2() {
    if(y < text2.length) {
        document.getElementById("line2").innerHTML += text2.charAt(y++);
        setTimeout(line2, captionspeed);
    } else
        setTimeout(line3, terminalResponseTime);
}

function line3() {
    if(z < text3.length) {
        document.getElementById("line3").innerHTML += text3.charAt(z++);
        setTimeout(line3, captionspeed);
    }
}

// DESCRPTION
function insertPromptText(id) {
    document.getElementById(id).insertAdjacentHTML('afterbegin', terminalprompt);
}
function insertResponse(id, response) {
    document.getElementById(id).insertAdjacentHTML('afterbegin', response);
}

function description1() {
    if(a < terminalinput1.length) {
        document.getElementById("description1").innerHTML += terminalinput1.charAt(a++);
        setTimeout(description1, terminalspeed);
    }
    else {
        setTimeout(function() {insertResponse("response1", terminalresponse1)}, terminalResponseTime);
        setTimeout(function() {insertPromptText("prompt2")}, terminalResponseTime + terminalWaitTime);
        setTimeout(description2, terminalResponseTime + terminalWaitTime * 2);
    }
}

function description2() {
    if(b < terminalinput2.length) {
        document.getElementById("description2").innerHTML += terminalinput2.charAt(b++);
        setTimeout(description2, terminalspeed);
    }
    else {
        setTimeout(function() {insertResponse("response2a", terminalresponse2a)}, terminalResponseTime);
        setTimeout(function() {insertResponse("response2b", terminalresponse2b)}, terminalResponseTime);
        setTimeout(function() {insertResponse("response2c", terminalresponse2c)}, terminalResponseTime);
        setTimeout(function() {insertResponse("response2d", terminalresponse2d)}, terminalResponseTime);
        setTimeout(function() {insertPromptText("prompt3")}, terminalResponseTime + terminalWaitTime);
    }
}
