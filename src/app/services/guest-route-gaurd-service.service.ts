import { Injectable } from '@angular/core';
import { GuestHardCodedAuthenticationService } from './guest-hard-coded-authentication.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuestRouteGaurdServiceService implements CanActivate{

  constructor(private guestHardCodedAuthenticationService :GuestHardCodedAuthenticationService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.guestHardCodedAuthenticationService.isGuestLoggedIn()){
      return true;
    }
    return false;
  }
  
}
