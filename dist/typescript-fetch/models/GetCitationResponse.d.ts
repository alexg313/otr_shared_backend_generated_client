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
import { CitationModel } from './';
/**
 *
 * @export
 * @interface GetCitationResponse
 */
export interface GetCitationResponse {
    /**
     *
     * @type {CitationModel}
     * @memberof GetCitationResponse
     */
    citation?: CitationModel;
}
export declare function GetCitationResponseFromJSON(json: any): GetCitationResponse;
export declare function GetCitationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCitationResponse;
export declare function GetCitationResponseToJSON(value?: GetCitationResponse | null): any;
