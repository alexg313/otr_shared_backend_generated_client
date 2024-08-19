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
import { CaseActionRequestModel } from './';
/**
 *
 * @export
 * @interface AddActionToCaseRequest
 */
export interface AddActionToCaseRequest {
    /**
     *
     * @type {CaseActionRequestModel}
     * @memberof AddActionToCaseRequest
     */
    caseAction?: CaseActionRequestModel;
}
export declare function AddActionToCaseRequestFromJSON(json: any): AddActionToCaseRequest;
export declare function AddActionToCaseRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddActionToCaseRequest;
export declare function AddActionToCaseRequestToJSON(value?: AddActionToCaseRequest | null): any;
