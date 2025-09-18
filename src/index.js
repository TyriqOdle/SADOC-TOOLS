import dropDownCreator from "./scripts/utils/dropDown.js";

/**
 * Attach dropdown toggles for the main navigation sections.
 */
const divisionsDropDown = document.getElementById("divisions");
const divisionsToggle = document.querySelector(".dropdown-divisions");

const pToolsDropDown = document.getElementById("paperWorkTools");
const pToolsToggle = document.querySelector(".dropdown-ptools");

const configureDropdownToggle = (toggle, dropdown) => {
    if (!toggle || !dropdown) {
        return;
    }

    toggle.setAttribute("aria-controls", dropdown.id);
    toggle.setAttribute(
        "aria-expanded",
        dropdown.classList.contains("d-none") ? "false" : "true",
    );

    if (!dropdown.classList.contains("d-none")) {
        toggle.classList.add("is-open");
    }

    toggle.addEventListener("click", () => {
        dropDownCreator(dropdown, toggle);
    });
};

const pad = value => String(value).padStart(2, "0");

const getInputType = input => (input.getAttribute("type") || input.type || "").toLowerCase();

const parseInputDate = input => {
    const type = getInputType(input);

    if (!input.value) {
        return new Date();
    }

    if (type === "date") {
        return new Date(`${input.value}T00:00:00`);
    }

    if (type === "datetime-local") {
        return new Date(input.value);
    }

    return new Date();
};

const formatUtcValue = input => {
    let date = parseInputDate(input);

    if (Number.isNaN(date.getTime())) {
        date = new Date();
    }

    const type = getInputType(input);

    if (type === "date") {
        return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`;
    }

    if (type === "datetime-local") {
        const isoString = date.toISOString();
        const includeSeconds = input.value ? input.value.length > 16 : false;
        return includeSeconds ? isoString.slice(0, 19) : isoString.slice(0, 16);
    }

    if (type === "time") {
        const includeSeconds = input.value ? input.value.length > 5 : false;
        const hours = pad(date.getUTCHours());
        const minutes = pad(date.getUTCMinutes());
        const seconds = pad(date.getUTCSeconds());

        return includeSeconds ? `${hours}:${minutes}:${seconds}` : `${hours}:${minutes}`;
    }

    return null;
};

const configureUtcButtons = () => {
    const utcButtons = document.querySelectorAll("[data-utc-target]");

    utcButtons.forEach(button => {
        const { utcTarget } = button.dataset;
        const input = document.getElementById(utcTarget);
        const type = input ? getInputType(input) : "";

        if (!input || !(type === "date" || type === "datetime-local" || type === "time")) {
            return;
        }

        button.addEventListener("click", () => {
            const utcValue = formatUtcValue(input);

            if (!utcValue) {
                return;
            }

            input.value = utcValue;
            input.dispatchEvent(new Event("input", { bubbles: true }));
            input.dispatchEvent(new Event("change", { bubbles: true }));
        });
    });
};

configureDropdownToggle(divisionsToggle, divisionsDropDown);
configureDropdownToggle(pToolsToggle, pToolsDropDown);
configureUtcButtons();

