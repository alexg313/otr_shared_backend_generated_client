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
 * @interface MergeTableRecord
 */
export interface MergeTableRecord {
    /**
     *
     * @type {string}
     * @memberof MergeTableRecord
     */
    tableName?: string;
    /**
     *
     * @type {number}
     * @memberof MergeTableRecord
     */
    updateRowCount?: number;
}
export declare function MergeTableRecordFromJSON(json: any): MergeTableRecord;
export declare function MergeTableRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): MergeTableRecord;
export declare function MergeTableRecordToJSON(value?: MergeTableRecord | null): any;
