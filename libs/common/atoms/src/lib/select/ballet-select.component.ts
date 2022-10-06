import { Component } from '@angular/core';
import { AbstractAtomDirective } from "../atom/atom.directive";

@Component({
  selector: 'ballet-select',
  template: `
      <ng-container *ngIf="config$ | async as config">
          <mat-form-field [id]="config.id">
              <mat-label>Choose an option</mat-label>
              <mat-select [disabled]="config.isDisable" (selectionChange)="config?.click($event)">
                  <mat-option *ngFor="let option of config.options?.values" [value]="option.value">
                      {{option.text}}
                  </mat-option>
              </mat-select>
          </mat-form-field>
      </ng-container>
  `,
})
export class BalletSelectComponent extends AbstractAtomDirective {
}
