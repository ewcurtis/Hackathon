import { Component, OnInit } from '@angular/core';
import { PendingApp } from './pendingApp';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  customers: PendingApp[] = [new PendingApp('Evan Curtis', 30250, 750),
  new PendingApp('Joe Smoe', 30250, 200)];

  constructor() { }

  ngOnInit() {
  }

  load() {
    return this.customers;
  }

deny(p: PendingApp) {
  //console.log(p);
  console.log('denied');
  this.customers = this.customers.filter((c) => {
    if (c !== p) {
      return c;
    }
  });
  window.alert('Customer Denied');
  this.load();
  for (let cs of this.customers) {
    console.log(cs);
  }
}

approve(p: PendingApp) {
  console.log('approved');
  this.customers = this.customers.filter((c) => {
    if (c !== p) {
      return c;
    }
  });
  window.alert('Customer Approved');
  this.load();
}
}
