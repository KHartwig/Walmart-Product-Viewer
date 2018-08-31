import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WalmartApiService} from '../_services/walmart-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private walmartService: WalmartApiService) { }

  productId: string;
  product;
  error;


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.productId = params.productId;
      this.loadProductDetails();
    })
  }

  loadProductDetails () {
    this.walmartService.GetProductDetails(this.productId).subscribe(product => {
      console.log('PRODUCT', product);
      this.product = product;
    },
        err => {
      console.error(err);
      this.error = err;
    });
  }
}
