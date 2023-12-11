// 

import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/Dao/hotel';
import { HotelOwnerServiceService } from 'src/app/services/hotel-owner-service.service';

@Component({
  selector: 'app-hotelowner-hotel-list',
  templateUrl: './hotelowner-hotel-list.component.html',
  styleUrls: ['./hotelowner-hotel-list.component.css']
})
export class HotelownerHotelListComponent implements OnInit {
 
  hotels: Hotel[] = []; // Use an array to store multiple hotels
  ownerId: number;
  id: number;
  hotelId: string;
  addButton: boolean = true;

  constructor(
    private hotelOwnerService: HotelOwnerServiceService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    // Fetch the id from the login component
    this.ownerId = Number(sessionStorage.getItem('OwnerId'));
    console.log('Hotel Owner Id in hotel list component', this.ownerId);

    this.hotelOwnerService.getHotelsByOwnerId(this.ownerId).subscribe(
      (rowData: any) => { 
        if (rowData) {
          this.hotels = rowData; // Assign the array of hotels
          console.log('Hotel Information data perfectly fetched.', rowData);

          // Uncomment the lines below if you want to navigate to a different route
          // this.id = this.hotels[0].hotelId; // Assuming you want the first hotel's ID
          // this.hotelId = this.id.toString();
          // sessionStorage.setItem('hotelId', this.hotelId);
          
          this.addButton = false;
        }
      },
      (error: any) => {
        console.error('Error, while fetching Hotel Information:', error);
      }
    );
  }
  getServiceIcon(service: string): string {
    // Example: Assuming font awesome icons for services
    const serviceIcons: { [key: string]: string } = {
      'Wifi': 'fas fa-wifi',
      'Shower': 'fas fa-shower',
      'Utensils': 'fas fa-utensils',
      // Add more services and their corresponding icons as needed
    };
  
    // Return the corresponding icon or a default icon if not found
    return serviceIcons[service] || 'fas fa-question'; // Default icon for unknown services
  }

  // Uncomment and modify the method below if you need to delete a hotel
  // deleteHotelInformationById(hotelid: number) {
  //   if (confirm('Are you sure you want to delete this hotel?')) {
  //     this.dataService.deleteHotelInformationById(hotelid)
  //       .subscribe(() => {
  //         // Handle success or navigate to a different route
  //       });
  //   }
  //   sessionStorage.removeItem('hotelid');
  //   this.document.location.reload();
  // }

  updateHotelInformationById(hotelid: number) {
    this.router.navigate(['/hoteladminhotelupdate', hotelid]);
  }
}
