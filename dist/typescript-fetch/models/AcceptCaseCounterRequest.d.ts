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
 * @interface AcceptCaseCounterRequest
 */
export interface AcceptCaseCounterRequest {
    /**
     *
     * @type {string}
     * @memberof AcceptCaseCounterRequest
     */
    cardId: string;
}
export declare function AcceptCaseCounterRequestFromJSON(json: any): AcceptCaseCounterRequest;
export declare function AcceptCaseCounterRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AcceptCaseCounterRequest;
export declare function AcceptCaseCounterRequestToJSON(value?: AcceptCaseCounterRequest | null): any;
