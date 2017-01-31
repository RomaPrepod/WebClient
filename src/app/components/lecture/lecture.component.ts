import { Component, OnInit, Input } from '@angular/core';
import { Lecture } from '../../model';

@Component({
  selector: 'rp-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent {
  @Input() model: Lecture;
  constructor() { }
}
