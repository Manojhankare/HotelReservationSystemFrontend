import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest } from '../Dao/guest';

@Injectable({
  providedIn: 'root'
})
export class GuestServiceService {
  checkUserExists(username: any, password: any) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:8990/guest';

  constructor(private http: HttpClient) { }

  checkUniqueEmail(guestEmail: string): Observable<boolean> {
    // Check email uniqueness on the backend
    return this.http.get<boolean>(`${this.apiUrl}/checkUniqueEmail/${guestEmail}`);
  }

  checkUniqueContactNumber(guestContactNo: string): Observable<boolean> {
    // Check contact number uniqueness on the backend
    return this.http.get<boolean>(`${this.apiUrl}/checkUniqueContactNumber/${guestContactNo}`);
  }
  checkUniqueUsername(guestUsername: string): Observable<boolean> {
    // Check contact number uniqueness on the backend
    return this.http.get<boolean>(`${this.apiUrl}/checkUniqueUsername/${guestUsername}`);
  }

  getUserDetails(user:string, pass:string){
    return this.http.get<Guest>(`http://localhost:8889/checkUserExists/${user}/${pass}`); 
  }


  saveGuest(guest: any): Observable<any> {
    return this.http.post<any>(`http://localhost:8990/guest/getallguest`, guest);
  }

  getAllGuests(): Observable<any> {
    return this.http.get(`http://localhost:8990/guest/getallguest`);
  }

  loginGuest(username:string, password:string):Observable<any>{
    return this.http.post<any>(`http://localhost:8990/loginGuest/${username}/${password}`,{});
  }
   


}
