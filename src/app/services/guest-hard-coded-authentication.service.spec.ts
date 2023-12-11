import { TestBed } from '@angular/core/testing';

import { GuestHardCodedAuthenticationService } from './guest-hard-coded-authentication.service';

describe('GuestHardCodedAuthenticationService', () => {
  let service: GuestHardCodedAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestHardCodedAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
