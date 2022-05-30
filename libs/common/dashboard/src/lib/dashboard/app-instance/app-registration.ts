import { Type } from '@angular/core';
import { LoadableApp } from "./loadable-app";

export interface AppRegistration {
  name: string;
  bundle: () => Promise<Type<LoadableApp>>;
  defaultHeightPx?: number;
}
