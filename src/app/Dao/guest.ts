export class Guest {
    guestId: number ;
    guestName: string;
    guestAge: number;
    guestEmail: string;
    guestContactNo: string;
    guestAddress: string;
    guestUsername: string;
    guestPass: string;

    constructor(
        guestId: number ,
    guestName: string,
    guestAge: number,
    guestEmail: string,
    guestContactNo: string,
    guestAddress: string,
    guestUsername: string,
    guestPass: string,
        
        
    ) {
        this.guestId=guestId;
        this.guestName = guestName;
        this.guestAge = guestAge;
        this.guestEmail = guestEmail;
        this.guestContactNo = guestContactNo;
        this.guestAddress = guestAddress;
        this.guestUsername = guestUsername;
        this.guestPass = guestPass;
    }
}
