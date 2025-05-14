import { dutyLogs, divLogs } from "./DataHandling.js"
import { deleteLog } from "./dutyReports.js";

export function renderDutyLogs(){
    const dutyLogsContainer = document.getElementById("DutyLogsContainer");
    dutyLogsContainer.innerHTML = ""

    dutyLogs.forEach((log) =>{
        let dutyLog = document.createElement("div");
        let text = document.createElement("p");
        let deleteBtn = document.createElement("button");

        dutyLog.classList.add("duty-log");
        text.textContent = log.text;
        deleteBtn.classList.add("deleteLogBtn")
        deleteBtn.setAttribute("data-id", log.id)
        deleteBtn.type = "button"
        deleteBtn.innerHTML = "&times;";

        deleteBtn.addEventListener("click",(e)=>{
            let logID = e.target.dataset.id;
            deleteLog("duty",logID)
        })

        dutyLog.appendChild(text);
        dutyLog.appendChild(deleteBtn);

        dutyLogsContainer.appendChild(dutyLog);
    })
}

export function renderDivLogs(){
    const divLogsContainer = document.getElementById("DivisionalDutyLogs");
    divLogsContainer.innerHTML = ""

    divLogs.forEach((log) =>{
        let divLog = document.createElement("div");
        let text = document.createElement("p");
        let deleteBtn = document.createElement("button");

        divLog.classList.add("duty-log");
        text.textContent = log.text;
        deleteBtn.classList.add("deleteLogBtn")
        deleteBtn.setAttribute("data-id", log.id)
        deleteBtn.type = "button"
        deleteBtn.innerHTML = "&times;";

        deleteBtn.addEventListener("click",(e)=>{
            let logID = e.target.dataset.id;
            deleteLog("div",logID)
        })

        divLog.appendChild(text);
        divLog.appendChild(deleteBtn);

        divLogsContainer.appendChild(divLog);
    })
}