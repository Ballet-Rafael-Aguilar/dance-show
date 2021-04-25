import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from './service/rest/user.service';

@NgModule({
  imports: [
    RouterModule
  ],
  providers: [
    UserService
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class SharedModule {
}
