import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Atom, AtomOption } from "@ballet/interfaces";

@Component({
  selector: 'ballet-button',
  template: `
      <button [disabled]="isDisable" mat-button color="primary" (click)="click()">
          {{ option?.text }}
          <ng-content></ng-content>
      </button>
  `
})
export class BalletButtonComponent implements Atom {
  id: string;
  @Input() isDisable: false;
  @Input() option: AtomOption;
  @Input() options: AtomOption[];
  @Output() optionsChange = new EventEmitter<AtomOption>();

  click(): void {
    console.log('Button');
  }
}