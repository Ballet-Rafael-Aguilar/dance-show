import { Component, Input } from '@angular/core';
import { Atom } from "@ballet/interfaces";
import { AtomType } from "../../../../../atoms/src/lib/factory/atom.directive";
import { Molecule } from "../../../../../../interface/src/lib/interfaces/molecules.interface";
import { MoleculeType } from "../../../../../molecules/src/lib/factory/molecule.directive";

@Component({
  selector: 'ballet-layout-base',
  template: `
      <ballet-toolbar>
          <ng-template #menu #sideMenu>
              <ng-container *ngFor="let component of components">
                  <ng-container balletAtom [type]="component.type" [config]="component.config">
                  </ng-container>
              </ng-container>
          </ng-template>
          <ng-template #content>
              <ng-container *ngFor="let item of contents">
                  <ng-container balletMolecule [type]="item.type" [config]="item.config">
                  </ng-container>
              </ng-container>
              <router-outlet></router-outlet>
          </ng-template>
      </ballet-toolbar>
  `,
})
export class LayoutBaseComponent {
  @Input() id!: string;
  @Input() components!: { config: Atom, type: AtomType }[];
  @Input() contents!: { config: Molecule, type: MoleculeType }[];

  title = 'playground';
  name = 'User';
}
