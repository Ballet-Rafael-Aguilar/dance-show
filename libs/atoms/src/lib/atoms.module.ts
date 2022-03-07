import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalletButtonComponent } from './button/ballet-button.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@ballet/material';
import { BalletSelectComponent } from './select/ballet-select.component';
import { AtomDirective } from './factory/atom.directive';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [BalletButtonComponent, BalletSelectComponent, AtomDirective],
  exports: [
    BalletButtonComponent,
    BalletSelectComponent,
    AtomDirective,
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class AtomsModule {}
