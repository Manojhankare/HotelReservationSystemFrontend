import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelownerAddRoomComponent } from './hotelowner-add-room.component';

describe('HotelownerAddRoomComponent', () => {
  let component: HotelownerAddRoomComponent;
  let fixture: ComponentFixture<HotelownerAddRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelownerAddRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelownerAddRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
