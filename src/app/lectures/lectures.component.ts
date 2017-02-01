import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Lecture } from './lecture';
import { LectureService } from './lecture.service';

@Component({
  selector: 'rp-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})
export class LecturesComponent implements OnInit {
  lectures: Observable<Lecture[]>;

  constructor(private lectureService: LectureService) {
  }

  ngOnInit() {
    this.lectures = this.lectureService.getAll();
  }
}
