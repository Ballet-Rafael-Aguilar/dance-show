import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonComponent } from './components/button/mat-button.component';
import { MatToolbarComponent } from './components/toolbar/mat-toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  declarations: [MatButtonComponent, MatToolbarComponent],
  exports: [MatButtonComponent, MatToolbarComponent]
})
export class CatalogModule {}
