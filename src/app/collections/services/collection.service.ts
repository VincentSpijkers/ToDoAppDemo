import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Collection} from "../models/Collection";

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private databaseUrl = 'assets/collections.json';

  constructor(private http: HttpClient) {
  }

  getCollections(): Observable<Collection[]> {
    return this.http.get<Collection[]>(this.databaseUrl)
  }
}
