import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalletButtonComponent } from './components/button/ballet-button.component';
import { BalletToolbarComponent } from './components/toolbar/ballet-toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { InterfaceModule } from '@ballet/interfaces';


@NgModule({
  imports: [
    CommonModule,
    InterfaceModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  declarations: [BalletButtonComponent, BalletToolbarComponent],
  exports: [BalletButtonComponent, BalletToolbarComponent]
})
export class CatalogModule {}
