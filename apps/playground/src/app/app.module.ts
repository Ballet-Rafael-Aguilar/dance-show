import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { SharedIuModule } from '@ballet/shared/iu';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { interceptors } from '@ballet/shared/iu';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    SharedIuModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [interceptors],
  bootstrap: [AppComponent],
})
export class AppModule {}
