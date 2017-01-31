import { AppSettings } from '../app.settings';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Lecture } from '../model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class LectureService {
  private url: string;
  constructor(private http: Http, settings: AppSettings) {
    this.url = settings.apiUrl + '/api/lectures';
  }

  getAll(): Observable<Lecture[]> {
    return this.http.get(this.url)
      .map(res => <Lecture[]>res.json());
  }
}
