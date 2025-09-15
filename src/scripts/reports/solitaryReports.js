import { Log } from "../base/LogClasses.js";
import { retrieveData, storeData, solitaryTenFifteens } from "../utils/DataHandling.js";
import { renderTenFifteens } from "../utils/DOMstuff.js";

const generateBtn = document.getElementById("GenerateOutput");
const addTenFifteenBtn = document.getElementById("addTenFifteenBtn");
const tenFifteenInput = document.getElementById("NewTenFifteen");

retrieveData();
renderTenFifteens();

const fields = ["DateTime", "NameRankBadge", "TimeSentenced", "Log"];
fields.forEach(id => {
    const elem = document.getElementById(id);
    const stored = localStorage.getItem(`solitary_${id}`);
    if (stored) {
        elem.value = stored;
    }
    elem.addEventListener("input", () => {
        localStorage.setItem(`solitary_${id}`, elem.value);
    });
});

export function addTenFifteen() {
    const text = tenFifteenInput.value.trim();
    if (!text) return;
    const log = new Log(text);
    solitaryTenFifteens.push(log);
    renderTenFifteens();
    storeData();
    tenFifteenInput.value = "";
}

function generate() {
    const dateTime = document.getElementById("DateTime").value;
    const nameRankBadge = document.getElementById("NameRankBadge").value;
    const tenFifteensTxt = solitaryTenFifteens.map(log => "[*]" + log.text).join("\n");
    const timeSentenced = document.getElementById("TimeSentenced").value;
    const log = document.getElementById("Log").value;
    const outputArea = document.getElementById("Output");

    const outputText = `[img]https://i.imgur.com/R6uBrxX.png[/img]\n` +
        `[docsubtitle]Solitary Report Details[/docsubtitle]\n` +
        `[divbox=white]\n[ol][/ol]\n[b]Date and Time of Report:[/b] \n[ol]${dateTime}[/ol]\n` +
        `[hr]\n[ol][/ol]\n[b]Name, Rank, and Badge Number:[/b] \n[ol]${nameRankBadge}[/ol]\n` +
        `[hr]\n[ol][/ol]\n[b]10-15s Confined:[/b]\n[list]\n${tenFifteensTxt}\n[/list]\n` +
        `[hr]\n[b]Time Sentenced:[/b]\n[ol]${timeSentenced} Days[/ol]\n` +
        `[/divbox]\n[ol][/ol]\n[docsubtitle]Log[/docsubtitle]\n[divbox=white][ol][/ol]\n[i]${log}[/i]\n` +
        `[ol][/ol]\n[/divbox]\n[img]https://i.imgur.com/EYwU3XA.png[/img]`;

    outputArea.value = outputText;
    outputArea.select();
    document.execCommand("copy");

    solitaryTenFifteens.splice(0);
    storeData();
    renderTenFifteens();

    fields.forEach(id => {
        document.getElementById(id).value = "";
        localStorage.removeItem(`solitary_${id}`);
    });
    tenFifteenInput.value = "";
}

addTenFifteenBtn.addEventListener("click", addTenFifteen);
generateBtn.addEventListener("click", generate);
