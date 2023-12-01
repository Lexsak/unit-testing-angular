import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list.component';
import { TaskService } from '../task.service';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskListComponent],
      imports: [FormsModule],
      providers: [TaskService],
    });

    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add task', () => {
    const task = 'Test Task';
    component.newTask = task;
    component.addTask();
    expect(component.tasks.some((t) => t.text === task)).toBeTruthy();
  });

  it('should remove task', () => {
    const task = 'Test Task';
    component.tasks = [{ text: task, completed: false }];
    component.removeTask(0);
    expect(component.tasks.length).toBe(0);
  });

  it('should mark task as completed', () => {
    const task = 'Test Task';
    component.tasks = [{ text: task, completed: false }];
    component.markAsCompleted(0);
    expect(component.tasks[0].completed).toBeTruthy();
  });
});
