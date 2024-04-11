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
import { ListLawfirmSurchargeModelFromJSON, ListLawfirmSurchargeModelToJSON, } from './';
export function ListLawfirmSurchargeTypeModelFromJSON(json) {
    return ListLawfirmSurchargeTypeModelFromJSONTyped(json, false);
}
export function ListLawfirmSurchargeTypeModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fees': !exists(json, 'fees') ? undefined : (json['fees'].map(ListLawfirmSurchargeModelFromJSON)),
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}
export function ListLawfirmSurchargeTypeModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fees': value.fees === undefined ? undefined : (value.fees.map(ListLawfirmSurchargeModelToJSON)),
        'type': value.type,
    };
}
/**
* @export
* @enum {string}
*/
export var ListLawfirmSurchargeTypeModelTypeEnum;
(function (ListLawfirmSurchargeTypeModelTypeEnum) {
    ListLawfirmSurchargeTypeModelTypeEnum["CDL"] = "CDL";
    ListLawfirmSurchargeTypeModelTypeEnum["FAILURETOAPPEAR"] = "FAILURE_TO_APPEAR";
    ListLawfirmSurchargeTypeModelTypeEnum["LATE"] = "LATE";
    ListLawfirmSurchargeTypeModelTypeEnum["MULTIPLEVIOLATIONS"] = "MULTIPLE_VIOLATIONS";
    ListLawfirmSurchargeTypeModelTypeEnum["OUTOFSTATE"] = "OUT_OF_STATE";
    ListLawfirmSurchargeTypeModelTypeEnum["SHORTNOTICE"] = "SHORT_NOTICE";
    ListLawfirmSurchargeTypeModelTypeEnum["WARRANT"] = "WARRANT";
})(ListLawfirmSurchargeTypeModelTypeEnum || (ListLawfirmSurchargeTypeModelTypeEnum = {}));
