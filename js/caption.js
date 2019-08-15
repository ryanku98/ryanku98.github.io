var x, y, z, a, b;
x = y = z = a = b = 0;
var cursorFlag = true;
const cursor = '<span id="cursor" style="position: relative; right: 0em;">&#9608;</span>';
const terminalprompt = '<span style="color: var(--ubuntugreentext);">ryanku98@github.io</span><span style="color: white;">:</span><span style="color: var(--ubuntubluetext);">~</span><span style="color: white;">$ </span>';
const captionInput1 = "cat ryan.txt";
const captionResponse1a = 'tech geek';
const captionResponse1b = 'car nerd';
const captionResponse1c = 'code fanatic';
const descriptionInput1 = "cat ryan_description.txt";
const descriptionInput2 = "cat random_facts_about_ryan.txt";
const descriptionResponse1 = 'I’m one of the several people in the US who can never give you a straight answer when you ask where they’re from – I was born in Hong Kong, grew up in Shanghai, but regularly visited family in the Bay Area, where I am now located for college. Both my parents speak Cantonese, yet I only ever learned to speak Mandarin, which has been getting rusty anyways.';
const descriptionResponse2a = '- I spent much of high school trying to spread Ultimate Frisbee throughout Shanghai and nearly skipped my graduation ceremony to attend a tournament final';
const descriptionResponse2b = '- I grew up loving all types of cars, but never got to drive until I permanently moved to the US';
const descriptionResponse2c = '- I’ve spent half a day lining up at grand openings of major boba stores, simply because';
const descriptionResponse2d = '- I love chatting about ethical issues/implications revolving around cutting-edge technologies';
const typingSpeed = 50;
const terminalResponseTime = 150;
const terminalWaitTime = 300;
const blinkRate = 500;

function initDescriptions() {
    // setup
    setTimeout(function() { insertPromptText("caption-prompt1"); }, terminalWaitTime * 2);
    setTimeout(function() { insertPromptText("description-prompt1"); }, terminalWaitTime * 2);
    // init caption animation
    setTimeout(function() { insertCursor("caption-prompt1"); }, terminalWaitTime * 2);
    setTimeout(function() { alignCursor("caption1"); }, terminalWaitTime * 3);
	setTimeout(caption1, terminalWaitTime * 3);
}

// HELPER FUNCTIONS
function insertPromptText(id) {
    document.getElementById(id).insertAdjacentHTML('afterbegin', terminalprompt);
}
function insertNewLine(id) {
    document.getElementById(id).insertAdjacentHTML('beforeend', "<br />");
}
function insertResponse(id, response) {
    document.getElementById(id).insertAdjacentHTML('beforeend', response);
}
function insertCursor(id) {
    document.getElementById(id).insertAdjacentHTML('beforeend', cursor);
}
function removeCursor() {
    document.getElementById("cursor").remove();
}
function blinkCursor() {
    if(cursorFlag) {
        document.getElementById("cursor").style.opacity = 0;
        cursorFlag = false;
    } else {
        document.getElementById("cursor").style.opacity = 1;
        cursorFlag = true;
    }
}
function alignCursor(id) {
    // separate inline elements have additional spacing set in middle
    // which pushes the cursor too far back in specific situations
    // this aligns the cursor correctly when typing animation begins
    document.getElementById(id).style.marginRight = "-0.5em";
}

// CAPTION
function caption1() {
    if(x < captionInput1.length) {
        document.getElementById("caption1").innerHTML += captionInput1.charAt(x++);
        setTimeout(caption1, typingSpeed);
    } else {
        removeCursor();
        setTimeout(function() { insertNewLine("caption-response1a"); }, terminalResponseTime);
        setTimeout(function() { insertResponse("caption-response1a", captionResponse1a); }, terminalResponseTime);
        setTimeout(function() { insertResponse("caption-response1b", captionResponse1b); }, terminalResponseTime);
        setTimeout(function() { insertResponse("caption-response1c", captionResponse1c); }, terminalResponseTime);
        setTimeout(function() { insertNewLine("caption-response1c"); }, terminalResponseTime);
        setTimeout(function() { insertNewLine("caption-response1c"); }, terminalResponseTime);
        setTimeout(function() { insertPromptText("caption-prompt2"); }, terminalResponseTime + terminalWaitTime);
        // init description animation
        setTimeout(function() { insertCursor("description-prompt1"); }, terminalWaitTime * 2);
        setTimeout(function() { alignCursor("description1"); }, terminalWaitTime * 3);
        setTimeout(description1, terminalWaitTime * 3);
    }
}

// DESCRPTION
function description1() {
    if(a < descriptionInput1.length) {
        document.getElementById("description1").innerHTML += descriptionInput1.charAt(a++);
        setTimeout(description1, typingSpeed);
    }
    else {
        removeCursor();
        setTimeout(function() { insertNewLine("description-response1"); }, terminalResponseTime);
        setTimeout(function() { insertResponse("description-response1", descriptionResponse1); }, terminalResponseTime);
        setTimeout(function() { insertNewLine("description-response1"); }, terminalResponseTime);
        setTimeout(function() { insertNewLine("description-response1"); }, terminalResponseTime);
        setTimeout(function() { insertPromptText("description-prompt2"); }, terminalResponseTime + terminalWaitTime);
        setTimeout(function() { insertCursor("description-prompt2"); }, terminalResponseTime + terminalWaitTime);
        setTimeout(function() { alignCursor("description2"); }, terminalWaitTime * 3);
        setTimeout(description2, terminalWaitTime * 3);
    }
}
function description2() {
    if(b < descriptionInput2.length) {
        document.getElementById("description2").innerHTML += descriptionInput2.charAt(b++);
        setTimeout(description2, typingSpeed);
    }
    else {
        removeCursor();
        setTimeout(function() { insertNewLine("description-response2a"); }, terminalResponseTime);
        setTimeout(function() {insertResponse("description-response2a", descriptionResponse2a)}, terminalResponseTime);
        setTimeout(function() {insertResponse("description-response2b", descriptionResponse2b)}, terminalResponseTime);
        setTimeout(function() {insertResponse("description-response2c", descriptionResponse2c)}, terminalResponseTime);
        setTimeout(function() {insertResponse("description-response2d", descriptionResponse2d)}, terminalResponseTime);
        setTimeout(function() { insertNewLine("description-response2d"); }, terminalResponseTime);
        setTimeout(function() { insertNewLine("description-response2d"); }, terminalResponseTime);
        setTimeout(function() {insertCursor("description-prompt3")}, terminalWaitTime * 2);
        setTimeout(function() {insertPromptText("description-prompt3")}, terminalResponseTime + terminalWaitTime);
        setInterval(blinkCursor, blinkRate);
    }
}
