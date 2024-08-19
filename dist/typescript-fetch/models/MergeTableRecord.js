/* tslint:disable */
/* eslint-disable */
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
import { exists } from '../runtime';
export function MergeTableRecordFromJSON(json) {
    return MergeTableRecordFromJSONTyped(json, false);
}
export function MergeTableRecordFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'tableName': !exists(json, 'tableName') ? undefined : json['tableName'],
        'updateRowCount': !exists(json, 'updateRowCount') ? undefined : json['updateRowCount'],
    };
}
export function MergeTableRecordToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'tableName': value.tableName,
        'updateRowCount': value.updateRowCount,
    };
}
