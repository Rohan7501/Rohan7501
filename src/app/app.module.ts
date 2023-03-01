import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MyMaterialModule } from  './material.module';

import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponentComponent } from './Components/registration-component/registration-component.component';
import { LoginComponentComponent } from './Components/login-component/login-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    // RouterModule.forRoot([
    //   { path: '', redirectTo: '/', pathMatch: 'full' },
    //   { path: 'register', component: RegistrationComponentComponent },
    //   { path: 'login', component: LoginComponentComponent },
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
