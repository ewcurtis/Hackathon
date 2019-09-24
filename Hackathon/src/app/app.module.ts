import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CardApplicationComponent } from './card-application/card-application.component';
import { AppRoutingModule } from './app-routing.module';
import { CardApplication2Component } from './card-application2/card-application2.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CardApplicationComponent,
    CardApplication2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
