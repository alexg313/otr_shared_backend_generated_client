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
 * @interface PriceMatchRequest
 */
export interface PriceMatchRequest {
    /**
     *
     * @type {string}
     * @memberof PriceMatchRequest
     */
    attorneyContactInfo?: string;
    /**
     *
     * @type {string}
     * @memberof PriceMatchRequest
     */
    attorneyName?: string;
    /**
     *
     * @type {string}
     * @memberof PriceMatchRequest
     */
    clientEmailAddress?: string;
    /**
     *
     * @type {string}
     * @memberof PriceMatchRequest
     */
    clientName?: string;
    /**
     *
     * @type {string}
     * @memberof PriceMatchRequest
     */
    details?: string;
    /**
     *
     * @type {string}
     * @memberof PriceMatchRequest
     */
    priceToMatch?: string;
    /**
     *
     * @type {string}
     * @memberof PriceMatchRequest
     */
    website?: string;
}
export declare function PriceMatchRequestFromJSON(json: any): PriceMatchRequest;
export declare function PriceMatchRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PriceMatchRequest;
export declare function PriceMatchRequestToJSON(value?: PriceMatchRequest | null): any;
