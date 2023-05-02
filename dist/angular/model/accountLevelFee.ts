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


export interface AccountLevelFee { 
    classification?: AccountLevelFee.ClassificationEnum;
    classificationId?: number;
    isEnabled?: boolean;
    isPermitted?: boolean;
    lawfirmFee?: number;
    lawyerfriendlyClassName?: string;
    refundEligibility?: AccountLevelFee.RefundEligibilityEnum;
    regionCode?: string;
    violationCodes?: string;
    violationId?: number;
    violationName?: string;
}
export namespace AccountLevelFee {
    export type ClassificationEnum = 'CLASS_1_FELONY' | 'CLASS_1_MISDEMEANOR' | 'CLASS_2_FELONY' | 'CLASS_2_MISDEMEANOR' | 'CLASS_3_FELONY' | 'CLASS_3_MISDEMEANOR' | 'CLASS_4_FELONY' | 'CLASS_4_MISDEMEANOR' | 'CLASS_5_FELONY' | 'CLASS_6_FELONY' | 'CLASS_A1_MISDEMEANOR' | 'CLASS_A_FELONY' | 'CLASS_A_INFRACTION' | 'CLASS_A_MISDEMEANOR' | 'CLASS_A_VIOLATION' | 'CLASS_B_FELONY' | 'CLASS_B_INFRACTION' | 'CLASS_B_MISDEMEANOR' | 'CLASS_B_VIOLATION' | 'CLASS_C_FELONY' | 'CLASS_C_INFRACTION' | 'CLASS_C_MISDEMEANOR' | 'CLASS_C_VIOLATION' | 'CLASS_D_FELONY' | 'CLASS_D_MISDEMEANOR' | 'CLASS_D_VIOLATION' | 'CLASS_E_FELONY' | 'CLASS_F_FELONY' | 'CLASS_H_FELONY' | 'DISORDERLY_PERSONS_OFFENSE' | 'FELONY' | 'FELONY_1ST_DEGREE' | 'FELONY_2ND_DEGREE' | 'FELONY_3RD_DEGREE' | 'FELONY_4TH_DEGREE' | 'FELONY_5TH_DEGREE' | 'GROSS_MISDEMEANOR' | 'HIGH_AND_AGGRAVATED_MISDEMEANOR' | 'INFRACTION' | 'LEVEL_4_FELONY' | 'LEVEL_5_FELONY' | 'LEVEL_6_FELONY' | 'MINOR_MISDEMEANOR' | 'MISDEMEANOR' | 'MISDEMEANOR_1ST_DEGREE' | 'MISDEMEANOR_2ND_DEGREE' | 'MISDEMEANOR_3RD_DEGREE' | 'MISDEMEANOR_4TH_DEGREE' | 'MISDEMEANOR_WITH_REFUND' | 'NON_MOVING' | 'NON_REPORTABLE' | 'PETTY_MISDEMEANOR' | 'QUASI_CRIMINAL' | 'SUMMARY_OFFENSE' | 'SUMMARY_OFFENSE_NO_REFUND' | 'WOBBLER_TO_FELONY' | 'WOBBLER_TO_MISDEMEANOR';
    export const ClassificationEnum = {
        Class1Felony: 'CLASS_1_FELONY' as ClassificationEnum,
        Class1Misdemeanor: 'CLASS_1_MISDEMEANOR' as ClassificationEnum,
        Class2Felony: 'CLASS_2_FELONY' as ClassificationEnum,
        Class2Misdemeanor: 'CLASS_2_MISDEMEANOR' as ClassificationEnum,
        Class3Felony: 'CLASS_3_FELONY' as ClassificationEnum,
        Class3Misdemeanor: 'CLASS_3_MISDEMEANOR' as ClassificationEnum,
        Class4Felony: 'CLASS_4_FELONY' as ClassificationEnum,
        Class4Misdemeanor: 'CLASS_4_MISDEMEANOR' as ClassificationEnum,
        Class5Felony: 'CLASS_5_FELONY' as ClassificationEnum,
        Class6Felony: 'CLASS_6_FELONY' as ClassificationEnum,
        ClassA1Misdemeanor: 'CLASS_A1_MISDEMEANOR' as ClassificationEnum,
        ClassAFelony: 'CLASS_A_FELONY' as ClassificationEnum,
        ClassAInfraction: 'CLASS_A_INFRACTION' as ClassificationEnum,
        ClassAMisdemeanor: 'CLASS_A_MISDEMEANOR' as ClassificationEnum,
        ClassAViolation: 'CLASS_A_VIOLATION' as ClassificationEnum,
        ClassBFelony: 'CLASS_B_FELONY' as ClassificationEnum,
        ClassBInfraction: 'CLASS_B_INFRACTION' as ClassificationEnum,
        ClassBMisdemeanor: 'CLASS_B_MISDEMEANOR' as ClassificationEnum,
        ClassBViolation: 'CLASS_B_VIOLATION' as ClassificationEnum,
        ClassCFelony: 'CLASS_C_FELONY' as ClassificationEnum,
        ClassCInfraction: 'CLASS_C_INFRACTION' as ClassificationEnum,
        ClassCMisdemeanor: 'CLASS_C_MISDEMEANOR' as ClassificationEnum,
        ClassCViolation: 'CLASS_C_VIOLATION' as ClassificationEnum,
        ClassDFelony: 'CLASS_D_FELONY' as ClassificationEnum,
        ClassDMisdemeanor: 'CLASS_D_MISDEMEANOR' as ClassificationEnum,
        ClassDViolation: 'CLASS_D_VIOLATION' as ClassificationEnum,
        ClassEFelony: 'CLASS_E_FELONY' as ClassificationEnum,
        ClassFFelony: 'CLASS_F_FELONY' as ClassificationEnum,
        ClassHFelony: 'CLASS_H_FELONY' as ClassificationEnum,
        DisorderlyPersonsOffense: 'DISORDERLY_PERSONS_OFFENSE' as ClassificationEnum,
        Felony: 'FELONY' as ClassificationEnum,
        Felony1StDegree: 'FELONY_1ST_DEGREE' as ClassificationEnum,
        Felony2NdDegree: 'FELONY_2ND_DEGREE' as ClassificationEnum,
        Felony3RdDegree: 'FELONY_3RD_DEGREE' as ClassificationEnum,
        Felony4ThDegree: 'FELONY_4TH_DEGREE' as ClassificationEnum,
        Felony5ThDegree: 'FELONY_5TH_DEGREE' as ClassificationEnum,
        GrossMisdemeanor: 'GROSS_MISDEMEANOR' as ClassificationEnum,
        HighAndAggravatedMisdemeanor: 'HIGH_AND_AGGRAVATED_MISDEMEANOR' as ClassificationEnum,
        Infraction: 'INFRACTION' as ClassificationEnum,
        Level4Felony: 'LEVEL_4_FELONY' as ClassificationEnum,
        Level5Felony: 'LEVEL_5_FELONY' as ClassificationEnum,
        Level6Felony: 'LEVEL_6_FELONY' as ClassificationEnum,
        MinorMisdemeanor: 'MINOR_MISDEMEANOR' as ClassificationEnum,
        Misdemeanor: 'MISDEMEANOR' as ClassificationEnum,
        Misdemeanor1StDegree: 'MISDEMEANOR_1ST_DEGREE' as ClassificationEnum,
        Misdemeanor2NdDegree: 'MISDEMEANOR_2ND_DEGREE' as ClassificationEnum,
        Misdemeanor3RdDegree: 'MISDEMEANOR_3RD_DEGREE' as ClassificationEnum,
        Misdemeanor4ThDegree: 'MISDEMEANOR_4TH_DEGREE' as ClassificationEnum,
        MisdemeanorWithRefund: 'MISDEMEANOR_WITH_REFUND' as ClassificationEnum,
        NonMoving: 'NON_MOVING' as ClassificationEnum,
        NonReportable: 'NON_REPORTABLE' as ClassificationEnum,
        PettyMisdemeanor: 'PETTY_MISDEMEANOR' as ClassificationEnum,
        QuasiCriminal: 'QUASI_CRIMINAL' as ClassificationEnum,
        SummaryOffense: 'SUMMARY_OFFENSE' as ClassificationEnum,
        SummaryOffenseNoRefund: 'SUMMARY_OFFENSE_NO_REFUND' as ClassificationEnum,
        WobblerToFelony: 'WOBBLER_TO_FELONY' as ClassificationEnum,
        WobblerToMisdemeanor: 'WOBBLER_TO_MISDEMEANOR' as ClassificationEnum
    };
    export type RefundEligibilityEnum = 'FULL_REFUND' | 'NO_REFUND';
    export const RefundEligibilityEnum = {
        FullRefund: 'FULL_REFUND' as RefundEligibilityEnum,
        NoRefund: 'NO_REFUND' as RefundEligibilityEnum
    };
}


