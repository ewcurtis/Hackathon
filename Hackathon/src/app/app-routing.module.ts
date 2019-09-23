import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardApplicationComponent } from './card-application/card-application.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: CardApplicationComponent },
  { path: 'actOnApplication', component: EmployeeComponent }
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
