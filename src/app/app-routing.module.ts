import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { combineLatest } from 'rxjs';

const routes: Routes = [
  {
    path:'',
    component: ProductListComponent
  },
  {
    path: 'admin/products/add',
    component: AddProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
