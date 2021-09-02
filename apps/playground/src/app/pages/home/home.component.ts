import { Component, OnDestroy } from '@angular/core';
import { UserService } from '../../shared/service/rest/user.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'ballet-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  userSub: Subscription;
  message$: Observable<{message}>;

  constructor(private userService: UserService) {
    this.message$ = this.userService.getUsers();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
