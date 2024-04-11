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
 * @interface SubscriptionDiscountEligibilityReq
 */
export interface SubscriptionDiscountEligibilityReq {
    /**
     *
     * @type {string}
     * @memberof SubscriptionDiscountEligibilityReq
     */
    subscriptionDiscountEligibilityType?: SubscriptionDiscountEligibilityReqSubscriptionDiscountEligibilityTypeEnum;
    /**
     *
     * @type {string}
     * @memberof SubscriptionDiscountEligibilityReq
     */
    uiSubscriptionEligibilityMsg?: string;
}
export declare function SubscriptionDiscountEligibilityReqFromJSON(json: any): SubscriptionDiscountEligibilityReq;
export declare function SubscriptionDiscountEligibilityReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionDiscountEligibilityReq;
export declare function SubscriptionDiscountEligibilityReqToJSON(value?: SubscriptionDiscountEligibilityReq | null): any;
/**
* @export
* @enum {string}
*/
export declare enum SubscriptionDiscountEligibilityReqSubscriptionDiscountEligibilityTypeEnum {
    ISELIGIBLE = "IS_ELIGIBLE",
    ISNOTELIGIBLE = "IS_NOT_ELIGIBLE",
    NOTAPPLICABLE = "NOT_APPLICABLE"
}
