import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-todo',
  templateUrl: './main-todo.component.html',
  styleUrls: ['./main-todo.component.css']
})
export class MainTodoComponent implements OnInit {
  todolist = ["Prepare Shopping List", "Deliver Items to the Stores"];
  value = "";

  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    if(this.value && this.value !== "") {
      this.todolist.push(this.value);
      this.value = "";
    }
  }
  deleteTodo(i:number) {
    this.todolist.splice(i, 1);
  }
  deleteAllTodo() {
    this.todolist = [];
  }

  
}
