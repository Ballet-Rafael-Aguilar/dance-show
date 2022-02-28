import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectInterface } from '@ballet/interfaces'
import { Atom } from "../factory/atom.factory";

@Component({
  selector: 'ballet-select',
  template: `
      <mat-form-field>
          <mat-label>Choose an option</mat-label>
          <mat-select [disabled]="isDisable" (selectionChange)="click($event)">
              <mat-option *ngFor="let option of options" [value]="option.value">{{option.text}}</mat-option>
          </mat-select>
      </mat-form-field>
  `
})
export class BalletSelectComponent implements Atom {
  @Input() isDisable: false;
  @Input() options: SelectInterface[];
  @Output() optionsChange = new EventEmitter<SelectInterface>();

  id: string;

  click($event): void {
    console.log("Select")
    this.optionsChange.emit($event);
  }
}
