export class DutyLog{
    constructor(text){
        this.id = crypto.randomUUID();
        this.text = text
    }
}

export class DivisionalLog{
    constructor(text){
        this.id = crypto.randomUUID();
        this.text = text
    }
}