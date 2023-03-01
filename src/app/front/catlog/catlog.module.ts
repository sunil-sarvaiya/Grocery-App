import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatlogRoutingModule } from './catlog-routing.module';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    CategoryComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    CatlogRoutingModule
  ]
})
export class CatlogModule { }
