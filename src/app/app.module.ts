import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { RegistrationGuestComponent } from './components/guest/registration-guest/registration-guest.component';
import { LoginGuestComponent } from './components/guest/login-guest/login-guest.component';

import { FooterComponent } from './component/footer/footer.component';
import { GuestListComponent } from './components/guest/guest-list/guest-list.component';
import { AddHotelsComponent } from './component/add-hotels/add-hotels.component';
import { GuestDashboardComponent } from './components/guest/guest-dashboard/guest-dashboard.component';
import { HotelownerDashboardComponent } from './components/hotelowner/hotelowner-dashboard/hotelowner-dashboard.component';
import { GuestLogoutComponent } from './components/guest/guest-logout/guest-logout.component';
import { HotelownerLoginComponent } from './components/hotelowner/hotelowner-login/hotelowner-login.component';
import { HotelownerRegistrationComponent } from './components/hotelowner/hotelowner-registration/hotelowner-registration.component';
import { HotelownerLogoutComponent } from './components/hotelowner/hotelowner-logout/hotelowner-logout.component';
import { HotelownerHotelListComponent } from './components/hotelowner/hotelowner-hotel-list/hotelowner-hotel-list.component';
import { HotelownerHotelAddComponent } from './components/hotelowner/hotelowner-hotel-add/hotelowner-hotel-add.component';
import { HotelownerHotelUpdateComponent } from './components/hotelowner/hotelowner-hotel-update/hotelowner-hotel-update.component';
import { HotelownerHotelRoomAddComponent } from './components/hotelowner/hotelowner-hotel-room-add/hotelowner-hotel-room-add.component';
import { HotelownerProfileComponent } from './components/hotelowner/hotelowner-profile/hotelowner-profile.component';
import { GuestProfileComponent } from './components/guest/guest-profile/guest-profile.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { HotelownerAddRoomComponent } from './hotelowner/hotelowner-add-room/hotelowner-add-room.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegistrationGuestComponent, 
    LoginGuestComponent,
    
    GuestListComponent,
    FooterComponent,
    AddHotelsComponent,
    GuestDashboardComponent,
    HotelownerDashboardComponent,
    GuestLogoutComponent,
    HotelownerLoginComponent,
    HotelownerRegistrationComponent,
    HotelownerLogoutComponent,
    HotelownerHotelListComponent,
    HotelownerHotelAddComponent,
    HotelownerHotelUpdateComponent,
    HotelownerHotelRoomAddComponent,
    HotelownerProfileComponent,
    GuestProfileComponent,
    AdminDashboardComponent,
    HotelownerAddRoomComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
