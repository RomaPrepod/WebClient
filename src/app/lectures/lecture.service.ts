import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';
import { Lecture } from './lecture';

@Injectable()
export class LectureService {
  constructor(private af: AngularFire) {
  }

  getAll(): Observable<Lecture[]> {
    return this.af.database.list('/lectures');
  }
}
