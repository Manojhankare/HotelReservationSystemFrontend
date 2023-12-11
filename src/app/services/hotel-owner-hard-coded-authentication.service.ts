import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelOwnerHardCodedAuthenticationService {

  private authenticatedHotelOwner: { username: string; password: string } | null = null;

  authenticated(username: string, password: string) {
    if (username === 'username' && password === 'password') {
      sessionStorage.setItem('authenticatedHotelOwner', username);
      return true;
    } else {
      sessionStorage.removeItem('authenticatedHotelOwner');
      return false;
    }
  }
  isHotelOwnerLoggedIn() {
    return sessionStorage.getItem('authenticatedHotelOwner') !== null;
  }
  getAuthenticatedHotelOwner() {
    return this.authenticatedHotelOwner;
  }
  HotelOwnerLogout() {
    sessionStorage.clear();
  }
}
