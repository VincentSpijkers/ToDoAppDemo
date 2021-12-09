import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../../models/Task";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() task !: Task;

  constructor(private taskService :TaskService) { }

  ngOnInit(): void {
  }

  updateTask(task: Task): void {
    task.finished = !task.finished;
    this.taskService.updateTask(task);
  }

}
