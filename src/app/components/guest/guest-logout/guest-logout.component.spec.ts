import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestLogoutComponent } from './guest-logout.component';

describe('GuestLogoutComponent', () => {
  let component: GuestLogoutComponent;
  let fixture: ComponentFixture<GuestLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestLogoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
