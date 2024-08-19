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
 * @interface SetCourtDateForCaseRequest
 */
export interface SetCourtDateForCaseRequest {
    /**
     *
     * @type {Date}
     * @memberof SetCourtDateForCaseRequest
     */
    courtDate?: Date;
    /**
     *
     * @type {boolean}
     * @memberof SetCourtDateForCaseRequest
     */
    sendNotificationEmailToClient?: boolean;
}
export declare function SetCourtDateForCaseRequestFromJSON(json: any): SetCourtDateForCaseRequest;
export declare function SetCourtDateForCaseRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetCourtDateForCaseRequest;
export declare function SetCourtDateForCaseRequestToJSON(value?: SetCourtDateForCaseRequest | null): any;
