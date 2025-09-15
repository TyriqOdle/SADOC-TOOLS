import { dutyLogs, divLogs, supervisorLogs, notableOfficers, code1Witnesses, solitaryTenFifteens } from "./DataHandling.js";
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

/**
 * Render witness entries to the UI.
 * Defaults to Code 1 witnesses but can render other lists.
 * @param {Array} witnessArr - collection of witness logs to render.
 * @param {"witness"|"force6Witness"} deleteType - identifier passed to deleteLog.
 */
export function renderWitnesses(witnessArr = code1Witnesses, deleteType = "witness") {
    const witnessesContainer = document.getElementById("WitnessesContainer");
    if (!witnessesContainer) return;
    witnessesContainer.innerHTML = "";

    witnessArr.forEach((log) => {
        let witnessLog = document.createElement("div");
        let text = document.createElement("p");
        let deleteBtn = document.createElement("button");

        witnessLog.classList.add("duty-log");
        text.textContent = log.text;
        deleteBtn.classList.add("deleteLogBtn");
        deleteBtn.setAttribute("data-id", log.id);
        deleteBtn.type = "button";
        deleteBtn.innerHTML = "&times;";

        deleteBtn.addEventListener("click", (e) => {
            let logID = e.target.dataset.id;
            deleteLog(deleteType, logID);
        });

        witnessLog.appendChild(text);
        witnessLog.appendChild(deleteBtn);

        witnessesContainer.appendChild(witnessLog);
    });
}

/**
 * Render 10-15 name entries to the UI.
 */
export function renderTenFifteens() {
    const tenFifteensContainer = document.getElementById("TenFifteensContainer");
    if (!tenFifteensContainer) return;
    tenFifteensContainer.innerHTML = "";

    solitaryTenFifteens.forEach((log) => {
        let tenFifteenLog = document.createElement("div");
        let text = document.createElement("p");
        let deleteBtn = document.createElement("button");

        tenFifteenLog.classList.add("duty-log");
        text.textContent = log.text;
        deleteBtn.classList.add("deleteLogBtn");
        deleteBtn.setAttribute("data-id", log.id);
        deleteBtn.type = "button";
        deleteBtn.innerHTML = "&times;";

        deleteBtn.addEventListener("click", (e) => {
            let logID = e.target.dataset.id;
            deleteLog("tenFifteens", logID);
        });

        tenFifteenLog.appendChild(text);
        tenFifteenLog.appendChild(deleteBtn);

        tenFifteensContainer.appendChild(tenFifteenLog);
    });
}

