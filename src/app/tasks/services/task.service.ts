import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Task} from "../models/Task";
import {catchError, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private databaseUrl = 'assets/tasks.json';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  public getTasksByCollectionId(id: number): Task[] {
    let selectedTasks: Task[];
    selectedTasks = [];
    this.http.get<Task[]>(this.databaseUrl).subscribe((tasks) =>{
      for (let task of tasks){
        if (task.collectionId == id){
          selectedTasks.push(task)
        }
      }
    })
    return selectedTasks;
  }

  public updateTask(task: Task): Observable<any> {
    return this.http.put(this.databaseUrl, task, this.httpOptions);
  }

}
