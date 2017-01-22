import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rp-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent {
  @Input() title: string;
  @Input() date: Date;
  @Input() description: string;

  constructor() { }
}
