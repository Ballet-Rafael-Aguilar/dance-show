import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { SharedIuModule } from "@ballet/shared/iu";

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    SharedIuModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
