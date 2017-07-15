import {Component} from "@angular/core";
import {TodoStoreService} from "../../services/todo-store.service";
import {TodoItem} from "../../model/todo-item.model";

//this component's view displays list of all todos not archived

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

    store: TodoStoreService;

    constructor(store: TodoStoreService) {
        this.store = store;
    }

    removeItem(item: TodoItem) {
        this.store.removeItem(item);
    }
}





















