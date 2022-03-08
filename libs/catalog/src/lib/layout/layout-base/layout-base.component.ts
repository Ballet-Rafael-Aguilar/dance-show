import { Component } from '@angular/core';
import { Theme, ThemingService } from "@ballet/shared/theme";
import { Router } from "@angular/router";

@Component({
  selector: 'ballet-layout-base',
  template: `
      <ballet-toolbar>
          <ng-template #menu #sideMenu>
              <ng-container *ngFor="let item of menuItems">
                  <ng-container balletAtom [atom]="item.type" [options]="item.config"
                                (optionsChange)="onThemeChange($event)">
                  </ng-container>
              </ng-container>
          </ng-template>
          <ng-template #content>
              <h1>Welcome to {{ title }}!</h1>
              <h1>{{name}}</h1>
              <router-outlet></router-outlet>
          </ng-template>
      </ballet-toolbar>
  `
})
export class LayoutBaseComponent {
  title = 'playground';
  name = 'User';
  menuItems;
  themeSelected;

  constructor(private themingService: ThemingService, private readonly router: Router) {
    this.menuItems = [
      {
        config: {
          text: 'Home', click: () => {
            this.navigateTo('home');
          }
        },
        type: 'button'
      }, {
        config: {
          text: 'Contact', click: () => {
            this.navigateTo('contact');
          }
        },
        type: 'button'
      }, {
        config: {
          text: 'About us', click: () => {
            this.navigateTo('about');
          }
        },
        type: 'button'
      },
      {
        config: [
          {value: "default-theme" as Theme, text: 'light'},
          {value: "dark-theme" as Theme, text: 'dark'}
        ],
        type: 'select'
      }
    ];

    this.themeSelected = {value: "default-theme" as Theme, text: 'light'};

  }

  navigateTo(section: string) {
    this.router.navigate([section]);
  }

  onThemeChange($event) {
    this.themingService.setTheme($event.value);
  }
}
