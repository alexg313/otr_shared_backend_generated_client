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
export function SettingResponseFromJSON(json) {
    return SettingResponseFromJSONTyped(json, false);
}
export function SettingResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'settingId': !exists(json, 'settingId') ? undefined : json['settingId'],
        'settingName': !exists(json, 'settingName') ? undefined : json['settingName'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}
export function SettingResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'settingId': value.settingId,
        'settingName': value.settingName,
        'type': value.type,
        'value': value.value,
    };
}
/**
* @export
* @enum {string}
*/
export var SettingResponseTypeEnum;
(function (SettingResponseTypeEnum) {
    SettingResponseTypeEnum["Boolean"] = "Boolean";
    SettingResponseTypeEnum["Integer"] = "Integer";
    SettingResponseTypeEnum["List"] = "List";
    SettingResponseTypeEnum["String"] = "String";
})(SettingResponseTypeEnum || (SettingResponseTypeEnum = {}));
