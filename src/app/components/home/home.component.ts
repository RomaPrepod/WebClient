import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { ProtectedDataService } from '../../services/protected-data.service';

@Component({
  selector: 'rp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: string;
  constructor(
    public auth: AuthService,
    private protectedDataService: ProtectedDataService) { }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.protectedDataService.getProtectedData().subscribe(data => this.data = data);
    }
  }

}
