import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./components/app-root/app.component";
import {TodoPageComponent} from "./components/todo-page/todo-page.component";
import {ArchivePageComponent} from "./components/archive-page/archive-page.component";
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {TodoItemComponent} from "./components/todo-item/todo-item.component";
import {TodoStoreService} from "./services/todo-store.service";
import {ArchiveListComponent} from "./components/archive-list/archive-list.component";
import {NewTodoComponent} from "./components/new-todo/new-todo.component";
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { PageNotFoundComponent } from './components/app-root/not-found.component';


const appRoutes: Routes = [
    {path: 'todo', component: TodoPageComponent},
    {path: 'todo/:id', component: EditTodoComponent},
    {path: 'archive', component: ArchivePageComponent},
    { path: '',   redirectTo: '/todo', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        TodoPageComponent,
        TodoListComponent,
        TodoItemComponent,
        NewTodoComponent,
        ArchivePageComponent,
        ArchiveListComponent,
        EditTodoComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [TodoStoreService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
