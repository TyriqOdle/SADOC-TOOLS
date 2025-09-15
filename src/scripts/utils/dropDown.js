/**
 * Toggle a dropdown element's visibility by adding/removing
 * the Bootstrap `d-none` class.
 * @param {HTMLElement} dropDown - The dropdown element to toggle.
 */
export default function dropDownCreator(dropDown) {
    if (dropDown.classList.contains("d-none")) {
        dropDown.classList.remove("d-none");
    } else {
        dropDown.classList.add("d-none");
    }
}

