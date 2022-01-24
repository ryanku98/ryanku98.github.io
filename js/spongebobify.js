const initSpongebobify = () => {
    const input = document.getElementById("input-text");
    const output = document.getElementById("output-text");
    input.addEventListener("input", () => { output.innerHTML = spongebobify(input.value); });
    output.addEventListener("click", () => { copyToClipboard(output.innerHTML); });
};

const copyToClipboard = (text) => {
    navigator.permissions.query({name: "clipboard-write"}).then(result => {
        const {state} = result;
        if (state === "granted" || state === "prompt") {
            navigator.clipboard.writeText(text).then(function() {
                alert("Text copied to clipboard.");
            }, () => {
                alert("Failed to copy to clipboard.");
            });
        } else {
            alert(`"clipboard_write" permissions: ${state}`);
        }
    });
};

const spongebobify = text => {
    let counter = 0;
    let output = "";
    for (const char of text) {
        let newChar = char;
        if (newChar !== " ") {
            newChar = counter % 2 === 0
                ? newChar.toUpperCase()
                : newChar.toLowerCase();
            ++counter;
        }
        output += newChar;
    }
    return output;
};
