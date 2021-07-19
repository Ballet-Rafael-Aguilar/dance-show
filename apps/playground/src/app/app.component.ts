import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './shared/service/rest/user.service';
import { Subscription, Observable } from 'rxjs';
import { ThemingService } from '../../../../libs/shared/theme/src/lib/theming.service';

@Component({
  selector: 'ballet-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'playground';
  name = 'User';
  message: string;
  userSub: Subscription;
  selectedTheme$: Observable<string>;

  constructor(private userService: UserService, private themingService: ThemingService) {
    this.userService.getUsers().subscribe(response => {
      this.message = response.message;
    });
  }

  ngOnInit(): void {
    this.selectedTheme$ = this.themingService.selected;
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
