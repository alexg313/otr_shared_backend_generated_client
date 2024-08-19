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
 * @interface SetCustomerReviewStatusRequest
 */
export interface SetCustomerReviewStatusRequest {
    /**
     *
     * @type {boolean}
     * @memberof SetCustomerReviewStatusRequest
     */
    isHardDeleted?: boolean;
    /**
     *
     * @type {string}
     * @memberof SetCustomerReviewStatusRequest
     */
    status?: SetCustomerReviewStatusRequestStatusEnum;
}
export declare function SetCustomerReviewStatusRequestFromJSON(json: any): SetCustomerReviewStatusRequest;
export declare function SetCustomerReviewStatusRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetCustomerReviewStatusRequest;
export declare function SetCustomerReviewStatusRequestToJSON(value?: SetCustomerReviewStatusRequest | null): any;
/**
* @export
* @enum {string}
*/
export declare enum SetCustomerReviewStatusRequestStatusEnum {
    APPROVED = "APPROVED",
    REJECTED = "REJECTED"
}
