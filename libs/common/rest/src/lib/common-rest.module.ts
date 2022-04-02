import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BusyService } from './services/busy.service';
import { LoadingDirective } from './directives/loading.directive';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [BusyService],
  declarations: [SpinnerComponent, LoadingDirective],
  exports: [SpinnerComponent, LoadingDirective],
})
export class CommonRestModule {}
