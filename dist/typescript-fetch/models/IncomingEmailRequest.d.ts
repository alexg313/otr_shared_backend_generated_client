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
import { IncomingEmailModels } from './';
/**
 *
 * @export
 * @interface IncomingEmailRequest
 */
export interface IncomingEmailRequest {
    /**
     *
     * @type {string}
     * @memberof IncomingEmailRequest
     */
    message?: string;
    /**
     *
     * @type {string}
     * @memberof IncomingEmailRequest
     */
    subscribeURL?: string;
    /**
     *
     * @type {string}
     * @memberof IncomingEmailRequest
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof IncomingEmailRequest
     */
    unsubscribeURL?: string;
    /**
     *
     * @type {IncomingEmailModels}
     * @memberof IncomingEmailRequest
     */
    models?: IncomingEmailModels;
}
export declare function IncomingEmailRequestFromJSON(json: any): IncomingEmailRequest;
export declare function IncomingEmailRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncomingEmailRequest;
export declare function IncomingEmailRequestToJSON(value?: IncomingEmailRequest | null): any;
