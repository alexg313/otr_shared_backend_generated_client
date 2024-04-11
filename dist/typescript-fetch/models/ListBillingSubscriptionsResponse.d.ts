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
import { BillingSubscriptionModel } from './';
/**
 *
 * @export
 * @interface ListBillingSubscriptionsResponse
 */
export interface ListBillingSubscriptionsResponse {
    /**
     *
     * @type {Array<BillingSubscriptionModel>}
     * @memberof ListBillingSubscriptionsResponse
     */
    subscriptions?: Array<BillingSubscriptionModel>;
    /**
     *
     * @type {Array<BillingSubscriptionModel>}
     * @memberof ListBillingSubscriptionsResponse
     */
    subscriptionsAsBeneficiary?: Array<BillingSubscriptionModel>;
}
export declare function ListBillingSubscriptionsResponseFromJSON(json: any): ListBillingSubscriptionsResponse;
export declare function ListBillingSubscriptionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListBillingSubscriptionsResponse;
export declare function ListBillingSubscriptionsResponseToJSON(value?: ListBillingSubscriptionsResponse | null): any;
