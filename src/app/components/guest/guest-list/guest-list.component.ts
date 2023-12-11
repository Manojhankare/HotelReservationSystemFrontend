import { Component, OnInit } from '@angular/core';
import { GuestServiceService } from 'src/app/services/guest-service.service';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {

  guests: any[] | undefined;

  constructor(private guestServiceService: GuestServiceService) { }

  ngOnInit() {
    this.fetchGuests();
  }

  fetchGuests() {
    this.guestServiceService.getAllGuests().subscribe(data => {
      this.guests = data;
    });
  }
}
