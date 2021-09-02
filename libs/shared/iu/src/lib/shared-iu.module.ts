import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogModule } from '@ballet/catalog';

@NgModule({
  imports: [CommonModule],
  exports: [CatalogModule]
})
export class SharedIuModule {}
