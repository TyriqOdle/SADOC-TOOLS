/**
 * Toggle a dropdown element's visibility by adding/removing
 * the Bootstrap `d-none` class and update the trigger state.
 *
 * @param {HTMLElement | null} dropDown - The dropdown element to toggle.
 * @param {HTMLElement} [toggle] - The element that toggles the dropdown.
 */
export default function dropDownCreator(dropDown, toggle) {
    if (!dropDown) {
        return;
    }

    if (dropDown.classList.contains("d-none")) {
        dropDown.classList.remove("d-none");

        if (toggle) {
            toggle.classList.add("is-open");
            toggle.setAttribute("aria-expanded", "true");
        }
    } else {
        dropDown.classList.add("d-none");

        if (toggle) {
            toggle.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
        }
    }
}

