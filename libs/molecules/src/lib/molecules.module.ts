import { NgModule } from '@angular/core';
import { BalletToolbarComponent } from './toolbar/ballet-toolbar.component';
import { AtomsModule } from '@ballet/atoms';

@NgModule({
  imports: [AtomsModule],
  declarations: [BalletToolbarComponent],
  exports: [BalletToolbarComponent, AtomsModule]
})
export class MoleculesModule {}
