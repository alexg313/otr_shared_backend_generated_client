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
export var TicketLeadDomain;
(function (TicketLeadDomain) {
    let ClassificationEnum;
    (function (ClassificationEnum) {
        ClassificationEnum[ClassificationEnum["CLASS1FELONY"] = 'CLASS_1_FELONY'] = "CLASS1FELONY";
        ClassificationEnum[ClassificationEnum["CLASS1MISDEMEANOR"] = 'CLASS_1_MISDEMEANOR'] = "CLASS1MISDEMEANOR";
        ClassificationEnum[ClassificationEnum["CLASS2FELONY"] = 'CLASS_2_FELONY'] = "CLASS2FELONY";
        ClassificationEnum[ClassificationEnum["CLASS2MISDEMEANOR"] = 'CLASS_2_MISDEMEANOR'] = "CLASS2MISDEMEANOR";
        ClassificationEnum[ClassificationEnum["CLASS3FELONY"] = 'CLASS_3_FELONY'] = "CLASS3FELONY";
        ClassificationEnum[ClassificationEnum["CLASS3MISDEMEANOR"] = 'CLASS_3_MISDEMEANOR'] = "CLASS3MISDEMEANOR";
        ClassificationEnum[ClassificationEnum["CLASS4FELONY"] = 'CLASS_4_FELONY'] = "CLASS4FELONY";
        ClassificationEnum[ClassificationEnum["CLASS4MISDEMEANOR"] = 'CLASS_4_MISDEMEANOR'] = "CLASS4MISDEMEANOR";
        ClassificationEnum[ClassificationEnum["CLASS5FELONY"] = 'CLASS_5_FELONY'] = "CLASS5FELONY";
        ClassificationEnum[ClassificationEnum["CLASS6FELONY"] = 'CLASS_6_FELONY'] = "CLASS6FELONY";
        ClassificationEnum[ClassificationEnum["CLASSA1MISDEMEANOR"] = 'CLASS_A1_MISDEMEANOR'] = "CLASSA1MISDEMEANOR";
        ClassificationEnum[ClassificationEnum["CLASSAFELONY"] = 'CLASS_A_FELONY'] = "CLASSAFELONY";
        ClassificationEnum[ClassificationEnum["CLASSAINFRACTION"] = 'CLASS_A_INFRACTION'] = "CLASSAINFRACTION";
        ClassificationEnum[ClassificationEnum["CLASSAMISDEMEANOR"] = 'CLASS_A_MISDEMEANOR'] = "CLASSAMISDEMEANOR";
        ClassificationEnum[ClassificationEnum["CLASSAVIOLATION"] = 'CLASS_A_VIOLATION'] = "CLASSAVIOLATION";
        ClassificationEnum[ClassificationEnum["CLASSBFELONY"] = 'CLASS_B_FELONY'] = "CLASSBFELONY";
        ClassificationEnum[ClassificationEnum["CLASSBINFRACTION"] = 'CLASS_B_INFRACTION'] = "CLASSBINFRACTION";
        ClassificationEnum[ClassificationEnum["CLASSBMISDEMEANOR"] = 'CLASS_B_MISDEMEANOR'] = "CLASSBMISDEMEANOR";
        ClassificationEnum[ClassificationEnum["CLASSBVIOLATION"] = 'CLASS_B_VIOLATION'] = "CLASSBVIOLATION";
        ClassificationEnum[ClassificationEnum["CLASSCFELONY"] = 'CLASS_C_FELONY'] = "CLASSCFELONY";
        ClassificationEnum[ClassificationEnum["CLASSCINFRACTION"] = 'CLASS_C_INFRACTION'] = "CLASSCINFRACTION";
        ClassificationEnum[ClassificationEnum["CLASSCMISDEMEANOR"] = 'CLASS_C_MISDEMEANOR'] = "CLASSCMISDEMEANOR";
        ClassificationEnum[ClassificationEnum["CLASSCVIOLATION"] = 'CLASS_C_VIOLATION'] = "CLASSCVIOLATION";
        ClassificationEnum[ClassificationEnum["CLASSDFELONY"] = 'CLASS_D_FELONY'] = "CLASSDFELONY";
        ClassificationEnum[ClassificationEnum["CLASSDMISDEMEANOR"] = 'CLASS_D_MISDEMEANOR'] = "CLASSDMISDEMEANOR";
        ClassificationEnum[ClassificationEnum["CLASSDVIOLATION"] = 'CLASS_D_VIOLATION'] = "CLASSDVIOLATION";
        ClassificationEnum[ClassificationEnum["CLASSEFELONY"] = 'CLASS_E_FELONY'] = "CLASSEFELONY";
        ClassificationEnum[ClassificationEnum["CLASSFFELONY"] = 'CLASS_F_FELONY'] = "CLASSFFELONY";
        ClassificationEnum[ClassificationEnum["CLASSHFELONY"] = 'CLASS_H_FELONY'] = "CLASSHFELONY";
        ClassificationEnum[ClassificationEnum["DISORDERLYPERSONSOFFENSE"] = 'DISORDERLY_PERSONS_OFFENSE'] = "DISORDERLYPERSONSOFFENSE";
        ClassificationEnum[ClassificationEnum["FELONY"] = 'FELONY'] = "FELONY";
        ClassificationEnum[ClassificationEnum["FELONY1STDEGREE"] = 'FELONY_1ST_DEGREE'] = "FELONY1STDEGREE";
        ClassificationEnum[ClassificationEnum["FELONY2NDDEGREE"] = 'FELONY_2ND_DEGREE'] = "FELONY2NDDEGREE";
        ClassificationEnum[ClassificationEnum["FELONY3RDDEGREE"] = 'FELONY_3RD_DEGREE'] = "FELONY3RDDEGREE";
        ClassificationEnum[ClassificationEnum["FELONY4THDEGREE"] = 'FELONY_4TH_DEGREE'] = "FELONY4THDEGREE";
        ClassificationEnum[ClassificationEnum["FELONY5THDEGREE"] = 'FELONY_5TH_DEGREE'] = "FELONY5THDEGREE";
        ClassificationEnum[ClassificationEnum["GROSSMISDEMEANOR"] = 'GROSS_MISDEMEANOR'] = "GROSSMISDEMEANOR";
        ClassificationEnum[ClassificationEnum["HIGHANDAGGRAVATEDMISDEMEANOR"] = 'HIGH_AND_AGGRAVATED_MISDEMEANOR'] = "HIGHANDAGGRAVATEDMISDEMEANOR";
        ClassificationEnum[ClassificationEnum["INFRACTION"] = 'INFRACTION'] = "INFRACTION";
        ClassificationEnum[ClassificationEnum["LEVEL4FELONY"] = 'LEVEL_4_FELONY'] = "LEVEL4FELONY";
        ClassificationEnum[ClassificationEnum["LEVEL5FELONY"] = 'LEVEL_5_FELONY'] = "LEVEL5FELONY";
        ClassificationEnum[ClassificationEnum["LEVEL6FELONY"] = 'LEVEL_6_FELONY'] = "LEVEL6FELONY";
        ClassificationEnum[ClassificationEnum["MINORMISDEMEANOR"] = 'MINOR_MISDEMEANOR'] = "MINORMISDEMEANOR";
        ClassificationEnum[ClassificationEnum["MISDEMEANOR"] = 'MISDEMEANOR'] = "MISDEMEANOR";
        ClassificationEnum[ClassificationEnum["MISDEMEANOR1STDEGREE"] = 'MISDEMEANOR_1ST_DEGREE'] = "MISDEMEANOR1STDEGREE";
        ClassificationEnum[ClassificationEnum["MISDEMEANOR2NDDEGREE"] = 'MISDEMEANOR_2ND_DEGREE'] = "MISDEMEANOR2NDDEGREE";
        ClassificationEnum[ClassificationEnum["MISDEMEANOR3RDDEGREE"] = 'MISDEMEANOR_3RD_DEGREE'] = "MISDEMEANOR3RDDEGREE";
        ClassificationEnum[ClassificationEnum["MISDEMEANOR4THDEGREE"] = 'MISDEMEANOR_4TH_DEGREE'] = "MISDEMEANOR4THDEGREE";
        ClassificationEnum[ClassificationEnum["MISDEMEANORWITHREFUND"] = 'MISDEMEANOR_WITH_REFUND'] = "MISDEMEANORWITHREFUND";
        ClassificationEnum[ClassificationEnum["NONMOVING"] = 'NON_MOVING'] = "NONMOVING";
        ClassificationEnum[ClassificationEnum["NONREPORTABLE"] = 'NON_REPORTABLE'] = "NONREPORTABLE";
        ClassificationEnum[ClassificationEnum["PETTYMISDEMEANOR"] = 'PETTY_MISDEMEANOR'] = "PETTYMISDEMEANOR";
        ClassificationEnum[ClassificationEnum["QUASICRIMINAL"] = 'QUASI_CRIMINAL'] = "QUASICRIMINAL";
        ClassificationEnum[ClassificationEnum["SUMMARYOFFENSE"] = 'SUMMARY_OFFENSE'] = "SUMMARYOFFENSE";
        ClassificationEnum[ClassificationEnum["SUMMARYOFFENSENOREFUND"] = 'SUMMARY_OFFENSE_NO_REFUND'] = "SUMMARYOFFENSENOREFUND";
        ClassificationEnum[ClassificationEnum["WOBBLERTOFELONY"] = 'WOBBLER_TO_FELONY'] = "WOBBLERTOFELONY";
        ClassificationEnum[ClassificationEnum["WOBBLERTOMISDEMEANOR"] = 'WOBBLER_TO_MISDEMEANOR'] = "WOBBLERTOMISDEMEANOR";
    })(ClassificationEnum = TicketLeadDomain.ClassificationEnum || (TicketLeadDomain.ClassificationEnum = {}));
})(TicketLeadDomain || (TicketLeadDomain = {}));
