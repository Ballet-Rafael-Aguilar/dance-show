import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Atom, AtomOption } from '@ballet/interfaces';
import { MatSelectChange } from "@angular/material/select";

@Component({
  selector: 'ballet-select',
  template: `
      <mat-form-field [id]="id">
          <mat-label>Choose an option</mat-label>
          <mat-select [disabled]="isDisable" (selectionChange)="click($event)">
              <mat-option *ngFor="let option of options.values" [value]="option.value">{{
                  option.text
                  }}</mat-option>
          </mat-select>
      </mat-form-field>
  `,
})
export class BalletSelectComponent implements Atom {
  @Input() id!: string;
  @Input() isDisable = false;
  @Input() options: AtomOption = {} as AtomOption;
  @Output() optionsChange = new EventEmitter<AtomOption>();

  click($event: MatSelectChange): void {
    this.optionsChange.emit($event.value);
  }
}
