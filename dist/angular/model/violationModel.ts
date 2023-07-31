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
import { ViolationPenaltyModel } from './violationPenaltyModel';


export interface ViolationModel { 
    insuranceIncreasePercent?: number;
    isCriminal?: boolean;
    isMovingViolation?: boolean;
    isWobblerToCriminal?: boolean;
    penalties?: Array<ViolationPenaltyModel>;
    trafficViolationDesc?: string;
    trafficViolationTypeId?: number;
    userFriendlyName?: string;
    userFriendlyShortForm?: string;
    violationClassification?: ViolationModel.ViolationClassificationEnum;
    violationCode?: string;
}
export namespace ViolationModel {
    export type ViolationClassificationEnum = 'CLASS_1_FELONY' | 'CLASS_1_MISDEMEANOR' | 'CLASS_2_FELONY' | 'CLASS_2_MISDEMEANOR' | 'CLASS_3_FELONY' | 'CLASS_3_MISDEMEANOR' | 'CLASS_4_FELONY' | 'CLASS_4_MISDEMEANOR' | 'CLASS_5_FELONY' | 'CLASS_6_FELONY' | 'CLASS_A1_MISDEMEANOR' | 'CLASS_A_FELONY' | 'CLASS_A_INFRACTION' | 'CLASS_A_MISDEMEANOR' | 'CLASS_A_VIOLATION' | 'CLASS_B_FELONY' | 'CLASS_B_INFRACTION' | 'CLASS_B_MISDEMEANOR' | 'CLASS_B_VIOLATION' | 'CLASS_C_FELONY' | 'CLASS_C_INFRACTION' | 'CLASS_C_MISDEMEANOR' | 'CLASS_C_VIOLATION' | 'CLASS_D_FELONY' | 'CLASS_D_MISDEMEANOR' | 'CLASS_D_VIOLATION' | 'CLASS_E_FELONY' | 'CLASS_F_FELONY' | 'CLASS_H_FELONY' | 'DISORDERLY_PERSONS_OFFENSE' | 'FELONY' | 'FELONY_1ST_DEGREE' | 'FELONY_2ND_DEGREE' | 'FELONY_3RD_DEGREE' | 'FELONY_4TH_DEGREE' | 'FELONY_5TH_DEGREE' | 'GROSS_MISDEMEANOR' | 'HIGH_AND_AGGRAVATED_MISDEMEANOR' | 'INFRACTION' | 'LEVEL_4_FELONY' | 'LEVEL_5_FELONY' | 'LEVEL_6_FELONY' | 'MINOR_MISDEMEANOR' | 'MISDEMEANOR' | 'MISDEMEANOR_1ST_DEGREE' | 'MISDEMEANOR_2ND_DEGREE' | 'MISDEMEANOR_3RD_DEGREE' | 'MISDEMEANOR_4TH_DEGREE' | 'MISDEMEANOR_WITH_REFUND' | 'NON_MOVING' | 'NON_REPORTABLE' | 'PETTY_MISDEMEANOR' | 'QUASI_CRIMINAL' | 'SUMMARY_OFFENSE' | 'SUMMARY_OFFENSE_NO_REFUND' | 'WOBBLER_TO_FELONY' | 'WOBBLER_TO_MISDEMEANOR';
    export const ViolationClassificationEnum = {
        Class1Felony: 'CLASS_1_FELONY' as ViolationClassificationEnum,
        Class1Misdemeanor: 'CLASS_1_MISDEMEANOR' as ViolationClassificationEnum,
        Class2Felony: 'CLASS_2_FELONY' as ViolationClassificationEnum,
        Class2Misdemeanor: 'CLASS_2_MISDEMEANOR' as ViolationClassificationEnum,
        Class3Felony: 'CLASS_3_FELONY' as ViolationClassificationEnum,
        Class3Misdemeanor: 'CLASS_3_MISDEMEANOR' as ViolationClassificationEnum,
        Class4Felony: 'CLASS_4_FELONY' as ViolationClassificationEnum,
        Class4Misdemeanor: 'CLASS_4_MISDEMEANOR' as ViolationClassificationEnum,
        Class5Felony: 'CLASS_5_FELONY' as ViolationClassificationEnum,
        Class6Felony: 'CLASS_6_FELONY' as ViolationClassificationEnum,
        ClassA1Misdemeanor: 'CLASS_A1_MISDEMEANOR' as ViolationClassificationEnum,
        ClassAFelony: 'CLASS_A_FELONY' as ViolationClassificationEnum,
        ClassAInfraction: 'CLASS_A_INFRACTION' as ViolationClassificationEnum,
        ClassAMisdemeanor: 'CLASS_A_MISDEMEANOR' as ViolationClassificationEnum,
        ClassAViolation: 'CLASS_A_VIOLATION' as ViolationClassificationEnum,
        ClassBFelony: 'CLASS_B_FELONY' as ViolationClassificationEnum,
        ClassBInfraction: 'CLASS_B_INFRACTION' as ViolationClassificationEnum,
        ClassBMisdemeanor: 'CLASS_B_MISDEMEANOR' as ViolationClassificationEnum,
        ClassBViolation: 'CLASS_B_VIOLATION' as ViolationClassificationEnum,
        ClassCFelony: 'CLASS_C_FELONY' as ViolationClassificationEnum,
        ClassCInfraction: 'CLASS_C_INFRACTION' as ViolationClassificationEnum,
        ClassCMisdemeanor: 'CLASS_C_MISDEMEANOR' as ViolationClassificationEnum,
        ClassCViolation: 'CLASS_C_VIOLATION' as ViolationClassificationEnum,
        ClassDFelony: 'CLASS_D_FELONY' as ViolationClassificationEnum,
        ClassDMisdemeanor: 'CLASS_D_MISDEMEANOR' as ViolationClassificationEnum,
        ClassDViolation: 'CLASS_D_VIOLATION' as ViolationClassificationEnum,
        ClassEFelony: 'CLASS_E_FELONY' as ViolationClassificationEnum,
        ClassFFelony: 'CLASS_F_FELONY' as ViolationClassificationEnum,
        ClassHFelony: 'CLASS_H_FELONY' as ViolationClassificationEnum,
        DisorderlyPersonsOffense: 'DISORDERLY_PERSONS_OFFENSE' as ViolationClassificationEnum,
        Felony: 'FELONY' as ViolationClassificationEnum,
        Felony1StDegree: 'FELONY_1ST_DEGREE' as ViolationClassificationEnum,
        Felony2NdDegree: 'FELONY_2ND_DEGREE' as ViolationClassificationEnum,
        Felony3RdDegree: 'FELONY_3RD_DEGREE' as ViolationClassificationEnum,
        Felony4ThDegree: 'FELONY_4TH_DEGREE' as ViolationClassificationEnum,
        Felony5ThDegree: 'FELONY_5TH_DEGREE' as ViolationClassificationEnum,
        GrossMisdemeanor: 'GROSS_MISDEMEANOR' as ViolationClassificationEnum,
        HighAndAggravatedMisdemeanor: 'HIGH_AND_AGGRAVATED_MISDEMEANOR' as ViolationClassificationEnum,
        Infraction: 'INFRACTION' as ViolationClassificationEnum,
        Level4Felony: 'LEVEL_4_FELONY' as ViolationClassificationEnum,
        Level5Felony: 'LEVEL_5_FELONY' as ViolationClassificationEnum,
        Level6Felony: 'LEVEL_6_FELONY' as ViolationClassificationEnum,
        MinorMisdemeanor: 'MINOR_MISDEMEANOR' as ViolationClassificationEnum,
        Misdemeanor: 'MISDEMEANOR' as ViolationClassificationEnum,
        Misdemeanor1StDegree: 'MISDEMEANOR_1ST_DEGREE' as ViolationClassificationEnum,
        Misdemeanor2NdDegree: 'MISDEMEANOR_2ND_DEGREE' as ViolationClassificationEnum,
        Misdemeanor3RdDegree: 'MISDEMEANOR_3RD_DEGREE' as ViolationClassificationEnum,
        Misdemeanor4ThDegree: 'MISDEMEANOR_4TH_DEGREE' as ViolationClassificationEnum,
        MisdemeanorWithRefund: 'MISDEMEANOR_WITH_REFUND' as ViolationClassificationEnum,
        NonMoving: 'NON_MOVING' as ViolationClassificationEnum,
        NonReportable: 'NON_REPORTABLE' as ViolationClassificationEnum,
        PettyMisdemeanor: 'PETTY_MISDEMEANOR' as ViolationClassificationEnum,
        QuasiCriminal: 'QUASI_CRIMINAL' as ViolationClassificationEnum,
        SummaryOffense: 'SUMMARY_OFFENSE' as ViolationClassificationEnum,
        SummaryOffenseNoRefund: 'SUMMARY_OFFENSE_NO_REFUND' as ViolationClassificationEnum,
        WobblerToFelony: 'WOBBLER_TO_FELONY' as ViolationClassificationEnum,
        WobblerToMisdemeanor: 'WOBBLER_TO_MISDEMEANOR' as ViolationClassificationEnum
    };
}


