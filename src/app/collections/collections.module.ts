import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsComponent } from './components/collections/collections.component';
import {AppRoutingModule} from "../app-routing.module";



@NgModule({
  declarations: [
    CollectionsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class CollectionsModule { }
