import dropDownCreator from "./scripts/utils/dropDown.js";

/**
 * Attach dropdown toggles for the main navigation sections.
 */
const divisionsDropDown = document.getElementById("divisions");
const divisionsToggle = document.querySelector(".dropdown-toggle");

const pToolsDropDown = document.getElementById("paperWorkTools");
const pToolsTOggle = document.querySelector(".dropdown-ptools");

divisionsToggle.addEventListener("click", () => {
    dropDownCreator(divisionsDropDown);
});

pToolsTOggle.addEventListener("click", () => {
    dropDownCreator(pToolsDropDown);
});

