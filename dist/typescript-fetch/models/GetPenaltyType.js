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
export function GetPenaltyTypeFromJSON(json) {
    return GetPenaltyTypeFromJSONTyped(json, false);
}
export function GetPenaltyTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': !exists(json, 'type') ? undefined : json['type'],
        'typeId': !exists(json, 'typeId') ? undefined : json['typeId'],
    };
}
export function GetPenaltyTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'typeId': value.typeId,
    };
}
/**
* @export
* @enum {string}
*/
export var GetPenaltyTypeTypeEnum;
(function (GetPenaltyTypeTypeEnum) {
    GetPenaltyTypeTypeEnum["DEMERITPOINTS"] = "DEMERIT_POINTS";
    GetPenaltyTypeTypeEnum["INCARCERATIONMAXDAYS"] = "INCARCERATION_MAX_DAYS";
    GetPenaltyTypeTypeEnum["INCARCERATIONMINDAYS"] = "INCARCERATION_MIN_DAYS";
    GetPenaltyTypeTypeEnum["INSURANCEPOINTS"] = "INSURANCE_POINTS";
    GetPenaltyTypeTypeEnum["INSURANCERATEINCREASE"] = "INSURANCE_RATE_INCREASE";
    GetPenaltyTypeTypeEnum["LICENSEREVOCATIONMAXDAYS"] = "LICENSE_REVOCATION_MAX_DAYS";
    GetPenaltyTypeTypeEnum["LICENSEREVOCATIONMINDAYS"] = "LICENSE_REVOCATION_MIN_DAYS";
    GetPenaltyTypeTypeEnum["LICENSESUSPENSIONMAXDAYS"] = "LICENSE_SUSPENSION_MAX_DAYS";
    GetPenaltyTypeTypeEnum["LICENSESUSPENSIONMINDAYS"] = "LICENSE_SUSPENSION_MIN_DAYS";
    GetPenaltyTypeTypeEnum["MANDATORYCOURTAPPEARANCE"] = "MANDATORY_COURT_APPEARANCE";
    GetPenaltyTypeTypeEnum["MANDATORYCOURTAPPEARANCEWITHATTORNEY"] = "MANDATORY_COURT_APPEARANCE_WITH_ATTORNEY";
    GetPenaltyTypeTypeEnum["MAXBAILAMOUNT"] = "MAX_BAIL_AMOUNT";
    GetPenaltyTypeTypeEnum["MINBAILAMOUNT"] = "MIN_BAIL_AMOUNT";
    GetPenaltyTypeTypeEnum["PROBATIONINDAYS"] = "PROBATION_IN_DAYS";
    GetPenaltyTypeTypeEnum["TOTALBAILAMOUNT"] = "TOTAL_BAIL_AMOUNT";
})(GetPenaltyTypeTypeEnum || (GetPenaltyTypeTypeEnum = {}));
