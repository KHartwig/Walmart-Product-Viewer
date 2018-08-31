import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PaginatedItems} from '../_models/WalmartAPI/PaginatedItems';
import {Category} from '../_models/WalmartAPI/Category';

@Injectable()
export class WalmartApiService {
  constructor(private http: HttpClient) {}

  apiUrl = 'http://localhost:4040/api';

  GetCategories() {
    return this.http.get<Category[]>(this.apiUrl + `/categories`);
  }

  GetCategoryProducts(categoryId: string) {
    return this.http.get<PaginatedItems>(this.apiUrl + `/categories/${categoryId}`);
  }

  GetProductDetails(productId: string) {
    return this.http.get(this.apiUrl + `/products/${productId}`)
  }
}
