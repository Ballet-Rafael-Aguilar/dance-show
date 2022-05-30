import { Component } from '@angular/core';

@Component({
  selector: 'ballet-root',
  template: `<h1>
      <span>DREAM Dashboard</span></h1>
        <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'mfe-dashboard';
}
