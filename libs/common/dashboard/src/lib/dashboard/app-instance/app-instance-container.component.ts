import { Component, Input, NgModuleRef } from '@angular/core';
import { LoadableApp } from "./loadable-app";

@Component({
  selector: 'ballet-app-instance-container',
  template: `
      <ng-content select="angular-dream-app-header"></ng-content>
      <div class="app-body">
          <ng-container *renderApp="ngModuleRef"></ng-container>
      </div>
  `,
})
export class AppInstanceContainerComponent {
  @Input() ngModuleRef!: NgModuleRef<LoadableApp>;
}
