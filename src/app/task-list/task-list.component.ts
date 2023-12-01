import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  tasks: { text: string; completed: boolean }[] = [];
  newTask: string = '';

  constructor(private taskService: TaskService) {
    this.refreshTasks();
  }

  addTask(): void {
    if (this.newTask.trim() !== '') {
      this.taskService.addTask(this.newTask.trim());
      this.newTask = '';
      this.refreshTasks();
    }
  }

  removeTask(index: number): void {
    this.taskService.removeTask(index);
    this.refreshTasks();
  }

  markAsCompleted(index: number): void {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  private refreshTasks(): void {
    this.tasks = this.taskService
      .getTasks()
      .map((task) => ({ text: task.text, completed: task.completed }));
  }
}
