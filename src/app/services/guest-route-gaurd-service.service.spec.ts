import { TestBed } from '@angular/core/testing';

import { GuestRouteGaurdServiceService } from './guest-route-gaurd-service.service';

describe('GuestRouteGaurdServiceService', () => {
  let service: GuestRouteGaurdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestRouteGaurdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
