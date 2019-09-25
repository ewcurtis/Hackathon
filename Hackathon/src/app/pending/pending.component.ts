import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
pending = 'Please wait while we lookup the status of your application...'
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.pending = 'You made it past the first step! Now all you have to do is wait for '
      + 'one of our employees to approve or deny your application!';

    }, 5000);
  }

}
