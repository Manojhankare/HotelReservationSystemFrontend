import { TestBed } from '@angular/core/testing';

import { HotelOwnerServiceService } from './hotel-owner-service.service';

describe('HotelOwnerServiceService', () => {
  let service: HotelOwnerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelOwnerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
