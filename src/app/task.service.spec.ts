import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add task', () => {
    const taskText = 'Test Task';
    service.addTask(taskText);
    expect(service.getTasks()[0].text).toEqual(taskText);
  });

  it('should remove task', () => {
    const taskText = 'Test Task';
    service.addTask(taskText);
    service.removeTask(0);
    expect(service.getTasks().length).toBe(0);
  });

  it('should mark task as completed', () => {
    const taskText = 'Test Task';
    service.addTask(taskText);
    service.markTaskAsCompleted(0);
    const tasks = service.getTasks();
    expect(tasks[0].completed).toBeTruthy();
  });
});
