import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StuffService } from '../services/service.service';
import { SaveDataService } from '../services/savedataservice';
import { StatusService } from '../services/status.service';
import { TestBed } from '@angular/core/testing';
import { SaveData } from '../services/saveData';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card-application2',
  templateUrl: './card-application2.component.html',
  styleUrls: ['./card-application2.component.css']
})
export class CardApplication2Component implements OnInit {

  constructor(private test: StuffService, private test2: SaveDataService, private ss: StatusService, private router: Router) { }


  ngOnInit() {
    this.getDetails();
  }
  userDetails: SaveData = new SaveData('', '', '', '', '', '', '', '', '', '');

  getDetails() {
    this.userDetails = this.test2.getData();
  }

  saveDetails() {
    this.test2.saveData(this.userDetails);
    console.log(this.test2);
  }

  async userInfo(user: NgForm) {
    this.ss.setSsn(user.controls['ssn'].value);
    console.log(this.ss.getSsn());
    await new Promise(resolve => {
       this.test.poststuff(user.value).toPromise()
        .then((value) => {
      console.log(value);
      resolve(value);
  }); // end promise
  });
    this.router.navigate(['/pending']);
}
}
