import { ModuleWithProviders, NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DashboardContainerComponent } from './dashboard/dashboard-container/dashboard-container.component';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./dashboard/reducers";
import { AppInstanceComponent } from './dashboard/app-instance/app-instance.component';
import { CreateAppNgModuleRefPipe } from './dashboard/app-instance/create-app-ng-module-ref.pipe';
import { AppInstanceHeaderComponent } from './dashboard/app-instance/app-instance-header.component';
import { AppInstanceContainerComponent } from './dashboard/app-instance/app-instance-container.component';
import { RenderAppDirective } from "./dashboard/app-instance/render-app.directive";
import { LoadableApp } from "./dashboard/app-instance/loadable-app";
import { AVAILABLE_APPS } from "../tokens";
import { AvailableApps } from "./dashboard/app-instance/available-apps";
import { ReactiveComponentModule } from "@ngrx/component";
import { CommonCatalogModule } from "@ballet/common-catalog";

const routes: Route[] = [
  {
    path: '',
    component: DashboardContainerComponent,
  },
];

@NgModule({
  declarations: [
    DashboardContainerComponent,
    AppInstanceComponent,
    CreateAppNgModuleRefPipe,
    AppInstanceHeaderComponent,
    AppInstanceContainerComponent,
    RenderAppDirective
  ],
  exports: [
    CommonCatalogModule,
    RouterModule,
    RenderAppDirective
  ],
  imports: [
    CommonCatalogModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    // StoreRouterConnectingModule.forRoot({
    //   routerState: RouterState.Minimal,
    //   serializer: CustomSerializer,
    // }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    RouterModule.forChild(routes),
    ReactiveComponentModule,
  ],
})
export class CommonDashboardModule implements LoadableApp {
  EntryComponent = DashboardContainerComponent;

  static forRoot(
    productionBuild: boolean
  ): ModuleWithProviders<CommonDashboardModule> {
    return {
      ngModule: CommonDashboardModule,
      providers: [
        {
          provide: AVAILABLE_APPS,
          useFactory: () => {
            return AvailableApps(productionBuild).reduce(
              (acc, appRegistration) => ({
                ...acc,
                [appRegistration.name]: appRegistration,
              }),
              {}
            );
          },
        },
      ],
    };
  }
}