import {
  ComponentFactory,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  Input,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import { Atom } from "@ballet/interfaces";
import { BalletSelectComponent } from "../select/ballet-select.component";
import { BalletButtonComponent } from "../button/ballet-button.component";

@Directive({
  selector: '[balletAtom]'
})
export class AtomDirective implements OnInit {
  @Input() type: AtomType;
  @Input() config: Atom;

  constructor(private element: ElementRef,
              private viewContainerRef: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit() {
    const componentFactory: ComponentFactory<Atom> = this.create(this.type, this.componentFactoryResolver);
    const component = this.viewContainerRef.createComponent(componentFactory);

    component.instance.id = this.config.id ?? 'factory-atom-' + this.type;
    component.instance.isDisable = this.config.isDisable ?? false;
    component.instance.optionsChange = this.config.optionsChange ?? null;
    component.instance.options = this.config.options ?? null;
    if (this.config.click) {
      component.instance.click = this.config.click;
    }

  }

  getAtom(type: AtomType, factory: ComponentFactoryResolver) {
    if (type === 'select') {
      return factory.resolveComponentFactory(BalletSelectComponent);
    } else {
      return BalletButtonComponent;
    }

  }

  create = (type: AtomType, factory: ComponentFactoryResolver) => {
    switch (type) {
      case 'select':
        return factory.resolveComponentFactory(BalletSelectComponent);
      default:
        return factory.resolveComponentFactory(BalletButtonComponent);
    }
  };
}

export type AtomType = 'select' | 'button';
