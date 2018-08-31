import { Component, OnInit } from '@angular/core';
import {WalmartApiService} from '../_services/walmart-api.service';
import {ActivatedRoute} from '@angular/router';
import {PaginatedItem} from '../_models/WalmartAPI/PaginatedItem';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute,
              private walmartService: WalmartApiService) { }

  categoryId: string;
  products: PaginatedItem[];

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.categoryId = params.categoryId;
      this.loadProducts();
    })
  }

  private loadProducts () {
    this.walmartService.GetProducts(this.categoryId).subscribe(response => {
      console.log('PRODUCST', response);
      this.products = response.items;
    });
  }
}
