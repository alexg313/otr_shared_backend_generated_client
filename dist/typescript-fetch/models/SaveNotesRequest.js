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
export function SaveNotesRequestFromJSON(json) {
    return SaveNotesRequestFromJSONTyped(json, false);
}
export function SaveNotesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'note': json['note'],
        'noteId': !exists(json, 'noteId') ? undefined : json['noteId'],
        'noteType': json['noteType'],
        'referenceId': json['referenceId'],
    };
}
export function SaveNotesRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'note': value.note,
        'noteId': value.noteId,
        'noteType': value.noteType,
        'referenceId': value.referenceId,
    };
}
/**
* @export
* @enum {string}
*/
export var SaveNotesRequestNoteTypeEnum;
(function (SaveNotesRequestNoteTypeEnum) {
    SaveNotesRequestNoteTypeEnum["CASE"] = "CASE";
    SaveNotesRequestNoteTypeEnum["LAWFIRM"] = "LAWFIRM";
    SaveNotesRequestNoteTypeEnum["PHONELEAD"] = "PHONE_LEAD";
    SaveNotesRequestNoteTypeEnum["USER"] = "USER";
})(SaveNotesRequestNoteTypeEnum || (SaveNotesRequestNoteTypeEnum = {}));
