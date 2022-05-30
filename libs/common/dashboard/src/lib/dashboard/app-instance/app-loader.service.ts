import { Compiler, Injectable, Injector, } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppRegistration } from './app-registration';
import { EffectsRunner } from '@ngrx/effects';
import { AppPlatformLocation } from "./app-platform-location.service";
import { from } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AppLoader {
  constructor(private compiler: Compiler) {}

  createParentInjector(injector: Injector) {
    return Injector.create({
      providers: [
        {
          provide: Router,
          useValue: null,
        },
        {
          provide: Store,
          useValue: null,
        },
        {
          provide: EffectsRunner,
          useValue: null,
        },
        {
          provide: PlatformLocation,
          useClass: AppPlatformLocation,
          deps: [],
        },
      ],
      parent: injector,
    });
  }

  createNgModuleRef(registration: AppRegistration, injector: Injector) {
    return from(
      registration
        .bundle()
        .then((loadableApp) => this.compiler.compileModuleAsync(loadableApp))
        .then((ngModuleFactory) =>
          ngModuleFactory.create(this.createParentInjector(injector))
        )
    );
  }
}
