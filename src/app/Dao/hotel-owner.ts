export class HotelOwner {
    ownerId: number;
    ownerName: string;
    ownerEmail: string;
    ownerContactNumber: string;
    ownerUsername: string;
    
    password: string;
  
    constructor(ownerId: number, ownerName: string, ownerEmail: string, ownerContactNumber: string, ownerUsername: string, password: string) {
      this.ownerId = ownerId;
      this.ownerName = ownerName;
      this.ownerEmail = ownerEmail;
      this.ownerContactNumber = ownerContactNumber;
      this.ownerUsername = ownerUsername;
      this.password = password;
    }
  }
  