import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskComponent} from "./tasks/components/task/task.component";
import {CollectionsComponent} from "./collections/components/collections/collections.component";

const routes: Routes = [
  {path: '', component: CollectionsComponent, children: [
    {path: 'collection/:id', component: TaskComponent,}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
