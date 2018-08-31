import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {CategoriesComponent} from './categories/categories.component';
import {ProductsComponent} from './products/products.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories/:categoryId', component: CategoriesComponent },
  { path: 'products/:productId', component: ProductsComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const Routing = RouterModule.forRoot(appRoutes);
