import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ThemingService } from "@ballet/shared/theme";

@Component({
  selector: 'ballet-container',
  template: `
      <div [ngClass]="(selectedTheme$ | async) ?? ''">
          <ballet-layout-base></ballet-layout-base>
      </div>`,
})
export class ContainerComponent implements OnInit {
  selectedTheme$!: Observable<string>;

  constructor(private themingService: ThemingService) {}

  ngOnInit(): void {
    this.selectedTheme$ = this.themingService.selected;
  }
}
