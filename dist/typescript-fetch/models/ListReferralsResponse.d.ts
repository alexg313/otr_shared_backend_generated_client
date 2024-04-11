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
import { AggregateReferralCredit, ReferralResponseByUser } from './';
/**
 *
 * @export
 * @interface ListReferralsResponse
 */
export interface ListReferralsResponse {
    /**
     *
     * @type {AggregateReferralCredit}
     * @memberof ListReferralsResponse
     */
    aggregates?: AggregateReferralCredit;
    /**
     *
     * @type {Array<ReferralResponseByUser>}
     * @memberof ListReferralsResponse
     */
    referralsPerUser?: Array<ReferralResponseByUser>;
}
export declare function ListReferralsResponseFromJSON(json: any): ListReferralsResponse;
export declare function ListReferralsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListReferralsResponse;
export declare function ListReferralsResponseToJSON(value?: ListReferralsResponse | null): any;
