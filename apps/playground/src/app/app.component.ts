import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemingService } from '@ballet/shared/theme';

@Component({
  selector: 'ballet-root',
  template: `
      <div [ngClass]="selectedTheme$ | async">
          <router-outlet></router-outlet>
      </div>
  `
})
export class AppComponent implements OnInit {
  selectedTheme$: Observable<string>;

  constructor(private themingService: ThemingService) {}

  ngOnInit(): void {
    this.selectedTheme$ = this.themingService.selected;
  }
}
