import {Component, Input, EventEmitter, Output} from "@angular/core";
import {TodoItem} from "../../model/todo-item.model";

//todo item selected can be archived by clicking on the x button to the right of it
//todo item selected can be marked as completed by checking the check box to the left of it
//can uncheck it if user thinks it is not completed
//as long as it is not archived, user can toggle the check box


@Component({
    selector: 'todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

    @Input()
    item: TodoItem;

    @Output()
    done = new EventEmitter<TodoItem>();

    removeClicked() {
        this.done.emit(this.item);
    }

    doneClicked(){
        this.item.completed = !this.item.completed;
    }


}



