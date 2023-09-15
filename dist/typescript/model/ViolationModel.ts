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

import * as models from './models';

export interface ViolationModel {
    "insuranceIncreasePercent"?: number;
    "isCriminal"?: boolean;
    "isMovingViolation"?: boolean;
    "isWobblerToCriminal"?: boolean;
    "penalties"?: Array<models.ViolationPenaltyModel>;
    "trafficViolationDesc"?: string;
    "trafficViolationTypeId"?: number;
    "userFriendlyName"?: string;
    "userFriendlyShortForm"?: string;
    "violationClassification"?: ViolationModel.ViolationClassificationEnum;
    "violationCode"?: string;
}

export namespace ViolationModel {
    export enum ViolationClassificationEnum {
        CLASS1FELONY = <any> 'CLASS_1_FELONY',
        CLASS1MISDEMEANOR = <any> 'CLASS_1_MISDEMEANOR',
        CLASS2FELONY = <any> 'CLASS_2_FELONY',
        CLASS2MISDEMEANOR = <any> 'CLASS_2_MISDEMEANOR',
        CLASS3FELONY = <any> 'CLASS_3_FELONY',
        CLASS3MISDEMEANOR = <any> 'CLASS_3_MISDEMEANOR',
        CLASS4FELONY = <any> 'CLASS_4_FELONY',
        CLASS4MISDEMEANOR = <any> 'CLASS_4_MISDEMEANOR',
        CLASS5FELONY = <any> 'CLASS_5_FELONY',
        CLASS6FELONY = <any> 'CLASS_6_FELONY',
        CLASSA1MISDEMEANOR = <any> 'CLASS_A1_MISDEMEANOR',
        CLASSAFELONY = <any> 'CLASS_A_FELONY',
        CLASSAINFRACTION = <any> 'CLASS_A_INFRACTION',
        CLASSAMISDEMEANOR = <any> 'CLASS_A_MISDEMEANOR',
        CLASSAVIOLATION = <any> 'CLASS_A_VIOLATION',
        CLASSBFELONY = <any> 'CLASS_B_FELONY',
        CLASSBINFRACTION = <any> 'CLASS_B_INFRACTION',
        CLASSBMISDEMEANOR = <any> 'CLASS_B_MISDEMEANOR',
        CLASSBVIOLATION = <any> 'CLASS_B_VIOLATION',
        CLASSCFELONY = <any> 'CLASS_C_FELONY',
        CLASSCINFRACTION = <any> 'CLASS_C_INFRACTION',
        CLASSCMISDEMEANOR = <any> 'CLASS_C_MISDEMEANOR',
        CLASSCVIOLATION = <any> 'CLASS_C_VIOLATION',
        CLASSDFELONY = <any> 'CLASS_D_FELONY',
        CLASSDMISDEMEANOR = <any> 'CLASS_D_MISDEMEANOR',
        CLASSDVIOLATION = <any> 'CLASS_D_VIOLATION',
        CLASSEFELONY = <any> 'CLASS_E_FELONY',
        CLASSFFELONY = <any> 'CLASS_F_FELONY',
        CLASSHFELONY = <any> 'CLASS_H_FELONY',
        DISORDERLYPERSONSOFFENSE = <any> 'DISORDERLY_PERSONS_OFFENSE',
        FELONY = <any> 'FELONY',
        FELONY1STDEGREE = <any> 'FELONY_1ST_DEGREE',
        FELONY2NDDEGREE = <any> 'FELONY_2ND_DEGREE',
        FELONY3RDDEGREE = <any> 'FELONY_3RD_DEGREE',
        FELONY4THDEGREE = <any> 'FELONY_4TH_DEGREE',
        FELONY5THDEGREE = <any> 'FELONY_5TH_DEGREE',
        GROSSMISDEMEANOR = <any> 'GROSS_MISDEMEANOR',
        HIGHANDAGGRAVATEDMISDEMEANOR = <any> 'HIGH_AND_AGGRAVATED_MISDEMEANOR',
        INFRACTION = <any> 'INFRACTION',
        LEVEL4FELONY = <any> 'LEVEL_4_FELONY',
        LEVEL5FELONY = <any> 'LEVEL_5_FELONY',
        LEVEL6FELONY = <any> 'LEVEL_6_FELONY',
        MINORMISDEMEANOR = <any> 'MINOR_MISDEMEANOR',
        MISDEMEANOR = <any> 'MISDEMEANOR',
        MISDEMEANOR1STDEGREE = <any> 'MISDEMEANOR_1ST_DEGREE',
        MISDEMEANOR2NDDEGREE = <any> 'MISDEMEANOR_2ND_DEGREE',
        MISDEMEANOR3RDDEGREE = <any> 'MISDEMEANOR_3RD_DEGREE',
        MISDEMEANOR4THDEGREE = <any> 'MISDEMEANOR_4TH_DEGREE',
        MISDEMEANORWITHREFUND = <any> 'MISDEMEANOR_WITH_REFUND',
        NONMOVING = <any> 'NON_MOVING',
        NONREPORTABLE = <any> 'NON_REPORTABLE',
        PETTYMISDEMEANOR = <any> 'PETTY_MISDEMEANOR',
        QUASICRIMINAL = <any> 'QUASI_CRIMINAL',
        SUMMARYOFFENSE = <any> 'SUMMARY_OFFENSE',
        SUMMARYOFFENSENOREFUND = <any> 'SUMMARY_OFFENSE_NO_REFUND',
        WOBBLERTOFELONY = <any> 'WOBBLER_TO_FELONY',
        WOBBLERTOMISDEMEANOR = <any> 'WOBBLER_TO_MISDEMEANOR'
    }
}
