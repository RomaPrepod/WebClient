import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Lecture } from '../model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';


@Injectable()
export class LectureService {
  private url = '/api/lectures';
  constructor(private http: Http) { }

  getAll(): Observable<Lecture> {
    return this.http.get(this.url)
      .mergeMap(res => <Lecture[]>res.json());
  }
}
