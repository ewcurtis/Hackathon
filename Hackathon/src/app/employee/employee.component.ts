import { Component, OnInit } from '@angular/core';
import { PendingApp } from './pendingApp';
import { StuffService } from '../services/service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  customers: PendingApp[] = [new PendingApp('Evan Curtis', 30250, 750),
  new PendingApp('Joe Smoe', 30250, 200)];
  status="pending ";
  ex = [];
  constructor(private ss: StuffService) { }

  ngOnInit() {
    this.lol();
  }

  load() {
    return this.customers;
  }


  random_num = Math.floor(Math.random() * 700) + 250;
  
  lol() {
    this.ss.getstuff().subscribe((posts: any[]) => {
      this.ex = posts;
       console.log(this.ex);
      // console.log(this.ex[0]['employment and income'][0].income);
    });
   // console.log(this.ex[0]['employment and income'][0].income);
    
    //console.log(this.ex);
  }

deny(p) {
  p.approval = 'denied';
  this.customers = this.customers.filter((c) => {
    if (c !== p) {
      return c;
    }
  });
  this.ss.postActOnApplication(p).subscribe();
  window.alert('Customer Denied');
  this.load();
  for (let cs of this.customers) {
    console.log(cs);
  }
}

approve(p) {
  this.customers = this.customers.filter((c) => {
    if (c !== p) {
      return c;
    }
  });
  p.approval = 'approved';
  this.ss.postActOnApplication(p).subscribe();
  window.alert('Customer Approved');
  this.load();
}
}
