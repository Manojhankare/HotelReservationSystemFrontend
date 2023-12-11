import { Component, OnInit } from '@angular/core';
import { HotelOwnerHardCodedAuthenticationService } from 'src/app/services/hotel-owner-hard-coded-authentication.service';

@Component({
  selector: 'app-hotelowner-logout',
  templateUrl: './hotelowner-logout.component.html',
  styleUrls: ['./hotelowner-logout.component.css']
})
export class HotelownerLogoutComponent implements OnInit {

  constructor(public hotelOwnerHardCodedAuthenticationService:HotelOwnerHardCodedAuthenticationService){}

  ngOnInit(){
    this.hotelOwnerHardCodedAuthenticationService.HotelOwnerLogout();
    alert("Log out succefully!!");
  }

}
