import { Component, OnDestroy } from '@angular/core';
import { UserService } from '../../shared/service/rest/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ballet-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  message = 'Default';

  userSub: Subscription;

  constructor(private userService: UserService) {
    this.userSub = this.userService.getUsers().subscribe(response => {
      this.message = response.message;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
