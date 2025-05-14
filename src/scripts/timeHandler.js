export function parseTime(input) {
    const [hours, minutes] = input.split(':').map(Number);
    return hours * 60 + minutes;
}
