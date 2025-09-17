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

configureDropdownToggle(divisionsToggle, divisionsDropDown);
configureDropdownToggle(pToolsToggle, pToolsDropDown);

