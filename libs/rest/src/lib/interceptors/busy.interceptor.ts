import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusyService } from '../services/busy.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class BusyInterceptor implements HttpInterceptor {
  constructor(private busyService: BusyService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const msg = req.method === 'GET' ? 'Loading ...' : 'Saving ...';
    console.log(`Req ⚙️ Busy Spinner`, [
      'Incrementing the busy spinner',
    ]);
    this.busyService.increment(msg);

    return next.handle(req).pipe(
      finalize(() => {
        this.busyService.decrement();
        console.log(`Res ⚙️ Busy Spinner`, [
          'Decrementing the busy spinner',
        ]);
      }),
    );
  }
}
