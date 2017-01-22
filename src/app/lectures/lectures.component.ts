import { Component, OnInit } from '@angular/core';
import { LectureService } from '../services';
import { Lecture } from '../model';

@Component({
  selector: 'rp-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})
export class LecturesComponent implements OnInit {
  lectures: Lecture[];

  constructor(private lectureService: LectureService) { }

  ngOnInit() {
    this.lectures = [];
    this.lectureService.getAll()
      .subscribe(lecture => this.lectures.push(lecture));
  }
}
