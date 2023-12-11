import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GuestServiceService } from 'src/app/services/guest-service.service';

@Component({
  selector: 'app-registration-guest',
  templateUrl: './registration-guest.component.html',
  styleUrls: ['./registration-guest.component.css']
})
export class RegistrationGuestComponent implements OnInit {

  registrationForm: FormGroup;
  
  registrationSuccess: boolean= false;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private guestService: GuestServiceService) {

    // Initialize the FormGroup with validators
    this.registrationForm = this.formBuilder.group({
      guestName: ['', [Validators.required, Validators.maxLength(255)]],
      guestAge: [undefined, [Validators.required, Validators.min(18), Validators.max(80)]],
      guestEmail: ['', [Validators.required, Validators.email], [this.emailUniqueValidator()]],
      guestContactNo: ['', [Validators.required, Validators.pattern(/^[789][0-9]{9}$/), Validators.minLength(10), Validators.maxLength(10)], [this.contactNumberUniqueValidator()]],
      guestAddress: ['', [Validators.required, Validators.maxLength(255)]],
      guestUsername: ['', [Validators.required, Validators.maxLength(10)], [this.usernameUniqueValidator()]],
      guestPass: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      termsAndConditions: [false, Validators.requiredTrue],
    });
  }

  usernameUniqueValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.guestService.checkUniqueUsername(control.value).pipe(
        map(isUnique => (isUnique ? null : { usernameTaken: true })),
        catchError(() => of(null)) // Handle errors gracefully
      );
    };
  }

  emailUniqueValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.guestService.checkUniqueEmail(control.value).pipe(
        map(isUnique => (isUnique ? null : { emailTaken: true })),
        catchError(() => of(null)) // Handle errors gracefully
      );
    };
  }
  
  contactNumberUniqueValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.guestService.checkUniqueContactNumber(control.value).pipe(
        map(isUnique => (isUnique ? null : { contactNumberTaken: true })),
        catchError(() => of(null)) // Handle errors gracefully
      );
    };
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.http.post('http://localhost:8990/guest/saveGuest', this.registrationForm.value)
        .subscribe(response => {
          console.log('Form Submitted Successfully!!', response);
          alert('Registration successful. Please log in.');

          // Set registration success to true
          this.registrationSuccess = true;

        // Navigate to the login page
        // this.router.navigate(['/GuestLogin']);
        }, error => {
          console.log('Error submitting the form:', error);
        });
    } else {
      console.log('Form has errors. Please check.');
    }
  }

  // Helper method to check form control errors
  hasError(controlName: string, errorName: string) {
    const control = this.registrationForm.get(controlName);
    return control && control.hasError(errorName) && control.touched;
  }
}
