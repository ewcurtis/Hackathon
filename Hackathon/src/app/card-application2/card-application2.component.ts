import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StuffService } from '../services/service.service';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-card-application2',
  templateUrl: './card-application2.component.html',
  styleUrls: ['./card-application2.component.css']
})
export class CardApplication2Component implements OnInit {

  constructor(private test:StuffService) { }

  ngOnInit() {
  }
userDetails = { fn:'', ln:'', address:'', city:'', state:'', zip:'', dob:'', email:'', ssn:'', income:'' }
  userInfo(user:NgForm) {
    this.test.poststuff(user.value)
  }
}
