import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponentComponent } from './Components/registration-component/registration-component.component';
import { LoginComponentComponent } from './Components/login-component/login-component.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponentComponent },
    { path: 'login', component: LoginComponentComponent },
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