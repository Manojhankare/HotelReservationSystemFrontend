import { Component, OnInit } from '@angular/core';
import { GuestHardCodedAuthenticationService } from 'src/app/services/guest-hard-coded-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
// guestHardCodedAuthenticationService: any;

  constructor(public guestHardCodedAuthenticationService:GuestHardCodedAuthenticationService) { }

  GuestLogout(){
    this.guestHardCodedAuthenticationService.GuestLogout();
  }
}
