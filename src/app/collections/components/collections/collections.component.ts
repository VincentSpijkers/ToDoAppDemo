import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {CollectionService} from "../../services/collection.service";
import {Collection} from "../../models/Collection";

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  collections: Collection[] = [];
  testList: string [] = ["fuck"]

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public collectionService: CollectionService) {}

  ngOnInit(): void {
    this.getCollections();
    console.log(this.collections)
  }

  getCollections(): void {
    this.collectionService.getCollections()
      .subscribe(collections => this.collections = collections);
  }

  navigateToTask() : void{
    this.router.navigate(["collection/" + 1], {relativeTo: this.route})
  }



}
