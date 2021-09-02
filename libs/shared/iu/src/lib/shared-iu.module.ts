import { NgModule } from '@angular/core';
import { CatalogModule } from '@ballet/catalog';
import { RestModule } from '@ballet/rest';

@NgModule({
  imports: [CatalogModule, RestModule],
  exports: [CatalogModule, RestModule]
})
export class SharedIuModule {}
