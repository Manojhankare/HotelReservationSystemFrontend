import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelOwner } from '../Dao/hotel-owner';
import { Hotel } from '../Dao/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelOwnerServiceService {
   
 

  private apiUrl = 'http://localhost:8990/hotelOwner'; // Adjust this to your actual API endpoint

  constructor(private http: HttpClient) {}



  hotelOwnerLogin(username:string,password:string):Observable<any>{
    // http://localhost:8990/hotelOwner/loginhotelOwner/${username}/${password}
    
    return this.http.post<HotelOwner>(`http://localhost:8990/hotelOwner/loginhotelOwner/${username}/${password}`,{})
  }

  checkUniqueEmail(email: string): Observable<boolean> {
    // Check email uniqueness on the backend
    return this.http.get<boolean>(`${this.apiUrl}/checkUniqueEmail/${email}`);
  }

  checkUniqueContactNumber(contactNumber: string): Observable<boolean> {
    // Check contact number uniqueness on the backend
    return this.http.get<boolean>(`${this.apiUrl}/checkUniqueContactNumber/${contactNumber}`);
  }
  checkUniqueUsername(username: string): Observable<boolean> {
    // Check contact number uniqueness on the backend
    return this.http.get<boolean>(`${this.apiUrl}/checkUniqueUsername/${username}`);
  }

  
  getHotelsByOwnerId(ownerId:number):Observable<Hotel>{
    // console.log(`http://localhost:8990/getHotelByOwnerId/${ownerId}}`);     
     return this.http.get<Hotel>(`http://localhost:8990/hotels/getHotelsByOwnerId/${ownerId}`);
   }

  searchHotelOwners(ownerName?: string, ownerEmail?: string, contactNumber?: string): Observable<HotelOwner[]> {
    const params = new HttpParams()
      .set('ownerName', ownerName || '')
      .set('ownerEmail', ownerEmail || '')
      .set('contactNumber', contactNumber || '');

    return this.http.get<HotelOwner[]>(`${this.apiUrl}/search`, { params });
  } 
}

