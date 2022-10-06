import { Directive, Input, OnChanges, OnInit, SimpleChanges, ViewContainerRef, } from '@angular/core';
import { BalletToolbarComponent } from "../toolbar/ballet-toolbar.component";
import { NaiveComponent } from "../naive/naive.component";
import { Molecule } from "../../../../../interface/src/lib/interfaces/molecules.interface";
import { ATOM, ATOMS } from "../../../../atoms/src/lib/factory/atom-factory.directive";
import { BehaviorSubject } from "rxjs";
import { Atom } from "@ballet/interfaces";

@Directive({
  selector: '[balletMolecule]',
})
export class MoleculeDirective implements OnInit, OnChanges {
  @Input() balletMolecule!: MOLECULES;
  @Input() config!: Molecule | Atom;

  configSubject = new BehaviorSubject<Molecule | Atom>({id: 'factory-molecule-default'});
  config$ = this.configSubject.asObservable();

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
    const component = this.viewContainerRef.createComponent(MOLECULE[this.balletMolecule]);
    component.instance.config$ = this.config$;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['config']) {
      this.configSubject.next(changes['config'].currentValue);
    }
  }
}

const MOLECULE = {
  'naive': NaiveComponent,
  'toolbar': BalletToolbarComponent,
  ...ATOM
}

export type MOLECULES = keyof typeof MOLECULE | ATOMS;
