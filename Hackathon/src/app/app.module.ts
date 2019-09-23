import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { CardApplicationComponent } from './card-application/card-application.component';


@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    CardApplicationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
