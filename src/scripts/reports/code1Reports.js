import { Log } from "../base/LogClasses.js";
import { code1Witnesses, retrieveData, storeData } from "../utils/DataHandling.js";
import { renderWitnesses } from "../utils/DOMstuff.js";

const generateBtn = document.getElementById("GenerateOutput");
const addWitnessBtn = document.getElementById("addWitnessBtn");
const witnessInput = document.getElementById("NewWitness");

retrieveData();
renderWitnesses();

const fields = ["DateTimeUTC", "Name", "Rank", "Situation", "Conclusion"];
fields.forEach(id => {
    const elem = document.getElementById(id);
    const stored = localStorage.getItem(`code1_${id}`);
    if (stored) {
        elem.value = stored;
    }
    elem.addEventListener("input", () => {
        localStorage.setItem(`code1_${id}`, elem.value);
    });
});

export function addWitness() {
    let text = witnessInput.value.trim();
    if (!text) return;
    let log = new Log(text);
    code1Witnesses.push(log);
    renderWitnesses();
    storeData();
    witnessInput.value = "";
}

function generate() {
    const outputArea = document.getElementById("Output");
    const dateTime = document.getElementById("DateTimeUTC").value;
    const name = document.getElementById("Name").value;
    const rank = document.getElementById("Rank").value;
    const situation = document.getElementById("Situation").value;
    const conclusion = document.getElementById("Conclusion").value;
    const witnessesTxt = code1Witnesses.map(log => "[*]" + log.text).join("\n");

    const outputText = `[img]https://i.imgur.com/H1ZlSoH.png[/img]\n` +
        `[docsubtitle]Code 1 Report Details[/docsubtitle]\n` +
        `[divbox=white]\n[b]Date and Time ((UTC)) :[/b] ${dateTime}\n` +
        `[hr]\n[ol][/ol]\n[b]Name:[/b] ${name}\n` +
        `[hr]\n[ol][/ol]\n[b]Rank:[/b] ${rank}\n` +
        `[hr]\n[ol][/ol]\n[b]Any witnesses? (Officers, other inmates, visitors)[/b]\n[list]\n${witnessesTxt}\n[/list]\n` +
        `[hr]\n[ol][/ol]\n[b]Situation:[/b] ${situation}\n` +
        `[hr]\n[ol][/ol]\n[b]Conclusion:[/b] ${conclusion}\n` +
        `[ol][/ol]\n[/divbox]\n[img]https://i.imgur.com/EYwU3XA.png[/img]`;

    outputArea.value = outputText;
    outputArea.select();
    document.execCommand("copy");

    code1Witnesses.splice(0);
    storeData();
    renderWitnesses();
    fields.forEach(id => {
        const elem = document.getElementById(id);
        elem.value = "";
        localStorage.removeItem(`code1_${id}`);
    });
}

addWitnessBtn.addEventListener("click", addWitness);
generateBtn.addEventListener("click", generate);
