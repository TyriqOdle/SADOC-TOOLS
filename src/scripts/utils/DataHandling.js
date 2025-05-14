export let dutyLogs = [];
export let divLogs = [];
export let supervisorLogs = [];
export let notableOfficers = []

export function retrieveData() {
    const storedDutyLogs = localStorage.getItem("dutyLogs");
    const storedDivLogs = localStorage.getItem("divLogs");
    const storedSupLogs = localStorage.getItem("supLogs");
    const storedNotableOfficers = localStorage.getItem("noteOfficers");

    if (storedDutyLogs) {
        dutyLogs = JSON.parse(storedDutyLogs); 
    } else {
        dutyLogs = [];
    }

    if (storedDivLogs) {
        divLogs = JSON.parse(storedDivLogs);
    } else {
        divLogs = [];
    }

    if(storedSupLogs){
        supervisorLogs = JSON.parse(storedSupLogs);
    }else{
        supervisorLogs = [];
    }
    if(storedNotableOfficers){
        notableOfficers = JSON.parse(storedNotableOfficers);
    }else{
        notableOfficers = [];
    }

}

export function storeData() {
    localStorage.setItem("dutyLogs", JSON.stringify(dutyLogs));
    localStorage.setItem("divLogs", JSON.stringify(divLogs));
    localStorage.setItem("supLogs",JSON.stringify(supervisorLogs));
    localStorage.setItem("noteOfficers",JSON.stringify(notableOfficers));
}