import { NgModule } from '@angular/core';
import { ContainerComponent } from './container/container.component';
import { CommonCatalogModule } from "@ballet/common-catalog";

@NgModule({
  exports: [CommonCatalogModule, ContainerComponent],
  imports: [CommonCatalogModule],
  declarations: [ContainerComponent],
})
export class CommonDashboardModule {}
