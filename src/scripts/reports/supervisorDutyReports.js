import {Log} from "../base/LogClasses.js"
import { parseTime } from "../utils/timeHandler.js"
import {supervisorLogs, retrieveData,dutyLogs,divLogs, storeData,notableOfficers} from "../utils/DataHandling.js"
import {renderSupervisorDutyLogs, renderDivLogs, renderDutyLogs,renderNotableOfficers} from "../utils/DOMstuff.js"

const SupdutyLogInput = document.getElementById("NewSupDutyLog")
const addSupDutyLogBtn = document.getElementById("addSupDutyLogBtn")
const notableOfficersInput = document.getElementById("NewNotableOfficer")
const addNotableOfficerBtn = document.getElementById("addNotableOfficersBtn");
const generateBtn= document.getElementById("GenerateOutput");

retrieveData();
renderDutyLogs();
renderSupervisorDutyLogs();
renderNotableOfficers();
renderDivLogs();


 function addSupDutyLog(){
    let logText = SupdutyLogInput.value

    let log = new Log(logText);

    supervisorLogs.push(log);

    renderSupervisorDutyLogs();
    storeData();

    SupdutyLogInput.value = "";

}

 function addNotableOfficer(){
    let logText = notableOfficersInput.value

    let log = new Log(logText);

    notableOfficers.push(log);

    renderNotableOfficers();
    storeData();

    SupdutyLogInput.value = "";

}


function generate(){
    const outputArea = document.getElementById("Output")
    let reportDate = document.getElementById("DateOfReport").value
    let startOfShift = document.getElementById("StartOfShift").value
    let endOfShift = document.getElementById("EndOfShift").value
    
    let dutyLogstxt = dutyLogs.map(log => "[*]" + log.text).join("\n");
    let divLogstxt = divLogs.map(log => "[*]" + log.text).join("\n");
    let supLogsTxt = supervisorLogs.map(log => "[*]" +log.text).join("\n");
    let noteOfficerstxt = notableOfficers.map(log => "[*]" +log.text).join("\n");
    
    let startMinutes = parseTime(startOfShift);
    let endMinutes = parseTime(endOfShift);

    // If end time is technically the next day (e.g., 12:44 PM after 9:44 PM), adjust:
    if (endMinutes < startMinutes) {
        endMinutes += 1440; // add 24 hours
    }

    let diffMinutes = endMinutes - startMinutes;
    let hours = Math.floor(diffMinutes / 60);
    let minutes = diffMinutes % 60;

    let outputText = `[img]https://i.imgur.com/IRwlwRE.png[/img]
[docsubtitle]Duty Report Details[/docsubtitle]
[divbox=white]
[ol][/ol]
[b]Date of Report:[/b] ${reportDate}
[ol][/ol]
[hr]
[ol][/ol]
[b]Hours on duty:[/b] ${hours}h ${minutes}m
[ol][/ol]
[hr]
[ol][/ol]
[b]Supervisor Duties/Situations:[/b]
[list]
${supLogsTxt}
[/list]
[hr]
[ol][/ol]
[b]Notable Officer Mentions:[/b] 
[list]
${noteOfficerstxt}
[/list]
[ol][/ol]
[/divbox]
[ol][/ol]
[docsubtitle]General Duties Log[/docsubtitle]
[divbox=white]
[ol][/ol]
[list]
${dutyLogstxt}
[/list]
[ol][/ol][/divbox]
[docsubtitle]Divisional Duties Log[/docsubtitle]
[divbox=white]
[ol][/ol]
[list]
${divLogstxt}
[/list]
[ol][/ol]
[/divbox]
[img]https://i.imgur.com/EYwU3XA.png[/img]`;


    outputArea.value = outputText;
    outputArea.select();
    document.execCommand("copy");

    //Clearing the saved logs
    dutyLogs.splice(0);
    divLogs.splice(0);
    supervisorLogs.splice(0);
    notableOfficers.splice(0);
    storeData();
    //window.open("https://gov.eclipse-rp.net/viewforum.php?f=1180","_blank");
    
}

generateBtn.addEventListener("click", generate)
addSupDutyLogBtn.addEventListener("click", addSupDutyLog);
addNotableOfficerBtn.addEventListener("click", addNotableOfficer)
