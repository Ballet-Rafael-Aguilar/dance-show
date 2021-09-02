import { NgModule } from '@angular/core';
import { BalletToolbarComponent } from './toolbar/ballet-toolbar.component';
import { AtomsModule } from '@ballet/atoms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [AtomsModule, RouterModule],
  declarations: [BalletToolbarComponent],
  exports: [BalletToolbarComponent, AtomsModule]
})
export class MoleculesModule {}
