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
export function AccountLevelFeeFromJSON(json) {
    return AccountLevelFeeFromJSONTyped(json, false);
}
export function AccountLevelFeeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'classification': !exists(json, 'classification') ? undefined : json['classification'],
        'classificationId': !exists(json, 'classificationId') ? undefined : json['classificationId'],
        'isDeprecated': !exists(json, 'isDeprecated') ? undefined : json['isDeprecated'],
        'isEnabled': !exists(json, 'isEnabled') ? undefined : json['isEnabled'],
        'isPermitted': !exists(json, 'isPermitted') ? undefined : json['isPermitted'],
        'lawfirmFee': !exists(json, 'lawfirmFee') ? undefined : json['lawfirmFee'],
        'lawyerfriendlyClassName': !exists(json, 'lawyerfriendlyClassName') ? undefined : json['lawyerfriendlyClassName'],
        'refundEligibility': !exists(json, 'refundEligibility') ? undefined : json['refundEligibility'],
        'regionCode': !exists(json, 'regionCode') ? undefined : json['regionCode'],
        'violationCodes': !exists(json, 'violationCodes') ? undefined : json['violationCodes'],
        'violationId': !exists(json, 'violationId') ? undefined : json['violationId'],
        'violationName': !exists(json, 'violationName') ? undefined : json['violationName'],
    };
}
export function AccountLevelFeeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'classification': value.classification,
        'classificationId': value.classificationId,
        'isDeprecated': value.isDeprecated,
        'isEnabled': value.isEnabled,
        'isPermitted': value.isPermitted,
        'lawfirmFee': value.lawfirmFee,
        'lawyerfriendlyClassName': value.lawyerfriendlyClassName,
        'refundEligibility': value.refundEligibility,
        'regionCode': value.regionCode,
        'violationCodes': value.violationCodes,
        'violationId': value.violationId,
        'violationName': value.violationName,
    };
}
/**
* @export
* @enum {string}
*/
export var AccountLevelFeeClassificationEnum;
(function (AccountLevelFeeClassificationEnum) {
    AccountLevelFeeClassificationEnum["CLASS1FELONY"] = "CLASS_1_FELONY";
    AccountLevelFeeClassificationEnum["CLASS1MISDEMEANOR"] = "CLASS_1_MISDEMEANOR";
    AccountLevelFeeClassificationEnum["CLASS2FELONY"] = "CLASS_2_FELONY";
    AccountLevelFeeClassificationEnum["CLASS2MISDEMEANOR"] = "CLASS_2_MISDEMEANOR";
    AccountLevelFeeClassificationEnum["CLASS3FELONY"] = "CLASS_3_FELONY";
    AccountLevelFeeClassificationEnum["CLASS3MISDEMEANOR"] = "CLASS_3_MISDEMEANOR";
    AccountLevelFeeClassificationEnum["CLASS4FELONY"] = "CLASS_4_FELONY";
    AccountLevelFeeClassificationEnum["CLASS4MISDEMEANOR"] = "CLASS_4_MISDEMEANOR";
    AccountLevelFeeClassificationEnum["CLASS5FELONY"] = "CLASS_5_FELONY";
    AccountLevelFeeClassificationEnum["CLASS6FELONY"] = "CLASS_6_FELONY";
    AccountLevelFeeClassificationEnum["CLASSA1MISDEMEANOR"] = "CLASS_A1_MISDEMEANOR";
    AccountLevelFeeClassificationEnum["CLASSAFELONY"] = "CLASS_A_FELONY";
    AccountLevelFeeClassificationEnum["CLASSAINFRACTION"] = "CLASS_A_INFRACTION";
    AccountLevelFeeClassificationEnum["CLASSAMISDEMEANOR"] = "CLASS_A_MISDEMEANOR";
    AccountLevelFeeClassificationEnum["CLASSAVIOLATION"] = "CLASS_A_VIOLATION";
    AccountLevelFeeClassificationEnum["CLASSBFELONY"] = "CLASS_B_FELONY";
    AccountLevelFeeClassificationEnum["CLASSBINFRACTION"] = "CLASS_B_INFRACTION";
    AccountLevelFeeClassificationEnum["CLASSBMISDEMEANOR"] = "CLASS_B_MISDEMEANOR";
    AccountLevelFeeClassificationEnum["CLASSBVIOLATION"] = "CLASS_B_VIOLATION";
    AccountLevelFeeClassificationEnum["CLASSCFELONY"] = "CLASS_C_FELONY";
    AccountLevelFeeClassificationEnum["CLASSCINFRACTION"] = "CLASS_C_INFRACTION";
    AccountLevelFeeClassificationEnum["CLASSCMISDEMEANOR"] = "CLASS_C_MISDEMEANOR";
    AccountLevelFeeClassificationEnum["CLASSCVIOLATION"] = "CLASS_C_VIOLATION";
    AccountLevelFeeClassificationEnum["CLASSDFELONY"] = "CLASS_D_FELONY";
    AccountLevelFeeClassificationEnum["CLASSDMISDEMEANOR"] = "CLASS_D_MISDEMEANOR";
    AccountLevelFeeClassificationEnum["CLASSDVIOLATION"] = "CLASS_D_VIOLATION";
    AccountLevelFeeClassificationEnum["CLASSEFELONY"] = "CLASS_E_FELONY";
    AccountLevelFeeClassificationEnum["CLASSFFELONY"] = "CLASS_F_FELONY";
    AccountLevelFeeClassificationEnum["CLASSHFELONY"] = "CLASS_H_FELONY";
    AccountLevelFeeClassificationEnum["DISORDERLYPERSONSOFFENSE"] = "DISORDERLY_PERSONS_OFFENSE";
    AccountLevelFeeClassificationEnum["FELONY"] = "FELONY";
    AccountLevelFeeClassificationEnum["FELONY1STDEGREE"] = "FELONY_1ST_DEGREE";
    AccountLevelFeeClassificationEnum["FELONY2NDDEGREE"] = "FELONY_2ND_DEGREE";
    AccountLevelFeeClassificationEnum["FELONY3RDDEGREE"] = "FELONY_3RD_DEGREE";
    AccountLevelFeeClassificationEnum["FELONY4THDEGREE"] = "FELONY_4TH_DEGREE";
    AccountLevelFeeClassificationEnum["FELONY5THDEGREE"] = "FELONY_5TH_DEGREE";
    AccountLevelFeeClassificationEnum["GROSSMISDEMEANOR"] = "GROSS_MISDEMEANOR";
    AccountLevelFeeClassificationEnum["HIGHANDAGGRAVATEDMISDEMEANOR"] = "HIGH_AND_AGGRAVATED_MISDEMEANOR";
    AccountLevelFeeClassificationEnum["INFRACTION"] = "INFRACTION";
    AccountLevelFeeClassificationEnum["LEVEL4FELONY"] = "LEVEL_4_FELONY";
    AccountLevelFeeClassificationEnum["LEVEL5FELONY"] = "LEVEL_5_FELONY";
    AccountLevelFeeClassificationEnum["LEVEL6FELONY"] = "LEVEL_6_FELONY";
    AccountLevelFeeClassificationEnum["MINORMISDEMEANOR"] = "MINOR_MISDEMEANOR";
    AccountLevelFeeClassificationEnum["MISDEMEANOR"] = "MISDEMEANOR";
    AccountLevelFeeClassificationEnum["MISDEMEANOR1STDEGREE"] = "MISDEMEANOR_1ST_DEGREE";
    AccountLevelFeeClassificationEnum["MISDEMEANOR2NDDEGREE"] = "MISDEMEANOR_2ND_DEGREE";
    AccountLevelFeeClassificationEnum["MISDEMEANOR3RDDEGREE"] = "MISDEMEANOR_3RD_DEGREE";
    AccountLevelFeeClassificationEnum["MISDEMEANOR4THDEGREE"] = "MISDEMEANOR_4TH_DEGREE";
    AccountLevelFeeClassificationEnum["MISDEMEANORWITHREFUND"] = "MISDEMEANOR_WITH_REFUND";
    AccountLevelFeeClassificationEnum["NONMOVING"] = "NON_MOVING";
    AccountLevelFeeClassificationEnum["NONREPORTABLE"] = "NON_REPORTABLE";
    AccountLevelFeeClassificationEnum["PETTYMISDEMEANOR"] = "PETTY_MISDEMEANOR";
    AccountLevelFeeClassificationEnum["QUASICRIMINAL"] = "QUASI_CRIMINAL";
    AccountLevelFeeClassificationEnum["SUMMARYOFFENSE"] = "SUMMARY_OFFENSE";
    AccountLevelFeeClassificationEnum["SUMMARYOFFENSENOREFUND"] = "SUMMARY_OFFENSE_NO_REFUND";
    AccountLevelFeeClassificationEnum["WOBBLERTOFELONY"] = "WOBBLER_TO_FELONY";
    AccountLevelFeeClassificationEnum["WOBBLERTOMISDEMEANOR"] = "WOBBLER_TO_MISDEMEANOR";
})(AccountLevelFeeClassificationEnum || (AccountLevelFeeClassificationEnum = {}));
/**
* @export
* @enum {string}
*/
export var AccountLevelFeeRefundEligibilityEnum;
(function (AccountLevelFeeRefundEligibilityEnum) {
    AccountLevelFeeRefundEligibilityEnum["FULLREFUND"] = "FULL_REFUND";
    AccountLevelFeeRefundEligibilityEnum["NOREFUND"] = "NO_REFUND";
})(AccountLevelFeeRefundEligibilityEnum || (AccountLevelFeeRefundEligibilityEnum = {}));
