import { Component } from '@angular/core';
import { Theme, ThemingService } from "@ballet/shared/theme";
import { Router } from "@angular/router";

@Component({
  selector: 'ballet-layout-base',
  template: `
      <ballet-toolbar>
          <ng-container theme balletAtom atom="select" [options]="menuItems[1].config"
                        (optionsChange)="onThemeChange($event)">
          </ng-container>
          <ng-template #menu>
              <!--
              <a mat-button routerLink="/home">Home</a>
              <a mat-button routerLink="/start-page">Start page</a>
              <a mat-button routerLink="/offer">Offer</a>
              <a mat-button routerLink="/contact">Contact</a>
              <a mat-button routerLink="/about-us">About us</a>
              -->
              <ng-container *ngFor="let item of menuItems">
                  <ng-container balletAtom [atom]="item.type" [options]="item.config"
                                (optionsChange)="onThemeChange($event)">
                  </ng-container>
              </ng-container>
          </ng-template>
          <ng-container menu-side balletAtom atom="select" [options]="menuItems[1].config"
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
  menuItems: any;
  themeSelected: any;

  constructor(private themingService: ThemingService, private readonly router: Router) {
    this.menuItems = [
      {
        config: {
          text: 'Home', click: () => {
            console.log('Home click');
            this.navigateTo('home');
          }
        },
        type: 'button'
      },{
        config: {
          text: 'Contact', click: () => {
            console.log('Contact click');
            this.navigateTo('contact');
          }
        },
        type: 'button'
      },{
        config: {
          text: 'About us', click: () => {
            console.log('About us click');
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
