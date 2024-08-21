import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SigninComponent } from './signin/signin.component';
import { RidersComponent } from './riders/riders.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';

const routes: Routes = [
  {path:'',redirectTo:'/landing',pathMatch:'full'},
  { path:'landing',component: LandingComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'riders',component:RidersComponent},
  {path:'passwordReset',component:PasswordresetComponent},
  {path:'admin',component:AdminComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
