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
import { MergeTableChange, MergeTableRecord } from './';
/**
 *
 * @export
 * @interface MergeStatusReport
 */
export interface MergeStatusReport {
    /**
     *
     * @type {Array<MergeTableChange>}
     * @memberof MergeStatusReport
     */
    otherChanges?: Array<MergeTableChange>;
    /**
     *
     * @type {Array<MergeTableRecord>}
     * @memberof MergeStatusReport
     */
    tableMerges?: Array<MergeTableRecord>;
}
export declare function MergeStatusReportFromJSON(json: any): MergeStatusReport;
export declare function MergeStatusReportFromJSONTyped(json: any, ignoreDiscriminator: boolean): MergeStatusReport;
export declare function MergeStatusReportToJSON(value?: MergeStatusReport | null): any;
