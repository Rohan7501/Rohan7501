import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponentComponent } from './Components/registration-component/registration-component.component';
import { LoginComponentComponent } from './Components/login-component/login-component.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponentComponent },
    { path: 'login', component: LoginComponentComponent },
    { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// / RouterModule.forRoot([
  //   { path: '', redirectTo: '/', pathMatch: 'full' },
  //   { path: 'register', component: RegistrationComponentComponent },
  //   { path: 'login', component: LoginComponentComponent },
  // ])