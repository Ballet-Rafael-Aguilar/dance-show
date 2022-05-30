import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
//import { CommonDashboardModule } from "@ballet/common/dashboard";
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot([], {}),
 //   CommonDashboardModule.forRoot(environment.production),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
