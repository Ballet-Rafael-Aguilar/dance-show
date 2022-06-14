import { NgModule } from '@angular/core';
import { CommonRestModule } from '@ballet/common-rest';
import { CommonDashboardModule } from "@ballet/common/dashboard";

@NgModule({
  imports: [CommonDashboardModule, CommonRestModule],
  exports: [CommonDashboardModule, CommonRestModule],
})
export class SharedIuModule {}
