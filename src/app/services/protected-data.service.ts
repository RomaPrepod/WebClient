import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/**
 * Sample service for protected data reading
 */
@Injectable()
export class ProtectedDataService {
  constructor(private http: AuthHttp) { }
  getProtectedData(): Observable<string> {
    return this.http.get('api/protected')
      .map(res => res.text());
  }
}
