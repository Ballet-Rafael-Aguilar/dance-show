import { Component } from '@angular/core';
import { Theme, ThemingService } from "@ballet/shared/theme";

@Component({
  selector: 'ballet-layout-base',
  template: `
      <ballet-toolbar>
          <ng-container theme balletAtom atom="select" [options]="themeSelect"
                        (optionsChange)="onThemeChange($event)">
          </ng-container>
          <ng-container menu balletAtom atom="select" [options]="themeSelect"
                        (optionsChange)="onThemeChange($event)">
          </ng-container>
          <ng-container menu-side balletAtom atom="select" [options]="themeSelect"
                        (optionsChange)="onThemeChange($event)">
          </ng-container>
          <ballet-button>ui</ballet-button>
          <h1>Welcome to {{ title }}!</h1>
          <h1>{{name}}</h1>
          <router-outlet></router-outlet>
      </ballet-toolbar>
  `
})
export class LayoutBaseComponent {
  title = 'playground';
  name = 'User';
  themeSelect: any;
  themeSelected: any;

  constructor(private themingService: ThemingService) {
      this.themeSelect = [
        {value: "default-theme" as Theme, text: 'light'},
        {value: "dark-theme" as Theme, text: 'dark'}
      ];

      this.themeSelected = {value: "default-theme" as Theme, text: 'light'};

  }

  onThemeChange($event) {
    this.themingService.setTheme($event.value);
  }
}
