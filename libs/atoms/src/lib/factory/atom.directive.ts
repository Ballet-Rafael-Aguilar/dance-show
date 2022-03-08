import {
  ComponentFactory,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewContainerRef
} from '@angular/core';
import { AtomType, products } from "./atom";
import { Atom, AtomOption } from "@ballet/interfaces";

@Directive({
  selector: '[balletAtom]'
})
export class AtomDirective implements OnInit {
  @Input() atom: AtomType;
  @Input() isDisable: false;
  @Input() options: AtomOption | AtomOption[];
  @Output() optionsChange = new EventEmitter<AtomOption>();

  constructor(private element: ElementRef,
              private viewContainerRef: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit() {
    const componentFactory: ComponentFactory<Atom> =
      this.componentFactoryResolver.resolveComponentFactory(products[this.atom]);
    const component = this.viewContainerRef.createComponent(componentFactory);

    component.instance.isDisable = this.isDisable;
    component.instance.optionsChange = this.optionsChange;
    if (Array.isArray(this.options)){
      component.instance.options = this.options;
    } else {
      component.instance.option = this.options;
      if( this.options?.click) {
        component.instance.click = this.options.click;
      }
    }
  }
}
