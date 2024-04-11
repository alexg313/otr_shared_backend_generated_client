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
import { CaseDeclineCategoryReasonsModel } from './';
/**
 *
 * @export
 * @interface GetCaseDeclineReasonTypesResponse
 */
export interface GetCaseDeclineReasonTypesResponse {
    /**
     *
     * @type {CaseDeclineCategoryReasonsModel}
     * @memberof GetCaseDeclineReasonTypesResponse
     */
    caseDeclineReasonTypes?: CaseDeclineCategoryReasonsModel;
}
export declare function GetCaseDeclineReasonTypesResponseFromJSON(json: any): GetCaseDeclineReasonTypesResponse;
export declare function GetCaseDeclineReasonTypesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCaseDeclineReasonTypesResponse;
export declare function GetCaseDeclineReasonTypesResponseToJSON(value?: GetCaseDeclineReasonTypesResponse | null): any;
