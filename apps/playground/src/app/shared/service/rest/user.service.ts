import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  private url = `${environment.userApi}`;

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<{ message }> {
    return this.http.get<{ message }>(this.url)
      .pipe(
        map(response => response ? response : null),
        catchError(error => {console.log(error); throw(error);}),
      );
  }
}
