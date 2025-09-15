/**
 * Represents a single log entry with a unique identifier.
 * Used for storing duty, divisional, supervisor, or notable officer logs.
 */
export class Log {
    /**
     * Create a new log entry.
     * @param {string} text - The content of the log entry.
     */
    constructor(text) {
        this.id = crypto.randomUUID();
        this.text = text;
    }
}

