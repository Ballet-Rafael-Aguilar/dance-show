import { Component } from '@angular/core';
import { Theme, ThemingService } from "../../../../../shared/theme/src/lib/theming.service";
import { ToolbarInterface } from "@ballet/interfaces";

@Component({
  selector: 'ballet-layout-base',
  template: `
      <ballet-toolbar [config]="toolbar" (configChange)="onThemeChange($event)">
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
    this.themingService.setTheme($event.themeSelected.value);
  }
}
