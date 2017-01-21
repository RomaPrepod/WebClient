import { Component, OnInit } from '@angular/core';

import { Roma, RomaService } from '../services/roma.service';

@Component({
  selector: 'rp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  roma: Roma;
  constructor(private romaService: RomaService) { }

  ngOnInit() {
    this.romaService.getRoma()
      .subscribe(roma => this.roma = roma);
  }
}
