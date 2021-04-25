import { Component, OnDestroy } from '@angular/core';
import { UserService } from './shared/service/rest/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ballet-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'playground';
  name = 'User';
  message: string;
  userSub: Subscription;

  constructor(private userService: UserService) {
    console.log('Doing something more');
    console.log('Doing something else');
    this.userService.getUsers().subscribe(response => {
      this.message = response.message;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
