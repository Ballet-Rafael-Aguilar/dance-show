import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ballet-app-intance-header',
  template: `
      <div class="app-name">{{ appName }}</div>
      <button
              class="remove-app"
              mat-icon-button
              color="primary"
              (click)="removeApp.emit()">
          <mat-icon>close</mat-icon>
      </button>
  `,
})
export class AppInstanceHeaderComponent {
  @Input() appName!: string;
  @Output() removeApp = new EventEmitter<void>();
}
