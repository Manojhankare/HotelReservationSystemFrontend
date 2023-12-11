import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { HotelOwnerServiceService } from 'src/app/services/hotel-owner-service.service';


@Component({
  selector: 'app-hotelowner-registration',
  templateUrl: './hotelowner-registration.component.html',
  styleUrls: ['./hotelowner-registration.component.css']
})
export class HotelownerRegistrationComponent   {

  registrationForm: FormGroup;
  registrationSuccess: boolean= false;

  constructor(private fb: FormBuilder, private http: HttpClient, private hotelOwnerService: HotelOwnerServiceService, private router:Router) {
    this.registrationForm = this.fb.group({
      ownerName: ['', [Validators.required, Validators.maxLength(255)]],
      ownerEmail: ['', [Validators.required, Validators.email, Validators.maxLength(255)], [this.emailUniqueValidator()]],
      ownerContactNumber: ['', [Validators.required, Validators.pattern(/^[789][0-9]{9}$/), Validators.maxLength(10), Validators.minLength(10)], [this.contactNumberUniqueValidator()]],
      ownerUsername: ['', [Validators.required, Validators.maxLength(15)], [this.usernameUniqueValidator()]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      termsAndConditions: [false, Validators.requiredTrue],
    });
  }
  usernameUniqueValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.hotelOwnerService.checkUniqueUsername(control.value).pipe(
        map(isUnique => (isUnique ? null : { usernameTaken: true })),
      );
    };
  }
  emailUniqueValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.hotelOwnerService.checkUniqueEmail(control.value).pipe(
        map(isUnique => (isUnique ? null : { emailTaken: true })),
      );
    };
  }

  contactNumberUniqueValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.hotelOwnerService.checkUniqueContactNumber(control.value).pipe(
        map(isUnique => (isUnique ? null : { contactNumberTaken: true })),
      );
    };
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.http.post<any>('http://localhost:8990/hotelOwner/save', this.registrationForm.value)
        .subscribe(response => {
          console.log('Form submitted successfully!', response);

          alert('Registration successful. Please log in.');

          // Set registration success to true
          this.registrationSuccess = true;

        // Navigate to the login page
        // this.router.navigate(['/HotelOwnerLogin']);
          // Handle success, e.g., show a success message
        }, error => {
          console.error('Error submitting the form:', error);
          console.log('Form has errors. Please check:', this.registrationForm.errors);
          // Log errors for each control
          Object.keys(this.registrationForm.controls).forEach(key => {
            const controlErrors = this.registrationForm.get(key)?.errors;
            if (controlErrors != null) {
              console.error(`Control ${key} has errors:`, controlErrors);
            }
          });

          // Handle error, e.g., show an error message
        });
    } else {
      console.log('Form has errors. Please check.');
      console.log('Form has errors. Please check:', this.registrationForm.errors);

      // Handle form errors
    }
  }

  hasError(controlName: string, errorName: string) {
    const control = this.registrationForm.get(controlName);
    return control && control.hasError(errorName) && control.touched;
  }


}
