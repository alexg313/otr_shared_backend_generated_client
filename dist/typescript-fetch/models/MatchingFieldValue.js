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
export function MatchingFieldValueFromJSON(json) {
    return MatchingFieldValueFromJSONTyped(json, false);
}
export function MatchingFieldValueFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'matchingField': !exists(json, 'matchingField') ? undefined : json['matchingField'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}
export function MatchingFieldValueToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'matchingField': value.matchingField,
        'value': value.value,
    };
}
/**
* @export
* @enum {string}
*/
export var MatchingFieldValueMatchingFieldEnum;
(function (MatchingFieldValueMatchingFieldEnum) {
    MatchingFieldValueMatchingFieldEnum["COURTID"] = "COURT_ID";
    MatchingFieldValueMatchingFieldEnum["VIOLATIONCLASSIFICATIONID"] = "VIOLATION_CLASSIFICATION_ID";
    MatchingFieldValueMatchingFieldEnum["VIOLATIONID"] = "VIOLATION_ID";
})(MatchingFieldValueMatchingFieldEnum || (MatchingFieldValueMatchingFieldEnum = {}));
