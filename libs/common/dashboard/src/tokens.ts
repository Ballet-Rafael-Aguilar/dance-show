import { InjectionToken } from '@angular/core';
import { AppRegistration } from "./lib/dashboard/app-instance/app-registration";

export const AVAILABLE_APPS = new InjectionToken<{
  [appName: string]: AppRegistration;
}>('Available Apps');
