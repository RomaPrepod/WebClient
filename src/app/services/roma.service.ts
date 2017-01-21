import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RomaService {
  private url = '/api/roma';
  constructor(private http: Http) { }

  getRoma(): Observable<Roma> {
    return this.http.get(this.url)
      .map(response => <Roma>response.json());
  }
}

export interface Roma {
  name: string;
  occupation: string;
}
