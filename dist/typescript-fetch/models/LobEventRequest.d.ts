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
import { LobEvent } from './';
/**
 *
 * @export
 * @interface LobEventRequest
 */
export interface LobEventRequest {
    /**
     *
     * @type {Date}
     * @memberof LobEventRequest
     */
    dateCreated?: Date;
    /**
     *
     * @type {LobEvent}
     * @memberof LobEventRequest
     */
    eventType?: LobEvent;
    /**
     *
     * @type {string}
     * @memberof LobEventRequest
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof LobEventRequest
     */
    referenceId?: string;
}
export declare function LobEventRequestFromJSON(json: any): LobEventRequest;
export declare function LobEventRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LobEventRequest;
export declare function LobEventRequestToJSON(value?: LobEventRequest | null): any;
