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
import { StripeCustomerAccountDomain } from './';
/**
 *
 * @export
 * @interface GetUserStripeAccountResponse
 */
export interface GetUserStripeAccountResponse {
    /**
     *
     * @type {StripeCustomerAccountDomain}
     * @memberof GetUserStripeAccountResponse
     */
    stripeAccount?: StripeCustomerAccountDomain;
}
export declare function GetUserStripeAccountResponseFromJSON(json: any): GetUserStripeAccountResponse;
export declare function GetUserStripeAccountResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUserStripeAccountResponse;
export declare function GetUserStripeAccountResponseToJSON(value?: GetUserStripeAccountResponse | null): any;
