import { Component, Input } from '@angular/core';
import { Atom } from "@ballet/interfaces";
import { Molecule } from "../../../../../../interface/src/lib/interfaces/molecules.interface";
import { ATOMS } from "../../../../../atoms/src/lib/factory/atom-factory.directive";
import { MOLECULES } from "../../../../../molecules/src/lib/factory/molecule.directive";

@Component({
  selector: 'ballet-layout-base',
  template: `
      <ballet-toolbar>
          <ng-template #menu #sideMenu>
              <ng-container *ngFor="let component of components">
                  <ng-container [balletAtom]="component.type" [config]="component.config">
                  </ng-container>
              </ng-container>
          </ng-template>
          <ng-template #content>
              <ng-container *ngFor="let item of contents">
                  <ng-container [balletMolecule]="item.type" [config]="item.config">
                  </ng-container>
              </ng-container>
              <router-outlet></router-outlet>
          </ng-template>
      </ballet-toolbar>
  `,
})
export class LayoutBaseComponent {
  @Input() id!: string;
  @Input() components!: { config: Atom, type: ATOMS }[];
  @Input() contents!: { config: Molecule, type: MOLECULES }[];

  title = 'playground';
  name = 'User';
}
