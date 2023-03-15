import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path:'',
  loadChildren:()=>import("./front/front.module").then((l)=>l.FrontModule)
    
  },

  {
    path:'front',
    loadChildren:()=>import("./front/front.module").then((l)=>l.FrontModule)
    

  },

  

{
  path:'about-us',
  component:AboutUsComponent
},


{
path:'contact-us',
component:ContactUsComponent
},

{
  path:'cart',
  component:CartComponent
  },


{
  path:'**',
  component:PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
