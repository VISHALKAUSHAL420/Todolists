import { Component, NgModule } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
$events: any;
Todo(arg0: any) {
throw new Error('Method not implemented.');
}
  todos: Todo[];
  constructor() {
    this.todos = [
      {
      sno:1,
      title:"this is title",
      desc: "description",
      active: true
      },
      {
      sno:2,
      title:"this is title",
      desc: "description",
      active: true
      },
      {
      sno:3,
      title:"this is title",
      desc: "description",
      active: true
      }
    ]
  }
  ngOnInit(): void{

  }
  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1)
  }
  addTodo(todo:Todo){
    console.log(todo);
    
    this.todos.push(todo)
  }
}
