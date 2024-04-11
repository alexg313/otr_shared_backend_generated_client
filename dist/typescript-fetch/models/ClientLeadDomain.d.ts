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
import { PhoneNumberDomain, TicketLeadDomain, TimestampRes } from './';
/**
 *
 * @export
 * @interface ClientLeadDomain
 */
export interface ClientLeadDomain {
    /**
     *
     * @type {string}
     * @memberof ClientLeadDomain
     */
    email?: string;
    /**
     *
     * @type {string}
     * @memberof ClientLeadDomain
     */
    firstName?: string;
    /**
     *
     * @type {TimestampRes}
     * @memberof ClientLeadDomain
     */
    lastBookingDateUtc?: TimestampRes;
    /**
     *
     * @type {string}
     * @memberof ClientLeadDomain
     */
    lastName?: string;
    /**
     *
     * @type {Array<PhoneNumberDomain>}
     * @memberof ClientLeadDomain
     */
    phoneNumbers?: Array<PhoneNumberDomain>;
    /**
     *
     * @type {Array<TicketLeadDomain>}
     * @memberof ClientLeadDomain
     */
    tickets?: Array<TicketLeadDomain>;
    /**
     *
     * @type {number}
     * @memberof ClientLeadDomain
     */
    userId?: number;
}
export declare function ClientLeadDomainFromJSON(json: any): ClientLeadDomain;
export declare function ClientLeadDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClientLeadDomain;
export declare function ClientLeadDomainToJSON(value?: ClientLeadDomain | null): any;
