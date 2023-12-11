import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelownerLogoutComponent } from './hotelowner-logout.component';

describe('HotelownerLogoutComponent', () => {
  let component: HotelownerLogoutComponent;
  let fixture: ComponentFixture<HotelownerLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelownerLogoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelownerLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
