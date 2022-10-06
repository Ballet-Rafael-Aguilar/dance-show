import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { BalletToolbarComponent } from "../toolbar/ballet-toolbar.component";
import { NaiveComponent } from "../naive/naive.component";
import { Molecule } from "../../../../../interface/src/lib/interfaces/molecules.interface";

@Directive({
  selector: '[balletMolecule]',
})
export class MoleculeDirective implements OnInit {
  @Input() type!: MoleculeType;
  @Input() config!: Molecule;

  constructor(
    private element: ElementRef,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    const componentFactory = this.create(this.type);
    const component = this.viewContainerRef.createComponent(componentFactory);

    component.instance.id = this.config.id ?? 'factory-molecule-' + this.type;
  }

  create = (type: MoleculeType) => {
    const molecules = {
      'naive': NaiveComponent,
      'toolbar': BalletToolbarComponent
    }

    return molecules[type];
  };
}

export type MoleculeType = 'naive' | 'toolbar';
