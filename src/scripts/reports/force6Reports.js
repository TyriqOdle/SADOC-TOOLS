import { Log } from "../base/LogClasses.js";
import { force6Witnesses, retrieveData, storeData } from "../utils/DataHandling.js";
import { renderWitnesses } from "../utils/DOMstuff.js";

const generateBtn = document.getElementById("GenerateOutput");
const addWitnessBtn = document.getElementById("addWitnessBtn");
const witnessInput = document.getElementById("NewWitness");

retrieveData();
renderWitnesses(force6Witnesses, "force6Witness");

const fields = ["Date", "OfficerName", "RankBadge", "Weapons", "Situation", "Conclusion", "BodycamAttachment", "BodycamProof"];
fields.forEach(id => {
    const elem = document.getElementById(id);
    const stored = localStorage.getItem(`force6_${id}`);
    if (stored) {
        elem.value = stored;
    }
    elem.addEventListener("input", () => {
        localStorage.setItem(`force6_${id}`, elem.value);
    });
});

export function addWitness() {
    let text = witnessInput.value.trim();
    if (!text) return;
    let log = new Log(text);
    force6Witnesses.push(log);
    renderWitnesses(force6Witnesses, "force6Witness");
    storeData();
    witnessInput.value = "";
}

function generate() {
    const outputArea = document.getElementById("Output");
    const date = document.getElementById("Date").value;
    const officerName = document.getElementById("OfficerName").value;
    const rankBadge = document.getElementById("RankBadge").value;
    const weapons = document.getElementById("Weapons").value;
    const situation = document.getElementById("Situation").value;
    const conclusion = document.getElementById("Conclusion").value;
    const bodycamAttachment = document.getElementById("BodycamAttachment").value;
    const bodycamProof = document.getElementById("BodycamProof").value;
    const witnessesTxt = force6Witnesses.map(log => "[*]" + log.text).join("\n");

    const outputText = `[img]https://i.imgur.com/SCK366b.png[/img]\n` +
        `[docsubtitle]Force 6 Report Details[/docsubtitle]\n` +
        `[divbox=white]\n[b]Date:[/b] ${date}\n` +
        `[hr]\n[ol][/ol]\n[b]Officers name:[/b] ${officerName}\n` +
        `[hr]\n[ol][/ol]\n[b]Any witnesses? (Officers, other inmates, visitors)[/b]\n[list]\n${witnessesTxt}\n[/list]\n` +
        `[hr]\n[ol][/ol]\n[b]Rank & Badge Number:[/b] ${rankBadge}\n` +
        `[hr]\n[ol][/ol]\n[b]Lethal weapon(s) utilized for force 6:[/b] ${weapons}\n` +
        `[hr]\n[ol][/ol]\n[b]Situation:[/b] ${situation}\n` +
        `[hr]\n[ol][/ol]\n[b]Conclusion:[/b] ${conclusion}\n` +
        `[hr]\n[ol][/ol]\n[b]Bodycam footage attachment:[/b] ${bodycamAttachment}\n` +
        `[hr]\n[ol][/ol]\n[ooc]\n[b][color=#FF0000]MANDATORY:[/color][/b][spoiler=Proof of Bodycam RP][img]${bodycamProof}[/img][/spoiler]\n[/ooc]\n[/divbox]\n[img]https://i.imgur.com/EYwU3XA.png[/img]`;

    outputArea.value = outputText;
    outputArea.select();
    document.execCommand("copy");

    force6Witnesses.splice(0);
    storeData();
    renderWitnesses(force6Witnesses, "force6Witness");
    fields.forEach(id => {
        const elem = document.getElementById(id);
        elem.value = "";
        localStorage.removeItem(`force6_${id}`);
    });
}

addWitnessBtn.addEventListener("click", addWitness);
generateBtn.addEventListener("click", generate);
