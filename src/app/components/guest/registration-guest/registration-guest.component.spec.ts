import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationGuestComponent } from './registration-guest.component';

describe('RegistrationGuestComponent', () => {
  let component: RegistrationGuestComponent;
  let fixture: ComponentFixture<RegistrationGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationGuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
