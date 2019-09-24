import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { CardApplicationComponent } from './card-application/card-application.component';
import { StuffService } from './services/service.service';

import { EmployeeComponent } from './employee/employee.component';
import { AppRoutingModule } from './app-routing.module';
import { CardApplication2Component } from './card-application2/card-application2.component';



@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    EmployeeComponent,
    CardApplicationComponent,
    CardApplication2Component
  ],
  imports: [
    BrowserModule,

    HttpClientModule,

    AppRoutingModule,
    FormsModule

  ],
  providers: [StuffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
