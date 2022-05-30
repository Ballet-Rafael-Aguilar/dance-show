import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { environment } from '../environments/environment';
import { LoadableApp } from "@ballet/common/dashboard";
//import { CommonDashboardModule, LoadableApp } from "@ballet/common/dashboard";

@NgModule({
  imports: [
   // CommonDashboardModule.forRoot(environment.production),
    RouterModule.forRoot([]),
    MatToolbarModule,
  ],
  declarations: [AppComponent],
})
export class MfeAppModule implements LoadableApp {
  EntryComponent = AppComponent;
}
