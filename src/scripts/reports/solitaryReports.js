import { retrieveData } from "../utils/DataHandling.js";

const generateBtn = document.getElementById("GenerateOutput");

retrieveData();

const fields = ["DateTime", "NameRankBadge", "TenFifteens", "TimeSentenced", "Log"];
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

function generate() {
    const dateTime = document.getElementById("DateTime").value;
    const nameRankBadge = document.getElementById("NameRankBadge").value;
    const tenFifteens = document.getElementById("TenFifteens").value;
    const timeSentenced = document.getElementById("TimeSentenced").value;
    const log = document.getElementById("Log").value;
    const outputArea = document.getElementById("Output");

    const outputText = `[img]https://i.imgur.com/R6uBrxX.png[/img]\n` +
        `[docsubtitle]Solitary Report Details[/docsubtitle]\n` +
        `[divbox=white]\n[ol][/ol]\n[b]Date and Time of Report:[/b] \n[ol]${dateTime}[/ol]\n` +
        `[hr]\n[ol][/ol]\n[b]Name, Rank, and Badge Number:[/b] \n[ol]${nameRankBadge}[/ol]\n` +
        `[hr]\n[ol][/ol]\n[b]10-15s Confined:[/b]\n[ol]${tenFifteens}[/ol]\n` +
        `[hr]\n[b]Time Sentenced:[/b]\n[ol]${timeSentenced} Days[/ol]\n` +
        `[/divbox]\n[ol][/ol]\n[docsubtitle]Log[/docsubtitle]\n[divbox=white][ol][/ol]\n[i]${log}[/i]\n` +
        `[ol][/ol]\n[/divbox]\n[img]https://i.imgur.com/EYwU3XA.png[/img]`;

    outputArea.value = outputText;
    outputArea.select();
    document.execCommand("copy");

    fields.forEach(id => {
        document.getElementById(id).value = "";
        localStorage.removeItem(`solitary_${id}`);
    });
}

generateBtn.addEventListener("click", generate);
