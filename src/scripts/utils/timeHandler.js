/**
 * Convert a time string in HH:MM format into total minutes.
 * @param {string} input - Time string to convert.
 * @returns {number} Minutes since 00:00.
 */
export function parseTime(input) {
    const [hours, minutes] = input.split(':').map(Number);
    return hours * 60 + minutes;
}

