import { Component, OnInit } from '@angular/core';
import { LectureService } from '../../services';
import { Lecture } from '../../model';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'rp-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})
export class LecturesComponent implements OnInit {
  lectures: Lecture[];
  error: boolean;
  loading: boolean;

  constructor(private lectureService: LectureService) { }

  ngOnInit() {
    this.loadLectures();
  }

  loadLectures() {
    this.error = false;
    this.loading = true;
    this.lectureService.getAll()
      .finally(() => this.loading = false)
      .subscribe(
        lectures => this.lectures = lectures,
        error => this.error = true,
      );
  }
}
