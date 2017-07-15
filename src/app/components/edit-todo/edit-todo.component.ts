import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {TodoItem} from "../../model/todo-item.model";
import { Router, ActivatedRoute } from '@angular/router';
import { TodoStoreService } from '../../services/todo-store.service';

//user can view the selected todo item

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit{

    private item: TodoItem;
    private sub: any

    constructor(private route: ActivatedRoute, private router: Router, private location: Location, private store: TodoStoreService) {

    }

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.item = this.store.getItem(id);
        });
    }

    back(): void {
        this.location.back();
    }

}
