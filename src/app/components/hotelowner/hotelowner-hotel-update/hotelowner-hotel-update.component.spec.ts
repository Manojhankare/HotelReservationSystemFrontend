import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelownerHotelUpdateComponent } from './hotelowner-hotel-update.component';

describe('HotelownerHotelUpdateComponent', () => {
  let component: HotelownerHotelUpdateComponent;
  let fixture: ComponentFixture<HotelownerHotelUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelownerHotelUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelownerHotelUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
