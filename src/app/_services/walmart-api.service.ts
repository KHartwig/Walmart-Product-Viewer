import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TaxonomyResponse} from '../_models/WalmartAPI/TaxonomyResponse';
import {PaginatedResponse} from '../_models/WalmartAPI/PaginatedResponse';

@Injectable()
export class WalmartApiService {
  constructor(private http: HttpClient) {}

  apiUrl = 'http://localhost:4040/api';

  GetCategories() {
    return this.http.get<TaxonomyResponse>(this.apiUrl + `/categories`);
  }

  GetProducts(categoryId: string) {
    return this.http.get<PaginatedResponse>(this.apiUrl + `/categories/${categoryId}`);
  }
}
