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
import { HomeComponent } from './Components/home/home.component';
import { TableComponent } from './Components/table/table.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponentComponent,
    LoginComponentComponent,
    HomeComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    HttpClientModule
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
