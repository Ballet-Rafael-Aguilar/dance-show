import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemingService } from "./theming.service";

@NgModule({
  imports: [CommonModule],
  providers: [ThemingService]
})
export class SharedThemeModule {}
