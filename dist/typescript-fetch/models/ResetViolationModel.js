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
export function ResetViolationModelFromJSON(json) {
    return ResetViolationModelFromJSONTyped(json, false);
}
export function ResetViolationModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'regionCode': !exists(json, 'regionCode') ? undefined : json['regionCode'],
        'violationClass': !exists(json, 'violationClass') ? undefined : json['violationClass'],
        'violationId': !exists(json, 'violationId') ? undefined : json['violationId'],
    };
}
export function ResetViolationModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'regionCode': value.regionCode,
        'violationClass': value.violationClass,
        'violationId': value.violationId,
    };
}
/**
* @export
* @enum {string}
*/
export var ResetViolationModelViolationClassEnum;
(function (ResetViolationModelViolationClassEnum) {
    ResetViolationModelViolationClassEnum["CLASS1FELONY"] = "CLASS_1_FELONY";
    ResetViolationModelViolationClassEnum["CLASS1MISDEMEANOR"] = "CLASS_1_MISDEMEANOR";
    ResetViolationModelViolationClassEnum["CLASS2FELONY"] = "CLASS_2_FELONY";
    ResetViolationModelViolationClassEnum["CLASS2MISDEMEANOR"] = "CLASS_2_MISDEMEANOR";
    ResetViolationModelViolationClassEnum["CLASS3FELONY"] = "CLASS_3_FELONY";
    ResetViolationModelViolationClassEnum["CLASS3MISDEMEANOR"] = "CLASS_3_MISDEMEANOR";
    ResetViolationModelViolationClassEnum["CLASS4FELONY"] = "CLASS_4_FELONY";
    ResetViolationModelViolationClassEnum["CLASS4MISDEMEANOR"] = "CLASS_4_MISDEMEANOR";
    ResetViolationModelViolationClassEnum["CLASS5FELONY"] = "CLASS_5_FELONY";
    ResetViolationModelViolationClassEnum["CLASS6FELONY"] = "CLASS_6_FELONY";
    ResetViolationModelViolationClassEnum["CLASSA1MISDEMEANOR"] = "CLASS_A1_MISDEMEANOR";
    ResetViolationModelViolationClassEnum["CLASSAFELONY"] = "CLASS_A_FELONY";
    ResetViolationModelViolationClassEnum["CLASSAINFRACTION"] = "CLASS_A_INFRACTION";
    ResetViolationModelViolationClassEnum["CLASSAMISDEMEANOR"] = "CLASS_A_MISDEMEANOR";
    ResetViolationModelViolationClassEnum["CLASSAVIOLATION"] = "CLASS_A_VIOLATION";
    ResetViolationModelViolationClassEnum["CLASSBFELONY"] = "CLASS_B_FELONY";
    ResetViolationModelViolationClassEnum["CLASSBINFRACTION"] = "CLASS_B_INFRACTION";
    ResetViolationModelViolationClassEnum["CLASSBMISDEMEANOR"] = "CLASS_B_MISDEMEANOR";
    ResetViolationModelViolationClassEnum["CLASSBVIOLATION"] = "CLASS_B_VIOLATION";
    ResetViolationModelViolationClassEnum["CLASSCFELONY"] = "CLASS_C_FELONY";
    ResetViolationModelViolationClassEnum["CLASSCINFRACTION"] = "CLASS_C_INFRACTION";
    ResetViolationModelViolationClassEnum["CLASSCMISDEMEANOR"] = "CLASS_C_MISDEMEANOR";
    ResetViolationModelViolationClassEnum["CLASSCVIOLATION"] = "CLASS_C_VIOLATION";
    ResetViolationModelViolationClassEnum["CLASSDFELONY"] = "CLASS_D_FELONY";
    ResetViolationModelViolationClassEnum["CLASSDMISDEMEANOR"] = "CLASS_D_MISDEMEANOR";
    ResetViolationModelViolationClassEnum["CLASSDVIOLATION"] = "CLASS_D_VIOLATION";
    ResetViolationModelViolationClassEnum["CLASSEFELONY"] = "CLASS_E_FELONY";
    ResetViolationModelViolationClassEnum["CLASSFFELONY"] = "CLASS_F_FELONY";
    ResetViolationModelViolationClassEnum["CLASSHFELONY"] = "CLASS_H_FELONY";
    ResetViolationModelViolationClassEnum["DISORDERLYPERSONSOFFENSE"] = "DISORDERLY_PERSONS_OFFENSE";
    ResetViolationModelViolationClassEnum["FELONY"] = "FELONY";
    ResetViolationModelViolationClassEnum["FELONY1STDEGREE"] = "FELONY_1ST_DEGREE";
    ResetViolationModelViolationClassEnum["FELONY2NDDEGREE"] = "FELONY_2ND_DEGREE";
    ResetViolationModelViolationClassEnum["FELONY3RDDEGREE"] = "FELONY_3RD_DEGREE";
    ResetViolationModelViolationClassEnum["FELONY4THDEGREE"] = "FELONY_4TH_DEGREE";
    ResetViolationModelViolationClassEnum["FELONY5THDEGREE"] = "FELONY_5TH_DEGREE";
    ResetViolationModelViolationClassEnum["GROSSMISDEMEANOR"] = "GROSS_MISDEMEANOR";
    ResetViolationModelViolationClassEnum["HIGHANDAGGRAVATEDMISDEMEANOR"] = "HIGH_AND_AGGRAVATED_MISDEMEANOR";
    ResetViolationModelViolationClassEnum["INFRACTION"] = "INFRACTION";
    ResetViolationModelViolationClassEnum["LEVEL4FELONY"] = "LEVEL_4_FELONY";
    ResetViolationModelViolationClassEnum["LEVEL5FELONY"] = "LEVEL_5_FELONY";
    ResetViolationModelViolationClassEnum["LEVEL6FELONY"] = "LEVEL_6_FELONY";
    ResetViolationModelViolationClassEnum["MINORMISDEMEANOR"] = "MINOR_MISDEMEANOR";
    ResetViolationModelViolationClassEnum["MISDEMEANOR"] = "MISDEMEANOR";
    ResetViolationModelViolationClassEnum["MISDEMEANOR1STDEGREE"] = "MISDEMEANOR_1ST_DEGREE";
    ResetViolationModelViolationClassEnum["MISDEMEANOR2NDDEGREE"] = "MISDEMEANOR_2ND_DEGREE";
    ResetViolationModelViolationClassEnum["MISDEMEANOR3RDDEGREE"] = "MISDEMEANOR_3RD_DEGREE";
    ResetViolationModelViolationClassEnum["MISDEMEANOR4THDEGREE"] = "MISDEMEANOR_4TH_DEGREE";
    ResetViolationModelViolationClassEnum["MISDEMEANORWITHREFUND"] = "MISDEMEANOR_WITH_REFUND";
    ResetViolationModelViolationClassEnum["NONMOVING"] = "NON_MOVING";
    ResetViolationModelViolationClassEnum["NONREPORTABLE"] = "NON_REPORTABLE";
    ResetViolationModelViolationClassEnum["PETTYMISDEMEANOR"] = "PETTY_MISDEMEANOR";
    ResetViolationModelViolationClassEnum["QUASICRIMINAL"] = "QUASI_CRIMINAL";
    ResetViolationModelViolationClassEnum["SUMMARYOFFENSE"] = "SUMMARY_OFFENSE";
    ResetViolationModelViolationClassEnum["SUMMARYOFFENSENOREFUND"] = "SUMMARY_OFFENSE_NO_REFUND";
    ResetViolationModelViolationClassEnum["WOBBLERTOFELONY"] = "WOBBLER_TO_FELONY";
    ResetViolationModelViolationClassEnum["WOBBLERTOMISDEMEANOR"] = "WOBBLER_TO_MISDEMEANOR";
})(ResetViolationModelViolationClassEnum || (ResetViolationModelViolationClassEnum = {}));
