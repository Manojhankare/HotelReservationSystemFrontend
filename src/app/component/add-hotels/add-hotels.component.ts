import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HotelService } from 'src/app/services/hotel.service';
import { Router, Routes } from '@angular/router';
import { Hotel } from 'src/app/Dao/hotel';
import { HotelServicesList } from 'src/app/Dao/hotel-services-list';

@Component({
  selector: 'app-add-hotels',
  templateUrl: './add-hotels.component.html',
  styleUrls: ['./add-hotels.component.css']
})
export class AddHotelsComponent  {
  hotelForm:NgForm;
  id: number;
  ownerId: number;
  hotelid: string;  
  hotel: Hotel = new Hotel( 0, '', '', '', '', '', '','', 'pending', '');
  
  constructor(private hotelService: HotelService,  private router: Router) {}

  onSubmit(hotelForm: NgForm) {
    // Fetch the id from the session storage
    this.ownerId = Number(sessionStorage.getItem('OwnerId'));
    console.log('Hotel owner Id in hotel add component', this.ownerId); 
 
    this.hotelService.addHotel(this.hotel).subscribe(
      (hotelResponse: Hotel) => {
        this.hotel = hotelResponse;
        console.log(hotelResponse); 

        this.id = this.hotel.hotelId;
        this.hotelid = this.id.toString();        

        alert('Hotel added successfully!');

        this.setOwnerToHotel(this.id);

        alert('Hotel owner added succ....')
        
        // this.router.navigate(['hotelownerhotellist']);
        
      },

    );
  }
 
  // Set hotel owner to hotel (ManyToOne)
  setOwnerToHotel(hotelId: number) {
    console.log('Hotel owner Id in hotel add component in setOwnerToHotel()', this.ownerId);

    // API
    this.hotelService.setHotelOwnerToHotel(hotelId, this.ownerId).subscribe(
      data => {
        console.log(data);
      }
    );
  }
}