import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelOwner } from 'src/app/Dao/hotel-owner';
import { HotelOwnerServiceService } from 'src/app/services/hotel-owner-service.service';

@Component({
  selector: 'app-hotelowner-login',
  templateUrl: './hotelowner-login.component.html',
  styleUrls: ['./hotelowner-login.component.css']
})
export class HotelownerLoginComponent   {

  
  username:string;
  password:string;
  hotelOwner:HotelOwner;
  id:number;
  ownerId: string;

  constructor(private hotelOwnerServiceService: HotelOwnerServiceService, private router : Router) {  
  }
  
  onSubmit(hotelOwnerForm:NgForm){
    this.hotelOwnerServiceService.hotelOwnerLogin(this.username,this.password).subscribe( 
      (hotelOwnerResponsive)=>{ 
        if(hotelOwnerResponsive){
          sessionStorage.setItem('authenticatedGuest',this.username);
          console.log("guest login successfully!!!",hotelOwnerResponsive);
          alert("login successfully!!");
          this.hotelOwner=hotelOwnerResponsive;
          this.id=this.hotelOwner.ownerId;
          this.ownerId=this.id.toString();
          sessionStorage.setItem('OwnerId',this.ownerId);
          this.router.navigate(['HotelOwnerDashboard']);
        }
        else{
          alert("please enter valid credientials!!")
          hotelOwnerForm.resetForm();
        }
      }
    )
  }


}
