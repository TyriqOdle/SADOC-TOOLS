export let dutyLogs = [];
export let divLogs = [];

export function retrieveData() {
    const storedDutyLogs = localStorage.getItem("dutyLogs");
    const storedDivLogs = localStorage.getItem("divLogs");

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
}

export function storeData() {
    localStorage.setItem("dutyLogs", JSON.stringify(dutyLogs));
    localStorage.setItem("divLogs", JSON.stringify(divLogs));
}