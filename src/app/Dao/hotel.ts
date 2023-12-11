import { HotelServicesList } from "./hotel-services-list";

export class Hotel {
    hotelId: number;
    hotelName: string;
    hotelEmail: string;
    hotelContactNo: string;
    hotelAddress: string;
    hotelCity: string;
    hotelDescription: string;
    hotelServices:string;
    hotelStatus: string;
    hotelImgUrl: string;

    constructor(
        hotelId: number,
        hotelName: string,
        hotelEmail: string,
        hotelContactNo: string,
        hotelAddress: string,
        hotelCity: string,
        hotelDescription: string,
        hotelServices: string,
        hotelStatus: string,
        hotelImgUrl: string,

    ) {
        this.hotelId = hotelId;
        this.hotelName = hotelName;
        this.hotelEmail = hotelEmail;
        this.hotelContactNo = hotelContactNo;
        this.hotelAddress = hotelAddress;
        this.hotelCity = hotelCity;
        this.hotelDescription = hotelDescription;
        this.hotelServices = hotelServices;
        this.hotelStatus = hotelStatus;
        this.hotelImgUrl = hotelImgUrl;

    }
}