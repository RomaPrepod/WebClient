import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Lecture } from './lecture';

@Injectable()
export class LectureService {
  constructor(private af: AngularFire) {
  }

  getAll(): FirebaseListObservable<Lecture[]> {
    return this.af.database.list('/lectures');
  }
}
