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
import { DirectMailContact } from './';
/**
 *
 * @export
 * @interface DirectMailContactResponse
 */
export interface DirectMailContactResponse {
    /**
     *
     * @type {Array<DirectMailContact>}
     * @memberof DirectMailContactResponse
     */
    sentMail?: Array<DirectMailContact>;
}
export declare function DirectMailContactResponseFromJSON(json: any): DirectMailContactResponse;
export declare function DirectMailContactResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DirectMailContactResponse;
export declare function DirectMailContactResponseToJSON(value?: DirectMailContactResponse | null): any;
