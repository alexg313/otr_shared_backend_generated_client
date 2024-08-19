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
import { ZoneId } from './';
/**
 *
 * @export
 * @interface CancellationAggregates
 */
export interface CancellationAggregates {
    /**
     *
     * @type {number}
     * @memberof CancellationAggregates
     */
    caseCancellationCount?: number;
    /**
     *
     * @type {string}
     * @memberof CancellationAggregates
     */
    endDate?: string;
    /**
     *
     * @type {number}
     * @memberof CancellationAggregates
     */
    revenue?: number;
    /**
     *
     * @type {string}
     * @memberof CancellationAggregates
     */
    startDate?: string;
    /**
     *
     * @type {number}
     * @memberof CancellationAggregates
     */
    transactionVolume?: number;
    /**
     *
     * @type {ZoneId}
     * @memberof CancellationAggregates
     */
    zoneId?: ZoneId;
}
export declare function CancellationAggregatesFromJSON(json: any): CancellationAggregates;
export declare function CancellationAggregatesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CancellationAggregates;
export declare function CancellationAggregatesToJSON(value?: CancellationAggregates | null): any;
