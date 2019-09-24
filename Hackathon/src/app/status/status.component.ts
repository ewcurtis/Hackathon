import { Component, OnInit } from '@angular/core';
import { StuffService } from '../services/service.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  statuses = [];

  constructor(private ss: StuffService) { }

  ngOnInit() {
    this.getStatus();
  }

  getStatus() {
    this.ss.getstuff().subscribe((posts: any) => {
      this.statuses = posts;
    });
  }

}
