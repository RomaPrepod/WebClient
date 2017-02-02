import { Component, OnInit } from '@angular/core';
import { Lecture } from './lecture';
import { LectureService } from './lecture.service';

@Component({
  selector: 'rp-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})
export class LecturesComponent implements OnInit {
  lectures: Lecture[];
  isLoading: boolean;
  isLoadingFailed: boolean;

  constructor(private lectureService: LectureService) {
  }

  ngOnInit() {
    this.getLectures();
  }

  private getLectures() {
    this.isLoading = true;
    this.isLoadingFailed = false;
    this.lectureService.getAll()
      .subscribe(
        lectures => {
          this.isLoading = false;
          this.lectures = lectures;
        },
        error => this.isLoadingFailed = true);
  }
}
