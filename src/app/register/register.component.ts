import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registrationType: string = '';
  registrationCategory: string = '';
  membershipNo: string = '';
  nameOfOrganisation: string = '';
  legalNameOfBusiness: string = '';
  emailIdForCommunication: string = '';
  phone: string = '';
  addressLine1: string = '';
  addressLine2: string = '';
  addressLine3: string = '';
  city: string = '';
  state: string = '';
  pincode: string = '';
  stdCode: string = '';
  gstNo: string = '';
  panNo: string = '';
  hotelAccommodation: string = '';
  pickUpAndDrop: string = '';
  title: string = '';
  name: string = '';
  designation: string = '';
  mobile: string = '';
  age: number | null = null;
  gender: string = '';
  relation: string = '';

  constructor(private http: HttpClient) {}

  save(event: Event): void {
    event.preventDefault();
    if (this.validateRequiredFields()) {
      this.register();
    } else {
      alert("Failed to register. Please complete all required fields.");
    }
  }

  validateRequiredFields(): boolean {
    return this.registrationType !== '' && // Example fields validation
           this.name !== '' &&
           this.designation !== '' &&
           this.mobile !== '' &&
           this.relation !== '' &&
           this.phone.length === 10;
  }
  

  register(): void {
    const bodyData = {
      registrationType: this.registrationType,
      registrationCategory: this.registrationCategory,
      membershipNo: this.membershipNo,
      nameOfOrganisation: this.nameOfOrganisation,
      legalNameOfBusiness: this.legalNameOfBusiness,
      emailIdForCommunication: this.emailIdForCommunication,
      phone: this.phone,
      addressLine1: this.addressLine1,
      addressLine2: this.addressLine2,
      addressLine3: this.addressLine3,
      city: this.city,
      state: this.state,
      pincode: this.pincode,
      stdCode: this.stdCode,
      gstNo: this.gstNo,
      panNo: this.panNo,
      hotelAccommodation: this.hotelAccommodation,
      pickUpAndDrop: this.pickUpAndDrop,
      title: this.title,
      name: this.name,
      designation: this.designation,
      mobile: this.mobile,
      age: this.age,
      gender: this.gender,
      relation: this.relation
    };

    this.http.post("http://localhost:9992/student/create", bodyData).subscribe({
      next: (resultData: any) => {
        console.log("Registration successful", resultData);
        alert("Registration done successfully");
      },
      error: (error: any) => {
        console.error("Registration failed", error);
        alert("Failed to register. Please check the details and try again.");
      }
    });
  }
}
