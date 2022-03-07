import { Component } from '@angular/core';

@Component({
  selector: 'ballet-toolbar',
  template: `
      <mat-toolbar>
          <button fxHide.gt-sm mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon"
                  (click)="sidenav.toggle()">
              <mat-icon>menu</mat-icon>
          </button>
          <a mat-button routerLink="/">
              <span>Site name</span>
          </a>
          <span class="example-spacer"></span>
          <div fxHide.lt-md>
              <ng-content select="[menu]"></ng-content>
              <a mat-button routerLink="/home">Home</a>
              <a mat-button routerLink="/start-page">Start page</a>
              <a mat-button routerLink="/offer">Offer</a>
              <a mat-button routerLink="/contact">Contact</a>
              <a mat-button routerLink="/about-us">About us</a>
          </div>
          <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
              <mat-icon>favorite</mat-icon>
          </button>
          <ng-content select="[theme]"></ng-content>
          <ballet-button>Mat button</ballet-button>
          <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
              <mat-icon>share</mat-icon>
          </button>
      </mat-toolbar>

      <mat-sidenav-container fxFlexFill class="example-container">
          <mat-sidenav #sidenav fxLayout="column" mode="over"  opened="false" fxHide.gt-sm="true">
              <div fxLayout="column">
                  <ng-content select="[menu-side]"></ng-content>
                  <a mat-button routerLink="/about-us">About us</a>
                  <a mat-button routerLink="/prices">Prices</a>
                  <a mat-button routerLink="/start-page">Start page</a>
                  <a mat-button routerLink="/offer">Offer</a>
                  <a mat-button routerLink="/contact">Contact</a>
              </div>
          </mat-sidenav>
          <mat-sidenav-content fxFlexFill>
              <ng-content></ng-content>
          </mat-sidenav-content>
      </mat-sidenav-container>
  `
})
export class BalletToolbarComponent {
}
