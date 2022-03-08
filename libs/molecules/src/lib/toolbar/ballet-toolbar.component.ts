import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'ballet-toolbar',
  template: `
      <mat-toolbar>
          <button fxHide.gt-sm mat-icon-button (click)="sidenav.toggle()">
              <mat-icon>menu</mat-icon>
          </button>
          <a mat-button routerLink="/">
              <span>Site name</span>
          </a>
          <span class="example-spacer"></span>
          <div fxHide.lt-md>
              <ng-content *ngTemplateOutlet="menu"></ng-content>
          </div>
          <button mat-icon-button>
              <mat-icon>favorite</mat-icon>
          </button>
      </mat-toolbar>

      <mat-sidenav-container fxFlexFill class="example-container">
          <mat-sidenav #sidenav fxLayout="column" mode="over" opened="false" fxHide.gt-sm="true">
              <div fxLayout="column">

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
  @ContentChild('menu', {read: TemplateRef}) menu: TemplateRef<any>;
  @ContentChild('sideMenu', {read: TemplateRef}) sideMenu: TemplateRef<any>;

}
