import { Injectable } from '@angular/core';

interface Task {
  text: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(taskText: string): void {
    const newTask: Task = { text: taskText, completed: false };
    this.tasks.push(newTask);
  }

  removeTask(index: number): void {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
    }
  }

  markTaskAsCompleted(index: number): void {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].completed = !this.tasks[index].completed;
    }
  }
}
