import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';

interface Task {
  id: number;
  title: string;
  priority: string;
  type: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  imports: [ CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todo List';

  tasks: Task[] = [];

  todoTitle = "";
  priority = "Low";
  type = "Personal";
  isCompleted = false;

  addTodoTitle(value:string) {
    console.log(value)
    this.todoTitle=value
  }

  addTodoPriority(event: Event){
    const priority = (event.target as HTMLSelectElement).value;
    console.log(priority);
    
    this.priority=priority
  }

  addTodoType(event: Event){
    const type = (event.target as HTMLSelectElement).value;
    console.log(type);
    
    this.type=type
  }

  addTask(){
    if (this.todoTitle === "") {
      alert("Please enter a task title");
      return;
    }
    const newTask: Task = {
      id: this.tasks.length + 1,
      title: this.todoTitle,
      priority: this.priority,
      type: this.type,
      completed: this.isCompleted
    }

    this.tasks.push(newTask);
    this.todoTitle = "";
    this.priority = "Low";
    this.type = "Personal";
    this.isCompleted = false;

    console.log(this.tasks);
    
    return;
  }


}
