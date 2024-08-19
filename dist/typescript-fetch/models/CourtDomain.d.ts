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
import { AddressDomain, CountyDomain, TimeZone } from './';
/**
 *
 * @export
 * @interface CourtDomain
 */
export interface CourtDomain {
    /**
     *
     * @type {AddressDomain}
     * @memberof CourtDomain
     */
    address?: AddressDomain;
    /**
     *
     * @type {string}
     * @memberof CourtDomain
     */
    county?: string;
    /**
     *
     * @type {number}
     * @memberof CourtDomain
     */
    countyId?: number;
    /**
     *
     * @type {CountyDomain}
     * @memberof CourtDomain
     */
    countyObj?: CountyDomain;
    /**
     *
     * @type {string}
     * @memberof CourtDomain
     */
    courtCode?: string;
    /**
     *
     * @type {number}
     * @memberof CourtDomain
     */
    courtId?: number;
    /**
     *
     * @type {string}
     * @memberof CourtDomain
     */
    courtName?: string;
    /**
     *
     * @type {string}
     * @memberof CourtDomain
     */
    courtNameAdditional?: string;
    /**
     *
     * @type {string}
     * @memberof CourtDomain
     */
    courtType?: CourtDomainCourtTypeEnum;
    /**
     *
     * @type {string}
     * @memberof CourtDomain
     */
    lookupCaseInfoLink?: string;
    /**
     *
     * @type {number}
     * @memberof CourtDomain
     */
    otrTargetFee?: number;
    /**
     *
     * @type {TimeZone}
     * @memberof CourtDomain
     */
    timeZone?: TimeZone;
    /**
     *
     * @type {number}
     * @memberof CourtDomain
     */
    unserviceableRequests?: number;
    /**
     *
     * @type {string}
     * @memberof CourtDomain
     */
    website?: string;
}
export declare function CourtDomainFromJSON(json: any): CourtDomain;
export declare function CourtDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): CourtDomain;
export declare function CourtDomainToJSON(value?: CourtDomain | null): any;
/**
* @export
* @enum {string}
*/
export declare enum CourtDomainCourtTypeEnum {
    CIRCUIT = "CIRCUIT",
    COUNTYCLERK = "COUNTY_CLERK",
    DISTRICT = "DISTRICT",
    JUVENILE = "JUVENILE",
    MUNICIPAL = "MUNICIPAL",
    PROBATION = "PROBATION",
    SUPERIOR = "SUPERIOR",
    VIOLATIONSBUREAU = "VIOLATIONS_BUREAU"
}
