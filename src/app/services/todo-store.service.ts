import {Injectable} from "@angular/core";
import {TodoItem} from "../model/todo-item.model";

//Service which stores all todos entered by user in the current session
//Provides all crud operations except for update
//Does not persist data, lost after user leaves session
//Maintains two TodoItem arrays:
//* items[] which contains the current todo item list
//* archive[] which contains the archived todo item list

@Injectable()
export class TodoStoreService {

    items: TodoItem[] = [];
    archive: TodoItem[] = [];

    addItem(text: string) {
        let todoItem = new TodoItem(text);
        this.items.push(todoItem);
    }

    getItem(id: number): TodoItem{
        let temp: TodoItem[] = this.items.filter(item => item.id === id);
        if (temp.length < 1)
            temp = this.archive.filter(item => item.id === id);
        return temp[0];
    }

    removeItem(item: TodoItem) {
        let index = this.items.indexOf(item);
        if (index > -1) {
            let removed = this.items.splice(index, 1)[0];
            //removed.completed = true;
            this.archive.push(removed);
        }
    }
}
