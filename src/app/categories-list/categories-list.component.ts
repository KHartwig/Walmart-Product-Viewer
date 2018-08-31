import { Component, OnInit } from '@angular/core';
import {WalmartApiService} from '../_services/walmart-api.service';
import {Category} from '../_models/WalmartAPI/Category';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  constructor(private walmartService: WalmartApiService) { }

  productCategories: Category[] = [];

  ngOnInit() {
    this.loadCategories();
  }

  private loadCategories () {
    // this.productCategories = [
    //   {id:"1", name: "Toys"},
    //   {id:"1", name: "Games"},
    //   {id:"1", name: "Furnit"},
    // ];
    this.walmartService.GetCategories().subscribe(response => {
      this.productCategories = response.categories;
    });
  }
}
