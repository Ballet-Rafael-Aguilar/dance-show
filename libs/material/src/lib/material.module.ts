import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from "@angular/material/select";
import { MatListModule } from "@angular/material/list";

@NgModule({
  exports: [MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule, MatSelectModule, MatListModule]
})
export class MaterialModule {
}
