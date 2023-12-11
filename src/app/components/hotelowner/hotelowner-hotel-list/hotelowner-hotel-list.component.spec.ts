import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelownerHotelListComponent } from './hotelowner-hotel-list.component';

describe('HotelownerHotelListComponent', () => {
  let component: HotelownerHotelListComponent;
  let fixture: ComponentFixture<HotelownerHotelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelownerHotelListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelownerHotelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
