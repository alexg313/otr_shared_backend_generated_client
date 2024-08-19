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
import { DirectMailTemplate } from './';
/**
 *
 * @export
 * @interface DirectMailTemplateResponse
 */
export interface DirectMailTemplateResponse {
    /**
     *
     * @type {Array<DirectMailTemplate>}
     * @memberof DirectMailTemplateResponse
     */
    templates?: Array<DirectMailTemplate>;
}
export declare function DirectMailTemplateResponseFromJSON(json: any): DirectMailTemplateResponse;
export declare function DirectMailTemplateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DirectMailTemplateResponse;
export declare function DirectMailTemplateResponseToJSON(value?: DirectMailTemplateResponse | null): any;
