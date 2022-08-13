"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddViolationResponse = void 0;
var AddViolationResponse;
(function (AddViolationResponse) {
    var ViolationClassificationEnum;
    (function (ViolationClassificationEnum) {
        ViolationClassificationEnum[ViolationClassificationEnum["CLASS1FELONY"] = 'CLASS_1_FELONY'] = "CLASS1FELONY";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASS1MISDEMEANOR"] = 'CLASS_1_MISDEMEANOR'] = "CLASS1MISDEMEANOR";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASS2FELONY"] = 'CLASS_2_FELONY'] = "CLASS2FELONY";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASS2MISDEMEANOR"] = 'CLASS_2_MISDEMEANOR'] = "CLASS2MISDEMEANOR";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASS3FELONY"] = 'CLASS_3_FELONY'] = "CLASS3FELONY";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASS3MISDEMEANOR"] = 'CLASS_3_MISDEMEANOR'] = "CLASS3MISDEMEANOR";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASS4FELONY"] = 'CLASS_4_FELONY'] = "CLASS4FELONY";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASS4MISDEMEANOR"] = 'CLASS_4_MISDEMEANOR'] = "CLASS4MISDEMEANOR";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASS5FELONY"] = 'CLASS_5_FELONY'] = "CLASS5FELONY";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASS6FELONY"] = 'CLASS_6_FELONY'] = "CLASS6FELONY";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASSA1MISDEMEANOR"] = 'CLASS_A1_MISDEMEANOR'] = "CLASSA1MISDEMEANOR";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASSAFELONY"] = 'CLASS_A_FELONY'] = "CLASSAFELONY";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASSAINFRACTION"] = 'CLASS_A_INFRACTION'] = "CLASSAINFRACTION";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASSAMISDEMEANOR"] = 'CLASS_A_MISDEMEANOR'] = "CLASSAMISDEMEANOR";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASSAVIOLATION"] = 'CLASS_A_VIOLATION'] = "CLASSAVIOLATION";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASSBFELONY"] = 'CLASS_B_FELONY'] = "CLASSBFELONY";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASSBINFRACTION"] = 'CLASS_B_INFRACTION'] = "CLASSBINFRACTION";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASSBMISDEMEANOR"] = 'CLASS_B_MISDEMEANOR'] = "CLASSBMISDEMEANOR";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASSBVIOLATION"] = 'CLASS_B_VIOLATION'] = "CLASSBVIOLATION";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASSCFELONY"] = 'CLASS_C_FELONY'] = "CLASSCFELONY";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASSCINFRACTION"] = 'CLASS_C_INFRACTION'] = "CLASSCINFRACTION";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASSCMISDEMEANOR"] = 'CLASS_C_MISDEMEANOR'] = "CLASSCMISDEMEANOR";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASSCVIOLATION"] = 'CLASS_C_VIOLATION'] = "CLASSCVIOLATION";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASSDFELONY"] = 'CLASS_D_FELONY'] = "CLASSDFELONY";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASSDMISDEMEANOR"] = 'CLASS_D_MISDEMEANOR'] = "CLASSDMISDEMEANOR";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASSDVIOLATION"] = 'CLASS_D_VIOLATION'] = "CLASSDVIOLATION";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASSEFELONY"] = 'CLASS_E_FELONY'] = "CLASSEFELONY";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASSFFELONY"] = 'CLASS_F_FELONY'] = "CLASSFFELONY";
        ViolationClassificationEnum[ViolationClassificationEnum["CLASSHFELONY"] = 'CLASS_H_FELONY'] = "CLASSHFELONY";
        ViolationClassificationEnum[ViolationClassificationEnum["DISORDERLYPERSONSOFFENSE"] = 'DISORDERLY_PERSONS_OFFENSE'] = "DISORDERLYPERSONSOFFENSE";
        ViolationClassificationEnum[ViolationClassificationEnum["FELONY"] = 'FELONY'] = "FELONY";
        ViolationClassificationEnum[ViolationClassificationEnum["FELONY1STDEGREE"] = 'FELONY_1ST_DEGREE'] = "FELONY1STDEGREE";
        ViolationClassificationEnum[ViolationClassificationEnum["FELONY2NDDEGREE"] = 'FELONY_2ND_DEGREE'] = "FELONY2NDDEGREE";
        ViolationClassificationEnum[ViolationClassificationEnum["FELONY3RDDEGREE"] = 'FELONY_3RD_DEGREE'] = "FELONY3RDDEGREE";
        ViolationClassificationEnum[ViolationClassificationEnum["FELONY4THDEGREE"] = 'FELONY_4TH_DEGREE'] = "FELONY4THDEGREE";
        ViolationClassificationEnum[ViolationClassificationEnum["FELONY5THDEGREE"] = 'FELONY_5TH_DEGREE'] = "FELONY5THDEGREE";
        ViolationClassificationEnum[ViolationClassificationEnum["GROSSMISDEMEANOR"] = 'GROSS_MISDEMEANOR'] = "GROSSMISDEMEANOR";
        ViolationClassificationEnum[ViolationClassificationEnum["HIGHANDAGGRAVATEDMISDEMEANOR"] = 'HIGH_AND_AGGRAVATED_MISDEMEANOR'] = "HIGHANDAGGRAVATEDMISDEMEANOR";
        ViolationClassificationEnum[ViolationClassificationEnum["INFRACTION"] = 'INFRACTION'] = "INFRACTION";
        ViolationClassificationEnum[ViolationClassificationEnum["LEVEL4FELONY"] = 'LEVEL_4_FELONY'] = "LEVEL4FELONY";
        ViolationClassificationEnum[ViolationClassificationEnum["LEVEL5FELONY"] = 'LEVEL_5_FELONY'] = "LEVEL5FELONY";
        ViolationClassificationEnum[ViolationClassificationEnum["LEVEL6FELONY"] = 'LEVEL_6_FELONY'] = "LEVEL6FELONY";
        ViolationClassificationEnum[ViolationClassificationEnum["MINORMISDEMEANOR"] = 'MINOR_MISDEMEANOR'] = "MINORMISDEMEANOR";
        ViolationClassificationEnum[ViolationClassificationEnum["MISDEMEANOR"] = 'MISDEMEANOR'] = "MISDEMEANOR";
        ViolationClassificationEnum[ViolationClassificationEnum["MISDEMEANOR1STDEGREE"] = 'MISDEMEANOR_1ST_DEGREE'] = "MISDEMEANOR1STDEGREE";
        ViolationClassificationEnum[ViolationClassificationEnum["MISDEMEANOR2NDDEGREE"] = 'MISDEMEANOR_2ND_DEGREE'] = "MISDEMEANOR2NDDEGREE";
        ViolationClassificationEnum[ViolationClassificationEnum["MISDEMEANOR3RDDEGREE"] = 'MISDEMEANOR_3RD_DEGREE'] = "MISDEMEANOR3RDDEGREE";
        ViolationClassificationEnum[ViolationClassificationEnum["MISDEMEANOR4THDEGREE"] = 'MISDEMEANOR_4TH_DEGREE'] = "MISDEMEANOR4THDEGREE";
        ViolationClassificationEnum[ViolationClassificationEnum["MISDEMEANORWITHREFUND"] = 'MISDEMEANOR_WITH_REFUND'] = "MISDEMEANORWITHREFUND";
        ViolationClassificationEnum[ViolationClassificationEnum["NONMOVING"] = 'NON_MOVING'] = "NONMOVING";
        ViolationClassificationEnum[ViolationClassificationEnum["NONREPORTABLE"] = 'NON_REPORTABLE'] = "NONREPORTABLE";
        ViolationClassificationEnum[ViolationClassificationEnum["PETTYMISDEMEANOR"] = 'PETTY_MISDEMEANOR'] = "PETTYMISDEMEANOR";
        ViolationClassificationEnum[ViolationClassificationEnum["QUASICRIMINAL"] = 'QUASI_CRIMINAL'] = "QUASICRIMINAL";
        ViolationClassificationEnum[ViolationClassificationEnum["SUMMARYOFFENSE"] = 'SUMMARY_OFFENSE'] = "SUMMARYOFFENSE";
        ViolationClassificationEnum[ViolationClassificationEnum["SUMMARYOFFENSENOREFUND"] = 'SUMMARY_OFFENSE_NO_REFUND'] = "SUMMARYOFFENSENOREFUND";
        ViolationClassificationEnum[ViolationClassificationEnum["WOBBLERTOFELONY"] = 'WOBBLER_TO_FELONY'] = "WOBBLERTOFELONY";
        ViolationClassificationEnum[ViolationClassificationEnum["WOBBLERTOMISDEMEANOR"] = 'WOBBLER_TO_MISDEMEANOR'] = "WOBBLERTOMISDEMEANOR";
    })(ViolationClassificationEnum = AddViolationResponse.ViolationClassificationEnum || (AddViolationResponse.ViolationClassificationEnum = {}));
})(AddViolationResponse = exports.AddViolationResponse || (exports.AddViolationResponse = {}));
