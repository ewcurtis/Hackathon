import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CardApplicationComponent } from './card-application/card-application.component';
import { StuffService } from './services/service.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CardApplicationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [StuffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
