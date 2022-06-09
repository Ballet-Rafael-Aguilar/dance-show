import { Component, Inject } from '@angular/core';
import { AppRegistration } from "@ballet/common/dashboard";
import * as uuid from 'uuid';
import { AVAILABLE_APPS } from "../../../tokens";
type PlacedApp = AppRegistration & { id: string };
type AvailableApps = { [appName: string]: AppRegistration };

@Component({
  selector: 'ballet-dashboard-container',
  styleUrls: ['./dashboard-container.component.scss'],
  template: `
      <button
              mat-list-item
              *ngFor="let appKey of availableApps | keyvalue"
              (click)="addApp(appKey.key)"
      >
          <mat-icon matListIcon>add</mat-icon>
          {{ appKey.key }}
      </button>

      <ng-container *ngFor="let app of placedApps">
          <ballet-app-instance
                  [appRegistration]="app"
                  [id]="app.id"
                  (removeApp)="removeApp(app.id)"
          >
          </ballet-app-instance>
      </ng-container>
      
      <mat-drawer-container class="example-container">
      <mat-drawer mode="side" opened>
          <mat-action-list>
              <button
                      mat-list-item
                      *ngFor="let appKey of availableApps | keyvalue"
                      (click)="addApp(appKey.key)"
              >
                  <mat-icon matListIcon>add</mat-icon>
                  {{ appKey.key }}
              </button>
          </mat-action-list>
      </mat-drawer>
      <mat-drawer-content>
          <div class="apps">
              <ng-container *ngFor="let app of placedApps; trackBy: trackByUuid">
                  <ballet-app-instance
                          [appRegistration]="app"
                          [id]="app.id"
                          (removeApp)="removeApp(app.id)"
                  >
                  </ballet-app-instance>
              </ng-container>
          </div>
      </mat-drawer-content>
  </mat-drawer-container>
  `,
})
export class DashboardContainerComponent {
  availableApps: AvailableApps = {};
  placedApps: PlacedApp[] = [];

  constructor(
    @Inject(AVAILABLE_APPS)
      availableApps: { [appName: string]: AppRegistration },
  ) {
    this.availableApps = availableApps;
  }

  trackByIdx(idx: number) {
    return idx;
  }

  trackByUuid(idx: number, item: PlacedApp) {
    return item.id;
  }

  addApp(appKey: string) {
    this.placedApps = [
      { ...this.availableApps[appKey], id: uuid.v4() },
      ...this.placedApps,
    ];
  }

  removeApp(id: string) {
    const indexToRemove = this.placedApps.findIndex(
      (potent) => potent.id === id
    );
    this.placedApps = [
      ...this.placedApps.slice(0, indexToRemove),
      ...this.placedApps.slice(indexToRemove + 1),
    ];
  }
}

