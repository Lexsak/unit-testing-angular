import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  tasks: string[] = [];
  newTask: string = '';

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  addTask(): void {
    if (this.newTask.trim() !== '') {
      this.taskService.addTask(this.newTask.trim());
      this.newTask = '';
      this.tasks = this.taskService.getTasks();
    }
  }

  removeTask(index: number): void {
    this.taskService.removeTask(index);
    this.tasks = this.taskService.getTasks();
  }

  markAsCompleted(index: number): void {
    this.taskService.markTaskAsCompleted(index);
    this.tasks = this.taskService.getTasks();
  }
}
