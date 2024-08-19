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
import { MergeTableChangeFromJSON, MergeTableChangeToJSON, MergeTableRecordFromJSON, MergeTableRecordToJSON, } from './';
export function MergeStatusReportFromJSON(json) {
    return MergeStatusReportFromJSONTyped(json, false);
}
export function MergeStatusReportFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'otherChanges': !exists(json, 'otherChanges') ? undefined : (json['otherChanges'].map(MergeTableChangeFromJSON)),
        'tableMerges': !exists(json, 'tableMerges') ? undefined : (json['tableMerges'].map(MergeTableRecordFromJSON)),
    };
}
export function MergeStatusReportToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'otherChanges': value.otherChanges === undefined ? undefined : (value.otherChanges.map(MergeTableChangeToJSON)),
        'tableMerges': value.tableMerges === undefined ? undefined : (value.tableMerges.map(MergeTableRecordToJSON)),
    };
}
