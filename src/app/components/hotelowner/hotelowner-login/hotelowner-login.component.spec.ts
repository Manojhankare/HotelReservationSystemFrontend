import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelownerLoginComponent } from './hotelowner-login.component';

describe('HotelownerLoginComponent', () => {
  let component: HotelownerLoginComponent;
  let fixture: ComponentFixture<HotelownerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelownerLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelownerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
