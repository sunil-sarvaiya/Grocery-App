import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'front',component:HomeComponent
  },
  {
    path:'catlog',
    loadChildren:()=>import("./catlog/catlog.module").then((l)=>l.CatlogModule)
  },
  
  
  {
    path:'user',
    loadChildren:()=>import("./user/user.module").then((l)=>l.UserModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
