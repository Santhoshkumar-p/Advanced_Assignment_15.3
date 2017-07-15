//Todo item  class

export class TodoItem {
    id: number;
    text: string;
    completed: boolean = false;

    constructor(text: string) {
        this.text = text;
        this.id = new Date().getTime();
    }
}