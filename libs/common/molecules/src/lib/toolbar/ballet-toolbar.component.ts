import { Component, ContentChild, TemplateRef } from '@angular/core';
import { CommonComponents } from '@ballet/interfaces';

@Component({
  selector: 'ballet-toolbar',
  template: `
    <mat-toolbar>
      <button fxHide.gt-sm mat-icon-button (click)="sidenav.toggle()">
        <mat-icon>menu</mat-icon>
      </button>
      <div fxHide.lt-md>
        <ng-content *ngTemplateOutlet="menu"></ng-content>
      </div>
    </mat-toolbar>

    <mat-sidenav-container fxFlexFill class="example-container">
      <mat-sidenav
        #sidenav
        fxLayout="column"
        mode="over"
        opened="false"
        fxHide.gt-sm="true"
      >
        <div fxLayout="column">
          <ng-content *ngTemplateOutlet="sideMenu"></ng-content>
        </div>
      </mat-sidenav>
      <mat-sidenav-content fxFlexFill>
        <ng-content *ngTemplateOutlet="content"></ng-content>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
export class BalletToolbarComponent {
  @ContentChild('menu', { read: TemplateRef })
  menu!: TemplateRef<CommonComponents>;
  @ContentChild('sideMenu', { read: TemplateRef })
  sideMenu!: TemplateRef<CommonComponents>;
  @ContentChild('content', { read: TemplateRef })
  content!: TemplateRef<CommonComponents>;
}
