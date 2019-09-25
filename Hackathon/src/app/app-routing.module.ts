import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardApplicationComponent } from './card-application/card-application.component';
import { CardApplication2Component } from './card-application2/card-application2.component';
import { EmployeeComponent } from './employee/employee.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: CardApplicationComponent },
  { path: 'userForm', component: CardApplication2Component },
  { path: 'actOnApplication', component: EmployeeComponent },
  { path: 'status', component: StatusComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
