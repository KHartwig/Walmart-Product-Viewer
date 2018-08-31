import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {CategoriesComponent} from './categories/categories.component';
import {ProductsComponent} from './products/products.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories/:categoryId', component: CategoriesComponent },
  { path: '**', redirectTo: '' }
  // { path: '**', component: PageNotFoundComponent }
];

export const Routing = RouterModule.forRoot(appRoutes);
