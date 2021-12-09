import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../services/task.service";
import {Task} from "../../models/Task";
import {ActivatedRoute, Route} from "@angular/router";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      let id = routeParams['id'];
      this.tasks = this.taskService.getTasksByCollectionId(parseInt(id));
    });
  }

  public noMoreTasksUnfinished(): boolean {
    for (let task of this.tasks) {
      if (!task.finished) return false;
    }
    return true;
  }

  public noTasksCompleted(): boolean {
    for (let task of this.tasks) {
      if (task.finished) return false;
    }
    return true;
  }

}
