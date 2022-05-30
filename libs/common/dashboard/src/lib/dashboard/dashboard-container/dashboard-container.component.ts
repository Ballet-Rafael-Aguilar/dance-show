import { Component, Inject } from '@angular/core';
import { AppRegistration } from "../app-instance/app-registration";
import * as uuid from 'uuid';
import { AVAILABLE_APPS } from "../../../tokens";
import { State, Store } from "@ngrx/store";
type PlacedApp = AppRegistration & { id: string };
type AvailableApps = { [appName: string]: AppRegistration };

@Component({
  selector: 'ballet-dashboard-container',
  template: `
      <mat-drawer-container class="example-container">
      <mat-drawer mode="side" opened>
          <mat-action-list>
              <button
                      mat-list-item
                      *ngFor="let appKey of availableApps | keyvalue; trackBy: trackByIdx"
                      (click)="addApp(appKey.key)"
              >
                  <mat-icon matListIcon>add</mat-icon>
                  {{ appKey.key }}
              </button>
          </mat-action-list>
      </mat-drawer>
      <mat-drawer-content>
          <div class="apps">
              <ng-template *ngFor="let app of placedApps; trackBy: trackByUuid">
                  <ballet-app-instance
                          [appRegistration]="app"
                          [id]="app.id"
                          (removeApp)="removeApp(app.id)"
                  >
                  </ballet-app-instance>
              </ng-template>
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
    public store$: Store<State<any>>
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

