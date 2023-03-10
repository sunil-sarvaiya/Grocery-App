import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { RegistationComponent } from './registation/registation.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path:"",
   component:LogInComponent
  },
  {
    path:"login",
   component:LogInComponent
  },
  {
    path:"registration",
   component:RegistationComponent
  },
  {
    path:"use-profile",
   component:UserProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
