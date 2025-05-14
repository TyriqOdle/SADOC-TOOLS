import { divLogs,supervisorLogs,dutyLogs,storeData,notableOfficers } from "../utils/DataHandling.js";
import { renderDutyLogs, renderDivLogs, renderSupervisorDutyLogs,renderNotableOfficers } from "../utils/DOMstuff.js";
export function deleteLog(logType, logID){  // MOVE THIS TO ITS OWN MODULE REMINDER ******
    if(logType == "duty"){
        let logtoDel = dutyLogs.find((log)=>{
            if(log.id == logID)
                return log;
        })

        let index = dutyLogs.indexOf(logtoDel);
        dutyLogs.splice(index, 1);
        storeData();
        renderDutyLogs();
    }else if(logType == "div"){
        let logtoDel = divLogs.find((log)=>{
            if(log.id == logID)
                return log;
        })

        let index = divLogs.indexOf(logtoDel);
        divLogs.splice(index, 1);
        storeData();
        renderDivLogs();
    }else if(logType == "Supduty"){
        let logtoDel = supervisorLogs.find((log)=>{
            if(log.id == logID)
                return log;
        })

        let index = supervisorLogs.indexOf(logtoDel);
        supervisorLogs.splice(index, 1);
        storeData();
        renderSupervisorDutyLogs();
    }else if(logType == "noteOfficers"){
        let logtoDel = notableOfficers.find((log)=>{
            if(log.id == logID)
                return log;
        })

        let index = notableOfficers.indexOf(logtoDel);
        notableOfficers.splice(index, 1);
        storeData();
        renderNotableOfficers();
    }
}