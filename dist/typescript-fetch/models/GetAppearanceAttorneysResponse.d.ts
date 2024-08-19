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
import { AppearanceAttorneyDomain } from './';
/**
 *
 * @export
 * @interface GetAppearanceAttorneysResponse
 */
export interface GetAppearanceAttorneysResponse {
    /**
     *
     * @type {Array<AppearanceAttorneyDomain>}
     * @memberof GetAppearanceAttorneysResponse
     */
    attorneys?: Array<AppearanceAttorneyDomain>;
}
export declare function GetAppearanceAttorneysResponseFromJSON(json: any): GetAppearanceAttorneysResponse;
export declare function GetAppearanceAttorneysResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAppearanceAttorneysResponse;
export declare function GetAppearanceAttorneysResponseToJSON(value?: GetAppearanceAttorneysResponse | null): any;
