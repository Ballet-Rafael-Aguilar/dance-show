import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemingService } from '../../../../libs/shared/theme/src/lib/theming.service';

@Component({
  selector: 'ballet-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedTheme$: Observable<string>;

  constructor(private themingService: ThemingService) {}

  ngOnInit(): void {
    this.selectedTheme$ = this.themingService.selected;
  }
}
