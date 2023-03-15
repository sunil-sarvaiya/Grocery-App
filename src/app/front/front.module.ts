import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { HomeComponent } from './home/home.component';
// import { CategoryComponent } from './category/category.component';
// import { ProductListComponent } from './product-list/product-list.component';
// import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
    // CategoryComponent,
    // ProductListComponent,
    // ProductDetailsComponent
  
    HomeComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule
  ]
})
export class FrontModule { }
