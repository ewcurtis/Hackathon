import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StuffService } from '../services/service.service';
import { SaveDataService } from '../services/savedataservice';
import { TestBed } from '@angular/core/testing';
import { SaveData } from '../services/saveData';

@Component({
  selector: 'app-card-application2',
  templateUrl: './card-application2.component.html',
  styleUrls: ['./card-application2.component.css']
})
export class CardApplication2Component implements OnInit {

  constructor(private test:StuffService, private test2:SaveDataService) { }

  ngOnInit() {
  }
userDetails:SaveData

getDetails(){
  this.userDetails = this.test2.getData()
}

saveDetails(){
  this.test2.saveData(this.userDetails)
}

  userInfo(user:NgForm) {
    this.test.poststuff(user.value).subscribe((record)=>{
      console.log(record)
    })
  }
}
