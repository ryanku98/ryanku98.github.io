const initTools = () => {
    initInputs();
    initOutput();
    initIntersperse();
};

const initInputs = () => {
    const inputs = document.querySelectorAll("input");
    const textInput = document.getElementById("input-text");
    const elements = Array.from(inputs).concat(textInput);
    for (const element of elements) {
        element.addEventListener("input", generateAndOutputText);
    }
};

const initOutput = () => {
    const output = document.getElementById("output-text");
    output.addEventListener("click", () => { copyToClipboard(output.innerHTML); });
};

const initIntersperse = () => {
    const checkbox = document.getElementById("intersperse");
    checkbox.addEventListener("input", () => { showIntersperseInput(checkbox.checked); })
};

const getOptions = () => {
    const checkboxes = document.getElementsByClassName("option");
    const options = {};
    for (const checkbox of checkboxes) {
        options[checkbox.id] = !!checkbox.checked;
    }
    return options;
};

const generateAndOutputText = () => {
    const input = document.getElementById("input-text");
    const output = document.getElementById("output-text");
    const options = getOptions();
    let text = input.value;
    const interspersingText = document.getElementById("interspersing-text").value;
    console.log(interspersingText);
    const optionalOpts = {interspersingText};
    for (const [option, selected] of Object.entries(options)) {
        if (selected) {
            text = textModifiers[option](text, optionalOpts);
        }
    }
    output.innerHTML = text;
};

const textModifiers = {
    spongebobify: text => {
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
    },
    intersperse: (text, {interspersingText}) =>
        text.split(" ").flatMap(word => [interspersingText, word]).slice(1).join(""),

};

const showIntersperseInput = (show) => {
    const input = document.getElementById("interspersing-text");
    input.style.display = show ? "block" : "none";
};

const copyToClipboard = (text) => {
    navigator.permissions.query({name: "clipboard-write"}).then(result => {
        const {state} = result;
        if (state === "granted" || state === "prompt") {
            navigator.clipboard.writeText(text).then(() => {
                alert("Text copied to clipboard.");
            }, () => {
                alert("Failed to copy to clipboard.");
            });
        } else {
            alert(`"clipboard_write" permissions: ${state}`);
        }
    });
};
