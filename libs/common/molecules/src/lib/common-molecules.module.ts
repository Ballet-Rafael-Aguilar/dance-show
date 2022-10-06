import { NgModule } from '@angular/core';
import { BalletToolbarComponent } from './toolbar/ballet-toolbar.component';
import { CommonAtomsModule } from '@ballet/common-atoms';
import { RouterModule } from '@angular/router';
import { NaiveComponent } from './naive/naive.component';
import { MoleculeDirective } from "./factory/molecule.directive";

@NgModule({
  imports: [CommonAtomsModule, RouterModule],
  declarations: [BalletToolbarComponent, NaiveComponent, MoleculeDirective],
  exports: [BalletToolbarComponent, CommonAtomsModule, MoleculeDirective],
})
export class CommonMoleculesModule {}
