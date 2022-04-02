import { NgModule } from '@angular/core';
import { CommonMoleculesModule } from '@ballet/common-molecules';
import { LayoutBaseComponent } from './layout/layout-base/layout-base.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonMoleculesModule, RouterModule],
  declarations: [LayoutBaseComponent],
  exports: [CommonMoleculesModule, LayoutBaseComponent, RouterModule],
})
export class CommonCatalogModule {}
