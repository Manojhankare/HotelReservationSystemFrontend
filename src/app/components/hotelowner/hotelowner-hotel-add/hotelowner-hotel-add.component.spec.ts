import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelownerHotelAddComponent } from './hotelowner-hotel-add.component';

describe('HotelownerHotelAddComponent', () => {
  let component: HotelownerHotelAddComponent;
  let fixture: ComponentFixture<HotelownerHotelAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelownerHotelAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelownerHotelAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
