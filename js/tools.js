const initTools = () => {
    initInputs();
    initOutput();
};

const initInputs = () => {
    const inputs = document.querySelectorAll("input");
    const textInput = document.getElementById("input-text");
    const elements = Array.from(inputs).concat(textInput);
    for (const element of elements) {
        element.addEventListener("input", generateAndOutputText);
    }

    const suboptions = document.getElementsByClassName("suboption");
    for (const suboption of suboptions) {
        // suboptions hidden by default
        suboption.style.display = "none";

        // add listeners to show suboption if parent option is checked
        const {showFor} = suboption.dataset;
        const parentOption = document.getElementById(showFor);
        if (parentOption) {
            parentOption.addEventListener("input", () => {
                suboption.style.display = parentOption.checked
                    ? "block"
                    : "none";
            });
        } else {
            console.error(`Missing parent option with id: '${showFor}'`);
        }
    }

};

const initOutput = () => {
    const output = document.getElementById("output-text");
    output.addEventListener("click", () => { copyToClipboard(output.innerHTML); });
};

const getOptions = () => {
    const checkboxes = document.querySelectorAll(":not(.suboption) > .option");
    const options = {};
    for (const checkbox of checkboxes) {
        options[checkbox.id] = !!checkbox.checked;
    }
    return options;
};

const getSubOptions = () => {
    const checkboxes = document.querySelectorAll(".suboption > .option[type='checkbox']");
    const radios = document.querySelectorAll(".suboption > .option[type='radio']");
    const booleanOptions = Array.from(checkboxes).concat(Array.from(radios));
    const textInputs = document.querySelectorAll(".suboption[type='text']");

    const suboptions = {};
    for (const option of booleanOptions) {
        suboptions[option.id] = !!option.checked;
    }
    for (const textInput of textInputs) {
        suboptions[textInput.id] = textInput.value;
    }
    return suboptions;
};

const generateAndOutputText = () => {
    const input = document.getElementById("input-text");
    const output = document.getElementById("output-text");
    const options = getOptions();
    const suboptions = getSubOptions();
    console.log({
        options,
        suboptions,
    });
    let text = input.value;
    for (const [option, selected] of Object.entries(options)) {
        if (selected) {
            text = textModifiers[option](text, suboptions);
        }
    }
    output.innerHTML = text;
};

const textModifiers = {
    spongebobify: (text, suboptions) => {
        let counter = 0;
        let output = "";
        const maxSameCase = 3; // at most 3 in a row with the same case
        const switchCaseChance = 2; // 50% chance (inverse) case changes for next character
        let currCase = true; // false => lowercase, true => uppercase 

        for (const char of text) {
            let newChar = char;
            if (newChar !== " ") {
                if (suboptions["spongebobify-cycled"]) {
                    newChar = counter % 2 === 0
                        ? newChar.toUpperCase()
                        : newChar.toLowerCase();
                } else if (suboptions["spongebobify-random"]) {
                    const switchCase = counter >= maxSameCase
                        ? true
                        : Math.floor(Math.random() * switchCaseChance) === 0;
                    if (switchCase) {
                        counter = 0;
                        currCase = !currCase;
                    }
                    newChar = currCase
                        ? newChar.toUpperCase()
                        : newChar.toLowerCase();
                }
                ++counter;
            }
            output += newChar;
        }
        return output;
    },
    intersperse: (text, suboptions) =>
        text.split(" ").flatMap(word => [suboptions["interspersing-text"] || " ", word]).slice(1).join(""),
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
