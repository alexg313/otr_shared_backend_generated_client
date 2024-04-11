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
import { ViolationInputRequest } from './';
/**
 *
 * @export
 * @interface GeoRatesRequest
 */
export interface GeoRatesRequest {
    /**
     *
     * @type {Date}
     * @memberof GeoRatesRequest
     */
    courtDate?: Date;
    /**
     *
     * @type {string}
     * @memberof GeoRatesRequest
     */
    courtId?: string;
    /**
     *
     * @type {boolean}
     * @memberof GeoRatesRequest
     */
    isCDL?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GeoRatesRequest
     */
    isFTA?: boolean;
    /**
     *
     * @type {number}
     * @memberof GeoRatesRequest
     */
    legalServiceId?: number;
    /**
     *
     * @type {number}
     * @memberof GeoRatesRequest
     */
    violationCount?: number;
    /**
     *
     * @type {Array<ViolationInputRequest>}
     * @memberof GeoRatesRequest
     */
    violations?: Array<ViolationInputRequest>;
}
export declare function GeoRatesRequestFromJSON(json: any): GeoRatesRequest;
export declare function GeoRatesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeoRatesRequest;
export declare function GeoRatesRequestToJSON(value?: GeoRatesRequest | null): any;
