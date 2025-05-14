export class Log{
    constructor(text){
        this.id = crypto.randomUUID();
        this.text = text
    }
}

