import { Component } from '@angular/core';
import { Theme, ThemingService } from '@ballet/shared/theme';
import { Router } from '@angular/router';
import { AtomType } from "../../../../../atoms/src/lib/factory/atom.directive";
import { MatSelectChange } from "@angular/material/select";

@Component({
  selector: 'ballet-layout-base',
  template: `
    <ballet-toolbar>
      <ng-template #menu #sideMenu>
        <ng-container *ngFor="let item of menuItems">
          <ng-container balletAtom [type]="item.type" [config]="item.config">
          </ng-container>
        </ng-container>
      </ng-template>
      <ng-template #content>
        <h1>Welcome to {{ title }}!</h1>
        <h1>{{ name }}</h1>
        <router-outlet></router-outlet>
      </ng-template>
    </ballet-toolbar>
  `,
})
export class LayoutBaseComponent {
  title = 'playground';
  name = 'User';
  menuItems;
  themeSelected;

  constructor(
    private themingService: ThemingService,
    private readonly router: Router
  ) {
    this.menuItems = [
      {
        config: {
          id: 'home-header-button',
          options: {value: { text: 'Home' }},
          click: () => {
            this.navigateTo('home');
          },
        },
        type: 'button' as AtomType,
      },
      {
        config: {
          id: 'contact-header-button',
          options: {value: { text: 'Contact' }},
          click: () => {
            this.navigateTo('contact');
          },
        },
        type: 'button' as AtomType,
      },
      {
        config: {
          id: 'about-header-button',
          options: {value: { text: 'About us' }},
          click: () => {
            this.navigateTo('about');
          },
        },
        type: 'button' as AtomType,
      },
      {
        config: {
          id: 'theme-header-select',
          options: {values: [
            { value: 'default-theme' as Theme, text: 'light' },
            { value: 'dark-theme' as Theme, text: 'dark' },
          ]},
          click: ($event: MatSelectChange) => {
            this.onThemeChange($event);
          },
        },
        type: 'select'  as AtomType,
      },
    ];

    this.themeSelected = { value: 'default-theme' as Theme, text: 'light' };
  }

  navigateTo(section: string) {
    this.router.navigate([section]);
  }

  onThemeChange($event: MatSelectChange) {
    this.themingService.setTheme($event.value);
  }
}
