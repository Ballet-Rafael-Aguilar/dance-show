import { NgModule } from '@angular/core';
import { MoleculesModule } from '@ballet/molecules';
import { LayoutBaseComponent } from './layout/layout-base/layout-base.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    MoleculesModule,
    RouterModule
  ],
  declarations: [LayoutBaseComponent],
  exports: [MoleculesModule, LayoutBaseComponent, RouterModule]
})
export class CatalogModule {}
