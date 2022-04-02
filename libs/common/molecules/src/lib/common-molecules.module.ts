import { NgModule } from '@angular/core';
import { BalletToolbarComponent } from './toolbar/ballet-toolbar.component';
import { CommonAtomsModule } from '@ballet/common-atoms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonAtomsModule, RouterModule],
  declarations: [BalletToolbarComponent],
  exports: [BalletToolbarComponent, CommonAtomsModule],
})
export class CommonMoleculesModule {}
