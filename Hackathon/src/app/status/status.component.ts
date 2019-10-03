import { Component, OnInit } from '@angular/core';
import { StuffService } from '../services/service.service';
import { StatusService } from '../services/status.service';
import { Status } from './status';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  statuses = [];
  details: Status = new Status('','','');
  ex = [];

  constructor(private ss: StuffService, private status: StatusService) { }

  ngOnInit() {
    this.getStatus();
    this.findStatus();
  }

  getStatus() {
    this.ss.getstuff().subscribe((posts: any) => {
      this.statuses = posts;
    });
  }

  findStatus() {

    this.ss.getstuff().subscribe((posts: any[]) => {
      this.ex = posts;
      console.log('my ssn: ' + this.status.ssn);
      for (let e of this.ex) {
      console.log(e);
      if (this.status.getSsn() === e.ssn) {
        console.log('found the id!');
        this.details = new Status(e.fn, e.ln, e.approval);
        return this.details;
      }
    }
  });
  }

}
