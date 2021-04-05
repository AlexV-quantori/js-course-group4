import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  items:string[] = [];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
