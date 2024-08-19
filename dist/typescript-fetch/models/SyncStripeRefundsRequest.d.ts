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
 * @interface SyncStripeRefundsRequest
 */
export interface SyncStripeRefundsRequest {
    /**
     *
     * @type {boolean}
     * @memberof SyncStripeRefundsRequest
     */
    isDryRun?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof SyncStripeRefundsRequest
     */
    stripeRefundIds?: Array<string>;
}
export declare function SyncStripeRefundsRequestFromJSON(json: any): SyncStripeRefundsRequest;
export declare function SyncStripeRefundsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SyncStripeRefundsRequest;
export declare function SyncStripeRefundsRequestToJSON(value?: SyncStripeRefundsRequest | null): any;
