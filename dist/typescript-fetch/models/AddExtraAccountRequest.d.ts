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
 * @interface AddExtraAccountRequest
 */
export interface AddExtraAccountRequest {
    /**
     *
     * @type {boolean}
     * @memberof AddExtraAccountRequest
     */
    isEmailConfirmed?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof AddExtraAccountRequest
     */
    isPrimaryAccount?: boolean;
    /**
     *
     * @type {string}
     * @memberof AddExtraAccountRequest
     */
    newEmailAddress?: string;
    /**
     *
     * @type {string}
     * @memberof AddExtraAccountRequest
     */
    password?: string;
}
export declare function AddExtraAccountRequestFromJSON(json: any): AddExtraAccountRequest;
export declare function AddExtraAccountRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddExtraAccountRequest;
export declare function AddExtraAccountRequestToJSON(value?: AddExtraAccountRequest | null): any;
