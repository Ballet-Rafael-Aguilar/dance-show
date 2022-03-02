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
import { SelectInterface } from "@ballet/interfaces";
import { Atom, AtomType, products } from "./atom.factory";

@Directive({
  selector: '[balletAtom]'
})
export class AtomDirective implements OnInit {
  @Input() atom: AtomType;
  @Input() isDisable: false;
  @Input() options: SelectInterface[];
  @Output() optionsChange = new EventEmitter<SelectInterface>();

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
    component.instance.options = this.options;
    component.instance.optionsChange = this.optionsChange;
  }
}
