import { Component } from '@angular/core';
import { AbstractAtomDirective } from "../atom/atom.directive";

@Component({
  selector: 'ballet-button',
  template: `
      <ng-container *ngIf="config$ | async as config">
          <button [id]="config.id" [disabled]="config.isDisable"
                  mat-button color="primary"
                  (click)="config?.click()">
              {{ config.options?.value?.text }}
              <ng-content></ng-content>
          </button>
      </ng-container>
  `,
})
export class BalletButtonComponent extends AbstractAtomDirective {
}
