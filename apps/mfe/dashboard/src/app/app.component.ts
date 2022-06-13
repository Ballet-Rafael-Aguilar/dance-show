import { Component } from '@angular/core';

@Component({
  selector: 'ballet-root',
  template: `
      <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'mfe-dashboard';
}
