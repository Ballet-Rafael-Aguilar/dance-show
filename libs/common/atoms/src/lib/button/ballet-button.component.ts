import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Atom, AtomOption } from '@ballet/interfaces';

@Component({
  selector: 'ballet-button',
  template: `
    <button
      [id]="id"
      [disabled]="isDisable"
      mat-button
      color="primary"
      (click)="click()"
    >
      {{ options.value?.text }}
      <ng-content></ng-content>
    </button>
  `,
})
export class BalletButtonComponent implements Atom {
  @Input() id!: string;
  @Input() isDisable = false;
  @Input() options: AtomOption = {} as AtomOption;
  @Output() optionsChange = new EventEmitter<AtomOption>();

  click(): void {
    console.log('Button');
  }
}
