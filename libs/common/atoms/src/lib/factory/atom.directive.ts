import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { Atom } from '@ballet/interfaces';
import { BalletSelectComponent } from '../select/ballet-select.component';
import { BalletButtonComponent } from '../button/ballet-button.component';

@Directive({
  selector: '[balletAtom]',
})
export class AtomDirective implements OnInit {
  @Input() type: AtomType = {} as AtomType;
  @Input() config: Atom = {} as Atom;

  constructor(
    private element: ElementRef,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    const componentFactory = this.create(this.type);
    const component = this.viewContainerRef.createComponent(componentFactory);

    component.instance.id = this.config.id ?? 'factory-atom-' + this.type;
    component.instance.isDisable = this.config.isDisable ?? false;
    component.instance.optionsChange = this.config.optionsChange ?? null;
    component.instance.options = this.config.options ?? null;
    if (this.config.click) {
      component.instance.click = this.config.click;
    }
  }

  create = (type: AtomType) => {
    const atoms = {
      'select': BalletSelectComponent,
      'button': BalletButtonComponent
    }

    return atoms[type];
  };
}

export type AtomType = 'select' | 'button';
