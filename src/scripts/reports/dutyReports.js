import { Log } from "../base/LogClasses.js";
import { renderDutyLogs, renderDivLogs } from "../utils/DOMstuff.js";
import { dutyLogs, divLogs, retrieveData, storeData } from "../utils/DataHandling.js";
import { parseTime } from "../utils/timeHandler.js";

/**
 * Handles duty and divisional logs and generates a formatted duty report.
 */
const dutyLogInput = document.getElementById("NewDutyLog");
const addDutyLogBtn = document.getElementById("addDutyLogBtn");
const divLogInput = document.getElementById("NewDivisionalLog");
const addDivisionalLogBtn = document.getElementById("addDivisionalLogBtn");
const generateBtn = document.getElementById("GenerateOutput");

retrieveData();
renderDutyLogs();
renderDivLogs();

/**
 * Add a new general duty log entry based on user input.
 */
export function addDutyLog() {
    let logText = dutyLogInput.value;

    let log = new Log(logText);

    dutyLogs.push(log);

    renderDutyLogs();
    storeData();

    dutyLogInput.value = "";
}

/**
 * Add a new divisional duty log entry based on user input.
 */
export function addDivLog() {
    let logText = divLogInput.value;

    let log = new Log(logText);

    divLogs.push(log);

    renderDivLogs();
    storeData();

    divLogInput.value = "";
}

/**
 * Build the duty report output and copy it to the clipboard.
 */
function generate() {
    const outputArea = document.getElementById("Output");
    let reportDate = document.getElementById("DateOfReport").value;
    let startOfShift = document.getElementById("StartOfShift").value;
    let ten15s = document.getElementById("10-15s").value;
    let endOfShift = document.getElementById("EndOfShift").value;

    let dutyLogstxt = dutyLogs.map(log => "[*]" + log.text).join("\n");
    let divLogstxt = divLogs.map(log => "[*]" + log.text).join("\n");

    let startMinutes = parseTime(startOfShift);
    let endMinutes = parseTime(endOfShift);

    // If end time is technically the next day (e.g., 12:44 PM after 9:44 PM), adjust:
    if (endMinutes < startMinutes) {
        endMinutes += 1440; // add 24 hours
    }

    let diffMinutes = endMinutes - startMinutes;
    let hours = Math.floor(diffMinutes / 60);
    let minutes = diffMinutes % 60;

    let outputText = `[img]https://i.imgur.com/IRwlwRE.png[/img]`
        + `\n[docsubtitle]Duty Report Details[/docsubtitle]`
        + `\n[divbox=white]`
        + `\n[ol][/ol]`
        + `\n[b]Date of Report:[/b] ${reportDate}`
        + `\n[ol][/ol]`
        + `\n[hr]`
        + `\n[ol][/ol]`
        + `\n[b]Hours on duty:[/b] ${hours}h ${minutes}m`
        + `\n[ol][/ol]`
        + `\n[hr]`
        + `\n[ol][/ol]`
        + `\n[b]10-15s Processed:[/b] ${ten15s}`
        + `\n[ol][/ol]`
        + `\n[/divbox]`
        + `\n[ol][/ol]`
        + `\n[docsubtitle]General Duties Log[/docsubtitle]`
        + `\n[divbox=white]`
        + `\n[ol][/ol]`
        + `\n[list]`
        + `\n${dutyLogstxt}`
        + `\n[/list]`
        + `\n[ol][/ol][/divbox]`
        + `\n[docsubtitle]Divisional Duties Log[/docsubtitle]`
        + `\n[divbox=white]`
        + `\n[ol][/ol]`
        + `\n[list]`
        + `\n${divLogstxt}`
        + `\n[/list]`
        + `\n[ol][/ol]`
        + `\n[/divbox]`
        + `\n[img]https://i.imgur.com/EYwU3XA.png[/img]`;

    outputArea.value = outputText;
    outputArea.select();
    document.execCommand("copy");

    //Clearing the saved logs
    dutyLogs.splice(0);
    divLogs.splice(0);
    storeData();
    //window.open("https://gov.eclipse-rp.net/viewforum.php?f=1180","_blank");
}

generateBtn.addEventListener("click", generate);
addDutyLogBtn.addEventListener("click", addDutyLog);
addDivisionalLogBtn.addEventListener("click", addDivLog);

