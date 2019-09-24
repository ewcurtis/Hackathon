import { Component } from '@angular/core';
import { StuffService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hackathon';

  constructor(private st: StuffService){}
}
