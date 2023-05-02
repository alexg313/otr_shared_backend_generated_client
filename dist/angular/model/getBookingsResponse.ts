/**
 * OffTheRecord Rest Service API - Devo
 * A service to handle your traffic tickets
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Booking } from './booking';
import { CaseBookingsStats } from './caseBookingsStats';
import { LawfirmBookingSummary } from './lawfirmBookingSummary';
import { BookingCancelation } from './bookingCancelation';


export interface GetBookingsResponse { 
    bookings?: Array<Booking>;
    bookingsByLawfirm?: Array<LawfirmBookingSummary>;
    bookingsByStatus?: { [key: string]: number; };
    cancelations?: Array<BookingCancelation>;
    stats?: CaseBookingsStats;
}

