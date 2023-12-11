import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Guest } from 'src/app/Dao/guest';
import { GuestServiceService } from 'src/app/services/guest-service.service';

@Component({
  selector: 'app-login-guest',
  templateUrl: './login-guest.component.html',
  styleUrls: ['./login-guest.component.css']
})
export class LoginGuestComponent{

  username:string;
  password:string;
  guest:Guest;
  guestId:string;
  id:number;

  constructor(private guestService: GuestServiceService, private router : Router) {  
  }
  
  onSubmit(guestForm:NgForm){
    this.guestService.loginGuest(this.username,this.password).subscribe( 
      (guestResponsive)=>{ 
        if(guestResponsive){
          sessionStorage.setItem('authenticatedGuest',this.username);
          console.log("guest login successfully!!!",guestResponsive);
          alert("login successfully!!");
          this.guest=guestResponsive;
          this.id=this.guest.guestId;
          this.guestId=this.id.toString();
          sessionStorage.setItem('guestId',this.guestId);
          this.router.navigate(['GuestDashboard']);
        }
        else{
          alert("please enter valid credientials!!")
          guestForm.resetForm();
        }
      }
    )
  }



 }

