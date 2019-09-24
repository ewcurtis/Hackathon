import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { CardApplicationComponent } from './card-application/card-application.component';

import { EmployeeComponent } from './employee/employee.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    EmployeeComponent,
    CardApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
