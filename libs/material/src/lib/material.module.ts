import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonComponent } from './components/button/mat-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MatButtonComponent],
  exports: [MatButtonComponent],
})
export class MaterialModule {}
