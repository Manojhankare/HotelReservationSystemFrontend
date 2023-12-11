import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { GuestListComponent } from './components/guest/guest-list/guest-list.component';
import { RegistrationGuestComponent } from './components/guest/registration-guest/registration-guest.component';
import { LoginGuestComponent } from './components/guest/login-guest/login-guest.component';
import { AddHotelsComponent } from './component/add-hotels/add-hotels.component';
import { HotelownerRegistrationComponent } from './components/hotelowner/hotelowner-registration/hotelowner-registration.component';
import { HotelownerLoginComponent } from './components/hotelowner/hotelowner-login/hotelowner-login.component';
import { GuestLogoutComponent } from './components/guest/guest-logout/guest-logout.component';
import { GuestRouteGaurdServiceService } from './services/guest-route-gaurd-service.service';
import { GuestDashboardComponent } from './components/guest/guest-dashboard/guest-dashboard.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { HotelownerDashboardComponent } from './components/hotelowner/hotelowner-dashboard/hotelowner-dashboard.component';
import { HotelownerLogoutComponent } from './components/hotelowner/hotelowner-logout/hotelowner-logout.component';
import { HotelownerHotelListComponent } from './components/hotelowner/hotelowner-hotel-list/hotelowner-hotel-list.component';

const routes: Routes = [
  { path: '',component:HomeComponent},
  { path: 'home', component: HomeComponent },
  //admin

  //guest
  { path: 'guestList', component: GuestListComponent },
  { path: 'GuestSignup', component: RegistrationGuestComponent},
  { path: 'GuestLogin', component:LoginGuestComponent},
  { path: 'GuestLogout', component:GuestLogoutComponent},
  { path: 'GuestDashboard', component:GuestDashboardComponent,canActivate:[GuestRouteGaurdServiceService]},
  
  //hotelowner
  { path: 'HotelOwnerLogin', component:HotelownerLoginComponent},
  { path: 'HotelOwnerLogout', component:HotelownerLogoutComponent},
  { path: 'HotelOwnerSignup', component:HotelownerRegistrationComponent},
  { path: 'AddHotels', component: AddHotelsComponent },
  { path: 'HotelList', component:HotelListComponent},
  { path: 'HotelOwnerDashboard', component:HotelownerDashboardComponent},
  { path: 'hotelownerhotellist', component:HotelownerHotelListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
