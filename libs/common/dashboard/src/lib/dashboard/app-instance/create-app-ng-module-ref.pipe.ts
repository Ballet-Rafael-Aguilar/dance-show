import { Injector, NgModuleRef, Pipe, PipeTransform } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoadableApp } from "./loadable-app";
import { AppRegistration } from "./app-registration";
import { AppLoader } from "./app-loader.service";

@Pipe({
  name: 'createAppNgModuleRef',
})
export class CreateAppNgModuleRefPipe implements PipeTransform {
  constructor(private readonly appLoader: AppLoader) {}
  transform(
    appRegistration: AppRegistration,
    parentInjector: Injector
  ): Observable<NgModuleRef<LoadableApp>> {
    return this.appLoader
      .createNgModuleRef(appRegistration, parentInjector)
      .pipe(
        catchError((error) => {
          console.error('Error when creating app NgModule: ', error);
          return throwError(error);
        })
      );
  }
}
