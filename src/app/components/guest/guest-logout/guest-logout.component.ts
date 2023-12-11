import { Component, OnInit } from '@angular/core';
import { GuestHardCodedAuthenticationService } from 'src/app/services/guest-hard-coded-authentication.service';

@Component({
  selector: 'app-guest-logout',
  templateUrl: './guest-logout.component.html',
  styleUrls: ['./guest-logout.component.css']
})
export class GuestLogoutComponent implements OnInit {

     constructor(public guestHardCodedAuthenticationService:GuestHardCodedAuthenticationService){}

  ngOnInit(){
    this.guestHardCodedAuthenticationService.GuestLogout();
  }
}
