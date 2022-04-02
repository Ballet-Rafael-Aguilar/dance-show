import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedIuModule } from '@ballet/shared/iu';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedIuModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
