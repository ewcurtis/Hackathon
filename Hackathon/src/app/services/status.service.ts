import { Injectable } from '@angular/core';
import { StuffService } from './service.service';
import { Status } from '../status/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  details: Status = new Status('', '', '');
  ssn;
  ex = [];
  constructor(private ss: StuffService) { }

  getDetails() {
    return this.details;
  }
  getSsn() {
    return this.ssn;
  }
  setSsn(id) {
    this.ssn = id;
  }
}
