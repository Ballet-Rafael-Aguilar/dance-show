import { Directive, Input, OnChanges, OnInit, SimpleChanges, ViewContainerRef, } from '@angular/core';
import { Atom } from '@ballet/interfaces';
import { BalletSelectComponent } from '../select/ballet-select.component';
import { BalletButtonComponent } from '../button/ballet-button.component';
import { BehaviorSubject, Observable } from "rxjs";

@Directive({
  selector: '[balletAtom]',
})
export class AtomFactoryDirective implements OnInit, OnChanges {
  @Input() balletAtom!: ATOMS;
  @Input() config: Atom = {id: 'factory-atom-'};

  configSubject: BehaviorSubject<Atom> = new BehaviorSubject<Atom>({id: 'factory-atom-'});
  config$: Observable<Atom> = this.configSubject.asObservable();

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
    const component = this.viewContainerRef.createComponent(ATOM[this.balletAtom]);
    component.instance.config$ = this.config$;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['config']) {
      this.configSubject.next(changes['config'].currentValue);
    }
  }
}

const ATOM = {
  'select': BalletSelectComponent,
  'button': BalletButtonComponent
};

export type ATOMS = keyof typeof ATOM;
