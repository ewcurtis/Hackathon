import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-card-application2',
  templateUrl: './card-application2.component.html',
  styleUrls: ['./card-application2.component.css']
})
export class CardApplication2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
userDetails = { fn:'', ln:'', address:'', city:'', state:'', zip:'', dob:'', email:'', ssn:'', income:'' }
  userInfo(user:NgForm) {
    console.log(user.value.fn)
  }
}
