import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulmaButtonComponent } from './components/button/bulma-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BulmaButtonComponent],
  exports: [BulmaButtonComponent],
})
export class BulmaModule {}
