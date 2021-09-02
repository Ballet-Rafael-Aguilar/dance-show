import { NgModule } from '@angular/core';
import { CatalogModule } from '@ballet/catalog';

@NgModule({
  imports: [CatalogModule],
  exports: [CatalogModule]
})
export class SharedIuModule {}
