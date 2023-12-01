import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: string[] = [];

  getTasks(): string[] {
    return this.tasks;
  }

  addTask(task: string): void {
    this.tasks.push(task);
  }

  removeTask(index: number): void {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
    }
  }

  markTaskAsCompleted(index: number): void {
    if (index >= 0 && index < this.tasks.length) {
      // You can implement additional logic here if needed
      console.log(`Task "${this.tasks[index]}" marked as completed.`);
    }
  }
}
