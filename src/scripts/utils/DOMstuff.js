import { dutyLogs, divLogs, supervisorLogs, notableOfficers } from "./DataHandling.js";
import { deleteLog } from "../reports/deletelog.js";

/**
 * Render helpers for displaying log collections in the DOM
 * and wiring their delete buttons.
 */
export function renderDutyLogs() {
    const dutyLogsContainer = document.getElementById("DutyLogsContainer");
    dutyLogsContainer.innerHTML = "";

    dutyLogs.forEach((log) => {
        let dutyLog = document.createElement("div");
        let text = document.createElement("p");
        let deleteBtn = document.createElement("button");

        dutyLog.classList.add("duty-log");
        text.textContent = log.text;
        deleteBtn.classList.add("deleteLogBtn");
        deleteBtn.setAttribute("data-id", log.id);
        deleteBtn.type = "button";
        deleteBtn.innerHTML = "&times;";

        deleteBtn.addEventListener("click", (e) => {
            let logID = e.target.dataset.id;
            deleteLog("duty", logID);
        });

        dutyLog.appendChild(text);
        dutyLog.appendChild(deleteBtn);

        dutyLogsContainer.appendChild(dutyLog);
    });
}

/**
 * Render supervisor duty logs to the UI.
 */
export function renderSupervisorDutyLogs() {
    const SupDutyLogsContainer = document.getElementById("SupervisorDutyLogsContainer");
    SupDutyLogsContainer.innerHTML = "";

    supervisorLogs.forEach((log) => {
        let dutyLog = document.createElement("div");
        let text = document.createElement("p");
        let deleteBtn = document.createElement("button");

        dutyLog.classList.add("duty-log");
        text.textContent = log.text;
        deleteBtn.classList.add("deleteLogBtn");
        deleteBtn.setAttribute("data-id", log.id);
        deleteBtn.type = "button";
        deleteBtn.innerHTML = "&times;";

        deleteBtn.addEventListener("click", (e) => {
            let logID = e.target.dataset.id;
            deleteLog("Supduty", logID);
        });

        dutyLog.appendChild(text);
        dutyLog.appendChild(deleteBtn);

        SupDutyLogsContainer.appendChild(dutyLog);
    });
}

/**
 * Render notable officer mentions to the UI.
 */
export function renderNotableOfficers() {
    const NotableOfficersContainer = document.getElementById("NotableOfficersContainer");
    NotableOfficersContainer.innerHTML = "";

    notableOfficers.forEach((log) => {
        let dutyLog = document.createElement("div");
        let text = document.createElement("p");
        let deleteBtn = document.createElement("button");

        dutyLog.classList.add("duty-log");
        text.textContent = log.text;
        deleteBtn.classList.add("deleteLogBtn");
        deleteBtn.setAttribute("data-id", log.id);
        deleteBtn.type = "button";
        deleteBtn.innerHTML = "&times;";

        deleteBtn.addEventListener("click", (e) => {
            let logID = e.target.dataset.id;
            deleteLog("noteOfficers", logID);
        });

        dutyLog.appendChild(text);
        dutyLog.appendChild(deleteBtn);

        NotableOfficersContainer.appendChild(dutyLog);
    });
}

/**
 * Render divisional duty logs to the UI.
 */
export function renderDivLogs() {
    const divLogsContainer = document.getElementById("DivisionalDutyLogs");
    divLogsContainer.innerHTML = "";

    divLogs.forEach((log) => {
        let divLog = document.createElement("div");
        let text = document.createElement("p");
        let deleteBtn = document.createElement("button");

        divLog.classList.add("duty-log");
        text.textContent = log.text;
        deleteBtn.classList.add("deleteLogBtn");
        deleteBtn.setAttribute("data-id", log.id);
        deleteBtn.type = "button";
        deleteBtn.innerHTML = "&times;";

        deleteBtn.addEventListener("click", (e) => {
            let logID = e.target.dataset.id;
            deleteLog("div", logID);
        });

        divLog.appendChild(text);
        divLog.appendChild(deleteBtn);

        divLogsContainer.appendChild(divLog);
    });
}

