import { NgModule } from '@angular/core';
import { CommonCatalogModule } from '@ballet/common-catalog';
import { CommonRestModule } from '@ballet/common-rest';

@NgModule({
  imports: [CommonCatalogModule, CommonRestModule],
  exports: [CommonCatalogModule, CommonRestModule],
})
export class SharedIuModule {}
