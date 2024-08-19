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
 * @interface GetBookingsRequest
 */
export interface GetBookingsRequest {
    /**
     *
     * @type {Date}
     * @memberof GetBookingsRequest
     */
    endDate?: Date;
    /**
     *
     * @type {Date}
     * @memberof GetBookingsRequest
     */
    startDate?: Date;
    /**
     *
     * @type {string}
     * @memberof GetBookingsRequest
     */
    timeZoneId?: string;
}
export declare function GetBookingsRequestFromJSON(json: any): GetBookingsRequest;
export declare function GetBookingsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetBookingsRequest;
export declare function GetBookingsRequestToJSON(value?: GetBookingsRequest | null): any;
