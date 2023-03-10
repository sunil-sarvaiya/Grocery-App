import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  {
    path:'',
  loadChildren:()=>import("./front/catlog/catlog.module").then((l)=>l.CatlogModule)
    
  },

{
  path:'about-us',
  component:AboutUsComponent
},

{
  path:'user',
  loadChildren:()=>import("./front/user/user.module").then((l)=>l.UserModule)
},

{
path:'contact-us',
component:ContactUsComponent
},

{
  path:'cart',
  component:CartComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
