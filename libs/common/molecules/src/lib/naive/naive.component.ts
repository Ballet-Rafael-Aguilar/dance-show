import { Component, Input } from '@angular/core';
import { AbstractAtomDirective } from "../../../../atoms/src/lib/atom/atom.directive";

@Component({
  selector: 'ballet-naive',
  template: `
      Naive Component
  `
})
export class NaiveComponent extends AbstractAtomDirective {
  @Input() id!: string;
}
