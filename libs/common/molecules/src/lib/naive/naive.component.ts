import { Component, Input } from '@angular/core';

@Component({
  selector: 'ballet-naive',
  template: `
      Naive Component
  `
})
export class NaiveComponent {
  @Input() id!: string;
}
