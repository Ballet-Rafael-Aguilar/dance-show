import { Component } from '@angular/core';
import { Theme, ThemingService } from "@ballet/shared/theme";
import { ToolbarInterface } from "@ballet/interfaces";

@Component({
  selector: 'ballet-layout-base',
  template: `
      <ballet-toolbar [config]="toolbar">
          <ng-container theme balletAtom atom="select" [options]="toolbar.themeSelect"
                        (optionsChange)="onThemeChange($event)">
          </ng-container>
          <ng-container menu balletAtom atom="select" [options]="toolbar.themeSelect"
                        (optionsChange)="onThemeChange($event)">
          </ng-container>
          <ng-container menu-side balletAtom atom="select" [options]="toolbar.themeSelect"
                        (optionsChange)="onThemeChange($event)">
          </ng-container>
          <ballet-button></ballet-button>
          <h1>Welcome to {{ title }}!</h1>
          <h1>{{name}}</h1>
          <router-outlet></router-outlet>
      </ballet-toolbar>
  `
})
export class LayoutBaseComponent {
  title = 'playground';
  name = 'User';
  toolbar: ToolbarInterface;

  constructor(private themingService: ThemingService) {
    this.toolbar = {
      themeSelect: [
        {value: "default-theme" as Theme, text: 'light'},
        {value: "dark-theme" as Theme, text: 'dark'}
      ],
      themeSelected: {value: "default-theme" as Theme, text: 'light'}
    };
  }

  onThemeChange($event) {
    this.themingService.setTheme($event.value);
  }
}
