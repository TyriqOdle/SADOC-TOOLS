/**
 * Utilities for persisting and retrieving log collections
 * using the browser's localStorage.
 */
export let dutyLogs = [];
export let divLogs = [];
export let supervisorLogs = [];
export let notableOfficers = [];
export let code1Witnesses = [];

/**
 * Load saved logs from localStorage into memory.
 */
export function retrieveData() {
    const storedDutyLogs = localStorage.getItem("dutyLogs");
    const storedDivLogs = localStorage.getItem("divLogs");
    const storedSupLogs = localStorage.getItem("supLogs");
    const storedNotableOfficers = localStorage.getItem("noteOfficers");
    const storedWitnesses = localStorage.getItem("code1Witnesses");

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

    if (storedSupLogs) {
        supervisorLogs = JSON.parse(storedSupLogs);
    } else {
        supervisorLogs = [];
    }
    if (storedNotableOfficers) {
        notableOfficers = JSON.parse(storedNotableOfficers);
    } else {
        notableOfficers = [];
    }
    if (storedWitnesses) {
        code1Witnesses = JSON.parse(storedWitnesses);
    } else {
        code1Witnesses = [];
    }
}

/**
 * Persist current logs to localStorage.
 */
export function storeData() {
    localStorage.setItem("dutyLogs", JSON.stringify(dutyLogs));
    localStorage.setItem("divLogs", JSON.stringify(divLogs));
    localStorage.setItem("supLogs", JSON.stringify(supervisorLogs));
    localStorage.setItem("noteOfficers", JSON.stringify(notableOfficers));
    localStorage.setItem("code1Witnesses", JSON.stringify(code1Witnesses));
}

