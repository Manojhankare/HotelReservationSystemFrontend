import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelServicesList } from '../Dao/hotel-services-list';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  

  private baseUrl = 'http://localhost:8990';

  constructor(private http: HttpClient) { }
//adding hotel details
  addHotel(hotelData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/hotels/savehotel`, hotelData);
  }
  addhotelServicesList(hotelId: number, services: any[]): Observable<HotelServicesList> {
    return this.http.post<HotelServicesList>(`${this.baseUrl}/addhotelServicesList/${hotelId}`, services);
  }
   

  //sethotelOwner While adding hotel details
  setHotelOwnerToHotel(hotelId: number, ownerId: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8990/hotels/setHotelOwnerToHotel/${hotelId}/${ownerId}`, {});
  }

  

  // fetching methods...

  getCities(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/cities`);
  }
}
