import { divLogs, supervisorLogs, dutyLogs, storeData, notableOfficers, code1Witnesses } from "../utils/DataHandling.js";
import { renderDutyLogs, renderDivLogs, renderSupervisorDutyLogs, renderNotableOfficers, renderWitnesses } from "../utils/DOMstuff.js";

/**
 * Remove a log entry from the specified collection and update storage and UI.
 * @param {"duty"|"div"|"Supduty"|"noteOfficers"|"witness"} logType - The type of log list to modify.
 * @param {string} logID - The unique identifier of the log to delete.
 */
export function deleteLog(logType, logID) {
    if (logType == "duty") {
        let logtoDel = dutyLogs.find((log) => {
            if (log.id == logID)
                return log;
        });

        let index = dutyLogs.indexOf(logtoDel);
        dutyLogs.splice(index, 1);
        storeData();
        renderDutyLogs();
    } else if (logType == "div") {
        let logtoDel = divLogs.find((log) => {
            if (log.id == logID)
                return log;
        });

        let index = divLogs.indexOf(logtoDel);
        divLogs.splice(index, 1);
        storeData();
        renderDivLogs();
    } else if (logType == "Supduty") {
        let logtoDel = supervisorLogs.find((log) => {
            if (log.id == logID)
                return log;
        });

        let index = supervisorLogs.indexOf(logtoDel);
        supervisorLogs.splice(index, 1);
        storeData();
        renderSupervisorDutyLogs();
    } else if (logType == "noteOfficers") {
        let logtoDel = notableOfficers.find((log) => {
            if (log.id == logID)
                return log;
        });

        let index = notableOfficers.indexOf(logtoDel);
        notableOfficers.splice(index, 1);
        storeData();
        renderNotableOfficers();
    } else if (logType == "witness") {
        let logtoDel = code1Witnesses.find((log) => {
            if (log.id == logID)
                return log;
        });

        let index = code1Witnesses.indexOf(logtoDel);
        code1Witnesses.splice(index, 1);
        storeData();
        renderWitnesses();
    }
}

