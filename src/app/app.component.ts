import { Component } from '@angular/core';
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
  // imports: [RouterOutlet],
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


}
