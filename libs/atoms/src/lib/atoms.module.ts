import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalletButtonComponent } from './button/ballet-button.component';
import { InterfaceModule } from '@ballet/interfaces';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@ballet/material';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [BalletButtonComponent],
  exports: [
    BalletButtonComponent,
    CommonModule,
    InterfaceModule,
    FlexLayoutModule,
    MaterialModule,
  ]
})
export class AtomsModule {}
