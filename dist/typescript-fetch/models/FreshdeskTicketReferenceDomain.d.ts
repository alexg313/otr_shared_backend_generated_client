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
/**
 *
 * @export
 * @interface FreshdeskTicketReferenceDomain
 */
export interface FreshdeskTicketReferenceDomain {
    /**
     *
     * @type {number}
     * @memberof FreshdeskTicketReferenceDomain
     */
    freshdeskTicketId?: number;
    /**
     *
     * @type {string}
     * @memberof FreshdeskTicketReferenceDomain
     */
    referenceEntityId?: string;
    /**
     *
     * @type {string}
     * @memberof FreshdeskTicketReferenceDomain
     */
    referenceEntityType?: FreshdeskTicketReferenceDomainReferenceEntityTypeEnum;
    /**
     *
     * @type {string}
     * @memberof FreshdeskTicketReferenceDomain
     */
    ticketType?: FreshdeskTicketReferenceDomainTicketTypeEnum;
}
export declare function FreshdeskTicketReferenceDomainFromJSON(json: any): FreshdeskTicketReferenceDomain;
export declare function FreshdeskTicketReferenceDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): FreshdeskTicketReferenceDomain;
export declare function FreshdeskTicketReferenceDomainToJSON(value?: FreshdeskTicketReferenceDomain | null): any;
/**
* @export
* @enum {string}
*/
export declare enum FreshdeskTicketReferenceDomainReferenceEntityTypeEnum {
    CASE = "CASE",
    CASEPAYMENT = "CASE_PAYMENT",
    CITATION = "CITATION",
    COURT = "COURT",
    LAWFIRM = "LAWFIRM",
    LAWFIRMCASE = "LAWFIRM_CASE",
    LAWYER = "LAWYER",
    LINEITEM = "LINE_ITEM",
    STRIPECHARGE = "STRIPE_CHARGE",
    USER = "USER"
}
/**
* @export
* @enum {string}
*/
export declare enum FreshdeskTicketReferenceDomainTicketTypeEnum {
    CARDPROBLEM = "CARD_PROBLEM",
    POSTBOOKINGPAYMENTFAILURE = "POST_BOOKING_PAYMENT_FAILURE",
    PREBOOKINGPAYMENTFAILURE = "PRE_BOOKING_PAYMENT_FAILURE"
}
