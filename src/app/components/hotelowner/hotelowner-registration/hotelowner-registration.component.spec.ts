import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelownerRegistrationComponent } from './hotelowner-registration.component';

describe('HotelownerRegistrationComponent', () => {
  let component: HotelownerRegistrationComponent;
  let fixture: ComponentFixture<HotelownerRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelownerRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelownerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
