import { Component, OnInit } from '@angular/core';
import {WalmartApiService} from '../_services/walmart-api.service';
import {ActivatedRoute} from '@angular/router';
import {PaginatedItem} from '../_models/WalmartAPI/PaginatedItem';
import {Category} from '../_models/WalmartAPI/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private walmartService: WalmartApiService) {
  }

  categoryId: string;
  category: Category;
  products: PaginatedItem[];
  error;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.categoryId = params.categoryId;
      this.loadProducts();
    });
  }

  private loadProducts () {
    this.walmartService.GetCategoryProducts(this.categoryId).subscribe(response => {
      console.log('PRODUCTS', response);
      this.category = response.category;
      this.products = response.items;
    },
    err => {
      console.error(err);
      this.error = err;
    });
  }
}
