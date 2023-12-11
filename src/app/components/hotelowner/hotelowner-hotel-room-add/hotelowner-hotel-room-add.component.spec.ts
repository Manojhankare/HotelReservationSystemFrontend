import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelownerHotelRoomAddComponent } from './hotelowner-hotel-room-add.component';

describe('HotelownerHotelRoomAddComponent', () => {
  let component: HotelownerHotelRoomAddComponent;
  let fixture: ComponentFixture<HotelownerHotelRoomAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelownerHotelRoomAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelownerHotelRoomAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
