import { Component, OnInit } from '@angular/core';
import { GuestHardCodedAuthenticationService } from 'src/app/services/guest-hard-coded-authentication.service';

@Component({
  selector: 'app-guest-dashboard',
  templateUrl: './guest-dashboard.component.html',
  styleUrls: ['./guest-dashboard.component.css']
})
export class GuestDashboardComponent implements OnInit {

  constructor(public guestHardCodedAuthenticationService:GuestHardCodedAuthenticationService) { }

  ngOnInit(): void {
    // this.guestHardCodedAuthenticationService.GuestLogout();
  }

}
