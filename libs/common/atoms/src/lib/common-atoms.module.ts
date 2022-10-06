import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalletButtonComponent } from './button/ballet-button.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@ballet/material';
import { BalletSelectComponent } from './select/ballet-select.component';
import { AtomFactoryDirective } from './factory/atom-factory.directive';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [
    BalletButtonComponent,
    BalletSelectComponent,
    AtomFactoryDirective
  ],
  exports: [
    BalletButtonComponent,
    BalletSelectComponent,
    AtomFactoryDirective,
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
  ],
})
export class CommonAtomsModule {}
