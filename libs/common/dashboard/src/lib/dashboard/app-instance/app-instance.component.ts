import { Component, EventEmitter, forwardRef, Injector, Input, Output } from '@angular/core';
import { AppRegistration } from "./app-registration";

export abstract class AppInstance {
  removeApp?: EventEmitter<void>;
}

@Component({
  selector: 'ballet-app-instance',
  template: `
      <ballet-app-instance-container
              *ngrxLet="appRegistration | createAppNgModuleRef: injector; let ngModuleRef"
              [ngModuleRef]="ngModuleRef"
              [style.min-height.px]="appRegistration.defaultHeightPx"
      >
          <ballet-app-intance-header
                  (removeApp)="removeApp.next()"
                  [appName]="appRegistration.name"
          >
          </ballet-app-intance-header>
      </ballet-app-instance-container>
  `,
  viewProviders: [
    {
      provide: AppInstance,
      useExisting: forwardRef(() => AppInstanceComponent),
    },
  ],
})
export class AppInstanceComponent {
  @Input() appRegistration: AppRegistration = {} as AppRegistration;
  @Input() id!: string;
  @Output() removeApp = new EventEmitter<void>();

  constructor(readonly injector: Injector) {
  }
}
