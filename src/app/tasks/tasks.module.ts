import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskComponent } from './components/task/task.component';



@NgModule({
  declarations: [
    TaskItemComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class TasksModule { }
