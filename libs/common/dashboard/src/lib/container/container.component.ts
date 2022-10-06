import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Theme, ThemingService } from "@ballet/shared/theme";
import { Router } from "@angular/router";
import { MatSelectChange } from "@angular/material/select";
import { Atom } from "@ballet/interfaces";
import { Molecule } from "../../../../../interface/src/lib/interfaces/molecules.interface";
import { ATOMS } from "../../../../atoms/src/lib/factory/atom-factory.directive";
import { MOLECULES } from "../../../../molecules/src/lib/factory/molecule.directive";

@Component({
  selector: 'ballet-container',
  template: `
      <div [ngClass]="(selectedTheme$ | async) ?? 'default-theme'">
          <ballet-layout-base [components]="components" [contents]="content"></ballet-layout-base>
      </div>`,
})
export class ContainerComponent implements OnInit {
  selectedTheme$!: Observable<string>;
  components!: { config: Atom, type: ATOMS }[];
  content!: { config: Molecule | Atom, type: MOLECULES }[];
  themeSelected;

  constructor(private themingService: ThemingService, private readonly router: Router) {
    this.components = [
      {
        config: {
          id: 'home-header-button',
          options: {value: {text: 'Home'}},
          click: () => {
            this.navigateTo('home');
          },
        },
        type: 'button',
      },
      {
        config: {
          id: 'contact-header-button',
          options: {value: {text: 'Contact'}},
          click: () => {
            this.navigateTo('contact');
          },
        },
        type: 'button',
      },
      {
        config: {
          id: 'about-header-button',
          options: {value: {text: 'About us'}},
          click: () => {
            this.navigateTo('about');
          },
        },
        type: 'button',
      },
      {
        config: {
          id: 'theme-header-select',
          options: {
            values: [
              {value: 'default-theme' as Theme, text: 'light'},
              {value: 'dark-theme' as Theme, text: 'dark'},
            ]
          },
          click: ($event: MatSelectChange) => {
            this.onThemeChange($event);
          },
        },
        type: 'select',
      },
    ];

    this.content = [
      {
        config: {
          id: 'naive-component',
        },
        type: 'naive',
      },
      {
        config: {
          id: 'random-body-button',
          options: {value: {text: 'Body button'}},
          click: () => {
            console.log('Click!')
          },
        },
        type: 'button',
      }
    ]

    this.themeSelected = {value: 'default-theme' as Theme, text: 'light'};
  }

  ngOnInit(): void {
    this.selectedTheme$ = this.themingService.selected;
  }

  navigateTo(section: string): void {
    this.router.navigate([section]);
  }

  onThemeChange($event: MatSelectChange): void {
    this.themingService.setTheme($event.value);
  }
}
