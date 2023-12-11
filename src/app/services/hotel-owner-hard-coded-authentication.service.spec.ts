import { TestBed } from '@angular/core/testing';

import { HotelOwnerHardCodedAuthenticationService } from './hotel-owner-hard-coded-authentication.service';

describe('HotelOwnerHardCodedAuthenticationService', () => {
  let service: HotelOwnerHardCodedAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelOwnerHardCodedAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
