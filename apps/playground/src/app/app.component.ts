import { Component } from '@angular/core';

@Component({
  selector: 'ballet-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'playground';
  name = 'User';
  constructor() {
    console.log('Doing something more');
    console.log('Doing something else');
  }
}
