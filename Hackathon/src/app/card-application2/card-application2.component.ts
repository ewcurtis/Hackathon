import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StuffService } from '../services/service.service';
import { SaveDataService } from '../services/savedataservice';
import { TestBed } from '@angular/core/testing';
import { SaveData } from '../services/saveData';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card-application2',
  templateUrl: './card-application2.component.html',
  styleUrls: ['./card-application2.component.css']
})
export class CardApplication2Component implements OnInit {

  constructor(private test: StuffService, private test2: SaveDataService, private router: Router) { }

  ngOnInit() {
    this.getDetails()
  }
  userDetails: SaveData = new SaveData('', '', '', '', '', '', '', '', '', '')

  getDetails() {
    this.userDetails = this.test2.getData()
  }

  saveDetails() {
    this.test2.saveData(this.userDetails)
    console.log(this.test2)
  }

  userInfo(user: NgForm) {
    this.test.poststuff(user.value).subscribe((record) => {
      console.log(record)
      this.router.navigate(['/home']);
    })
  }
}
