import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  imports: [ CommonModule, FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todo List';
  isChecked:boolean = false;
  tasks: Task[] = [
    { id: 1, title: 'Fix bugs', priority: 'High', completed: false, type: 'Personal' },
    { id: 2, title: 'Prepare report', priority: 'Medium', completed: true, type: 'Personal' },
    { id: 3, title: 'Team meeting', priority: 'Low', completed: false, type: 'Personal' }
  ];

  todoTitle = "";
  priority = "Low";
  type = "Personal";
  completed = false;

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
      completed: this.completed
    }

    const inputElement = document.getElementById('inputField') as HTMLInputElement;
    inputElement.value = '';

    this.tasks.push(newTask);
    this.todoTitle = "";
    this.priority = "Low";
    this.type = "Personal";
    this.completed = false;

    console.log(this.tasks);
    
    return;
  }

  deleteTodo(id:number){
    this.tasks = this.tasks.filter(task => task.id !== id);
  }


}
