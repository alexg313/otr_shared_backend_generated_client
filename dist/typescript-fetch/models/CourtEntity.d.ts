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
import { AddressEntity, CountyEntity } from './';
/**
 *
 * @export
 * @interface CourtEntity
 */
export interface CourtEntity {
    /**
     *
     * @type {AddressEntity}
     * @memberof CourtEntity
     */
    address?: AddressEntity;
    /**
     *
     * @type {CountyEntity}
     * @memberof CourtEntity
     */
    county?: CountyEntity;
    /**
     *
     * @type {string}
     * @memberof CourtEntity
     */
    courtCode?: string;
    /**
     *
     * @type {number}
     * @memberof CourtEntity
     */
    courtId?: number;
    /**
     *
     * @type {string}
     * @memberof CourtEntity
     */
    courtName?: string;
    /**
     *
     * @type {string}
     * @memberof CourtEntity
     */
    courtNameAdditional?: string;
    /**
     *
     * @type {string}
     * @memberof CourtEntity
     */
    courtType?: CourtEntityCourtTypeEnum;
    /**
     *
     * @type {string}
     * @memberof CourtEntity
     */
    lookupCaseInfoLink?: string;
    /**
     *
     * @type {number}
     * @memberof CourtEntity
     */
    otrTargetFee?: number;
    /**
     *
     * @type {number}
     * @memberof CourtEntity
     */
    similarityScore?: number;
    /**
     *
     * @type {string}
     * @memberof CourtEntity
     */
    website?: string;
}
export declare function CourtEntityFromJSON(json: any): CourtEntity;
export declare function CourtEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): CourtEntity;
export declare function CourtEntityToJSON(value?: CourtEntity | null): any;
/**
* @export
* @enum {string}
*/
export declare enum CourtEntityCourtTypeEnum {
    CIRCUIT = "CIRCUIT",
    COUNTYCLERK = "COUNTY_CLERK",
    DISTRICT = "DISTRICT",
    JUVENILE = "JUVENILE",
    MUNICIPAL = "MUNICIPAL",
    PROBATION = "PROBATION",
    SUPERIOR = "SUPERIOR",
    VIOLATIONSBUREAU = "VIOLATIONS_BUREAU"
}
