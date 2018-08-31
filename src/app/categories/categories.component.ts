import { Component, OnInit } from '@angular/core';
import {WalmartApiService} from '../_services/walmart-api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PaginatedItem} from '../_models/WalmartAPI/PaginatedItem';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private walmartService: WalmartApiService) { }

  categoryId: string;
  products: PaginatedItem[];

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.categoryId = params.categoryId;
      this.loadProducts();
    })
  }

  private loadProducts () {
    this.walmartService.GetCategoryProducts(this.categoryId).subscribe(response => {
      console.log('PRODUCTS', response);
      this.products = response.items;
    },
    err => {
      console.log(err);
      if (err.status === 404) {
        //redirect to page not found
        console.log('The page you are looking for does not exist.')
      }
      else {
        // Internal Error
        console.log('Internal Error, please return to home.')
      }
    });
  }
}
