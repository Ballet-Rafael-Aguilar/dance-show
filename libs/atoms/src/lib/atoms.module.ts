import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalletButtonComponent } from './button/ballet-button.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@ballet/material';
import { BalletSelectComponent } from './select/ballet-select.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [BalletButtonComponent, BalletSelectComponent],
  exports: [
    BalletButtonComponent,
    BalletSelectComponent,
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
  ]
})
export class AtomsModule {}
