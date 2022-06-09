import { loadRemoteModule } from '@angular-architects/module-federation';
import { AppRegistration } from "./app-registration";

export const AvailableApps = (isProduction = false): AppRegistration[] => [
  {
    name: 'Dashboard',
    // yarn start mfe-dashboard
    bundle: () =>
      loadRemoteModule({
        remoteName: 'mfe_dashboard',
        exposedModule: './Module',
        remoteEntry: isProduction
          ? '/remoteEntry.js'
          : 'http://localhost:4004',
      }).then((m) => m.MfeAppModule),
    defaultHeightPx: 750,
  },
];
