import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForms } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CardApplicationComponent } from './card-application/card-application.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CardApplicationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
