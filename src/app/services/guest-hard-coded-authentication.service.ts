import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuestHardCodedAuthenticationService {


  private authenticatedGuest: { username: string; password: string } | null = null;

  authenticated(username: string, password: string) {
    if (username === 'username' && password === 'password') {
      sessionStorage.setItem('authenticatedGuest', username);
      return true;
    } else {
      sessionStorage.removeItem('authenticatedGuest');
      return false;
    }
  }
  isGuestLoggedIn() {
    return sessionStorage.getItem('authenticatedGuest') !== null;
  }
  getAuthenticatedGuest() {
    return this.authenticatedGuest;
  }
  GuestLogout() {
    sessionStorage.clear();
  }


}
