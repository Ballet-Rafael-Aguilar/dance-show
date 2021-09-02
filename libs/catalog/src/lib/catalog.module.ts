import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoleculesModule } from '@ballet/molecules';


@NgModule({
  imports: [
    MoleculesModule,
    BrowserAnimationsModule,
  ],
  exports: [MoleculesModule]
})
export class CatalogModule {}
