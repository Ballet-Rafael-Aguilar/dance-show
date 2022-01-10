import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectInterface } from '@ballet/interfaces'

@Component({
  selector: 'ballet-select',
  template: `
      <mat-form-field>
          <mat-label>Choose an option</mat-label>
          <mat-select [disabled]="isDisable" (selectionChange)="onSelectChange($event)">
              <mat-option *ngFor="let option of options" [value]="option.value">{{option.text}}</mat-option>
          </mat-select>
      </mat-form-field>
      `
})
export class BalletSelectComponent {
  @Input() isDisable: false;
  @Input() options: SelectInterface[];
  @Output() optionsChange = new EventEmitter<SelectInterface>();

  onSelectChange($event) {
    this.optionsChange.emit($event);
  }
}
