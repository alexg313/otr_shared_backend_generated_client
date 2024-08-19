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
 * @interface CreateCitationResponse
 */
export interface CreateCitationResponse {
    /**
     *
     * @type {CitationModel}
     * @memberof CreateCitationResponse
     */
    citation?: CitationModel;
}
export declare function CreateCitationResponseFromJSON(json: any): CreateCitationResponse;
export declare function CreateCitationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCitationResponse;
export declare function CreateCitationResponseToJSON(value?: CreateCitationResponse | null): any;
