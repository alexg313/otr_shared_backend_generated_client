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
import { Timestamp } from './timestamp';


export interface CitationsResponseModel { 
    caseId?: string;
    caseStatus?: CitationsResponseModel.CaseStatusEnum;
    cdlStatus?: CitationsResponseModel.CdlStatusEnum;
    citationId?: number;
    citationIssueDate?: string;
    countyName?: string;
    courtName?: string;
    creationDateUtc?: Timestamp;
    experimentName?: CitationsResponseModel.ExperimentNameEnum;
    groupName?: string;
    hasPhoto?: boolean;
    involvesAccident?: boolean;
    lawfirmId?: string;
    lawfirmName?: string;
    maxViolationClassification?: CitationsResponseModel.MaxViolationClassificationEnum;
    numViolations?: number;
    ticketImageUrl?: string;
    ticketLocationState?: CitationsResponseModel.TicketLocationStateEnum;
    totalClientCostInCents?: number;
    totalLawfirmDiscountInCents?: number;
    totalOtrDiscountInCents?: number;
    userFirstName?: string;
    userId?: string;
    userLastName?: string;
}
export namespace CitationsResponseModel {
    export type CaseStatusEnum = 'AMENDED_DOWN_WITHIN_CLASS' | 'AMENDED_FULL_FINE' | 'AMENDED_INCREASED_FINE' | 'AMENDED_NO_FINE' | 'AMENDED_REDUCED_FINE' | 'AMENDED_TO_INFRACTION' | 'AMENDED_TO_NMV' | 'CANCELLED_ATTORNEY_AT_FAULT' | 'CANCELLED_BY_LAWFIRM' | 'CANCELLED_BY_USER' | 'CANCELLED_DUPLICATE' | 'CANCELLED_NMV' | 'CANCELLED_NON_PAYMENT' | 'CANCELLED_NO_LAWFIRM' | 'CANCELLED_OVERDUE' | 'CANCELLED_TOO_SHORT_NOTICE' | 'CASE_IN_PROGRESS' | 'CLIENT_CONFIRMED' | 'CLIENT_CONFIRMED_UNPAID' | 'CLIENT_FIRED_LAWFIRM' | 'CLIENT_FORCED_LOSS' | 'CLIENT_PAID_FINE' | 'CLIENT_UNRESPONSIVE' | 'DEFERRED' | 'DISMISSED' | 'DIVERSION' | 'FEES_DISPUTED' | 'FINE_REDUCTION_ONLY' | 'LAWFIRM_WITHDRAWN' | 'LOST' | 'NO_LAWFIRM_AVAILABLE' | 'POINT_REDUCTION' | 'REFUSED_BY_LAWFIRM' | 'RESOLVED_NON_PAYMENT' | 'STALE' | 'TRAFFIC_SCHOOL' | 'UNCONFIRMED';
    export const CaseStatusEnum = {
        AmendedDownWithinClass: 'AMENDED_DOWN_WITHIN_CLASS' as CaseStatusEnum,
        AmendedFullFine: 'AMENDED_FULL_FINE' as CaseStatusEnum,
        AmendedIncreasedFine: 'AMENDED_INCREASED_FINE' as CaseStatusEnum,
        AmendedNoFine: 'AMENDED_NO_FINE' as CaseStatusEnum,
        AmendedReducedFine: 'AMENDED_REDUCED_FINE' as CaseStatusEnum,
        AmendedToInfraction: 'AMENDED_TO_INFRACTION' as CaseStatusEnum,
        AmendedToNmv: 'AMENDED_TO_NMV' as CaseStatusEnum,
        CancelledAttorneyAtFault: 'CANCELLED_ATTORNEY_AT_FAULT' as CaseStatusEnum,
        CancelledByLawfirm: 'CANCELLED_BY_LAWFIRM' as CaseStatusEnum,
        CancelledByUser: 'CANCELLED_BY_USER' as CaseStatusEnum,
        CancelledDuplicate: 'CANCELLED_DUPLICATE' as CaseStatusEnum,
        CancelledNmv: 'CANCELLED_NMV' as CaseStatusEnum,
        CancelledNonPayment: 'CANCELLED_NON_PAYMENT' as CaseStatusEnum,
        CancelledNoLawfirm: 'CANCELLED_NO_LAWFIRM' as CaseStatusEnum,
        CancelledOverdue: 'CANCELLED_OVERDUE' as CaseStatusEnum,
        CancelledTooShortNotice: 'CANCELLED_TOO_SHORT_NOTICE' as CaseStatusEnum,
        CaseInProgress: 'CASE_IN_PROGRESS' as CaseStatusEnum,
        ClientConfirmed: 'CLIENT_CONFIRMED' as CaseStatusEnum,
        ClientConfirmedUnpaid: 'CLIENT_CONFIRMED_UNPAID' as CaseStatusEnum,
        ClientFiredLawfirm: 'CLIENT_FIRED_LAWFIRM' as CaseStatusEnum,
        ClientForcedLoss: 'CLIENT_FORCED_LOSS' as CaseStatusEnum,
        ClientPaidFine: 'CLIENT_PAID_FINE' as CaseStatusEnum,
        ClientUnresponsive: 'CLIENT_UNRESPONSIVE' as CaseStatusEnum,
        Deferred: 'DEFERRED' as CaseStatusEnum,
        Dismissed: 'DISMISSED' as CaseStatusEnum,
        Diversion: 'DIVERSION' as CaseStatusEnum,
        FeesDisputed: 'FEES_DISPUTED' as CaseStatusEnum,
        FineReductionOnly: 'FINE_REDUCTION_ONLY' as CaseStatusEnum,
        LawfirmWithdrawn: 'LAWFIRM_WITHDRAWN' as CaseStatusEnum,
        Lost: 'LOST' as CaseStatusEnum,
        NoLawfirmAvailable: 'NO_LAWFIRM_AVAILABLE' as CaseStatusEnum,
        PointReduction: 'POINT_REDUCTION' as CaseStatusEnum,
        RefusedByLawfirm: 'REFUSED_BY_LAWFIRM' as CaseStatusEnum,
        ResolvedNonPayment: 'RESOLVED_NON_PAYMENT' as CaseStatusEnum,
        Stale: 'STALE' as CaseStatusEnum,
        TrafficSchool: 'TRAFFIC_SCHOOL' as CaseStatusEnum,
        Unconfirmed: 'UNCONFIRMED' as CaseStatusEnum
    };
    export type CdlStatusEnum = 'CDL_IN_COMMERCIAL_VEHICLE' | 'CDL_IN_PERSONAL_VEHICLE' | 'NO_CDL';
    export const CdlStatusEnum = {
        CdlInCommercialVehicle: 'CDL_IN_COMMERCIAL_VEHICLE' as CdlStatusEnum,
        CdlInPersonalVehicle: 'CDL_IN_PERSONAL_VEHICLE' as CdlStatusEnum,
        NoCdl: 'NO_CDL' as CdlStatusEnum
    };
    export type ExperimentNameEnum = 'PRINCETON_PROJECT_1';
    export const ExperimentNameEnum = {
        PrincetonProject1: 'PRINCETON_PROJECT_1' as ExperimentNameEnum
    };
    export type MaxViolationClassificationEnum = 'CLASS_1_FELONY' | 'CLASS_1_MISDEMEANOR' | 'CLASS_2_FELONY' | 'CLASS_2_MISDEMEANOR' | 'CLASS_3_FELONY' | 'CLASS_3_MISDEMEANOR' | 'CLASS_4_FELONY' | 'CLASS_4_MISDEMEANOR' | 'CLASS_5_FELONY' | 'CLASS_6_FELONY' | 'CLASS_A1_MISDEMEANOR' | 'CLASS_A_FELONY' | 'CLASS_A_INFRACTION' | 'CLASS_A_MISDEMEANOR' | 'CLASS_A_VIOLATION' | 'CLASS_B_FELONY' | 'CLASS_B_INFRACTION' | 'CLASS_B_MISDEMEANOR' | 'CLASS_B_VIOLATION' | 'CLASS_C_FELONY' | 'CLASS_C_INFRACTION' | 'CLASS_C_MISDEMEANOR' | 'CLASS_C_VIOLATION' | 'CLASS_D_FELONY' | 'CLASS_D_MISDEMEANOR' | 'CLASS_D_VIOLATION' | 'CLASS_E_FELONY' | 'CLASS_F_FELONY' | 'CLASS_H_FELONY' | 'DISORDERLY_PERSONS_OFFENSE' | 'FELONY' | 'FELONY_1ST_DEGREE' | 'FELONY_2ND_DEGREE' | 'FELONY_3RD_DEGREE' | 'FELONY_4TH_DEGREE' | 'FELONY_5TH_DEGREE' | 'GROSS_MISDEMEANOR' | 'HIGH_AND_AGGRAVATED_MISDEMEANOR' | 'INFRACTION' | 'LEVEL_4_FELONY' | 'LEVEL_5_FELONY' | 'LEVEL_6_FELONY' | 'MINOR_MISDEMEANOR' | 'MISDEMEANOR' | 'MISDEMEANOR_1ST_DEGREE' | 'MISDEMEANOR_2ND_DEGREE' | 'MISDEMEANOR_3RD_DEGREE' | 'MISDEMEANOR_4TH_DEGREE' | 'MISDEMEANOR_WITH_REFUND' | 'NON_MOVING' | 'NON_REPORTABLE' | 'PETTY_MISDEMEANOR' | 'QUASI_CRIMINAL' | 'SUMMARY_OFFENSE' | 'SUMMARY_OFFENSE_NO_REFUND' | 'WOBBLER_TO_FELONY' | 'WOBBLER_TO_MISDEMEANOR';
    export const MaxViolationClassificationEnum = {
        Class1Felony: 'CLASS_1_FELONY' as MaxViolationClassificationEnum,
        Class1Misdemeanor: 'CLASS_1_MISDEMEANOR' as MaxViolationClassificationEnum,
        Class2Felony: 'CLASS_2_FELONY' as MaxViolationClassificationEnum,
        Class2Misdemeanor: 'CLASS_2_MISDEMEANOR' as MaxViolationClassificationEnum,
        Class3Felony: 'CLASS_3_FELONY' as MaxViolationClassificationEnum,
        Class3Misdemeanor: 'CLASS_3_MISDEMEANOR' as MaxViolationClassificationEnum,
        Class4Felony: 'CLASS_4_FELONY' as MaxViolationClassificationEnum,
        Class4Misdemeanor: 'CLASS_4_MISDEMEANOR' as MaxViolationClassificationEnum,
        Class5Felony: 'CLASS_5_FELONY' as MaxViolationClassificationEnum,
        Class6Felony: 'CLASS_6_FELONY' as MaxViolationClassificationEnum,
        ClassA1Misdemeanor: 'CLASS_A1_MISDEMEANOR' as MaxViolationClassificationEnum,
        ClassAFelony: 'CLASS_A_FELONY' as MaxViolationClassificationEnum,
        ClassAInfraction: 'CLASS_A_INFRACTION' as MaxViolationClassificationEnum,
        ClassAMisdemeanor: 'CLASS_A_MISDEMEANOR' as MaxViolationClassificationEnum,
        ClassAViolation: 'CLASS_A_VIOLATION' as MaxViolationClassificationEnum,
        ClassBFelony: 'CLASS_B_FELONY' as MaxViolationClassificationEnum,
        ClassBInfraction: 'CLASS_B_INFRACTION' as MaxViolationClassificationEnum,
        ClassBMisdemeanor: 'CLASS_B_MISDEMEANOR' as MaxViolationClassificationEnum,
        ClassBViolation: 'CLASS_B_VIOLATION' as MaxViolationClassificationEnum,
        ClassCFelony: 'CLASS_C_FELONY' as MaxViolationClassificationEnum,
        ClassCInfraction: 'CLASS_C_INFRACTION' as MaxViolationClassificationEnum,
        ClassCMisdemeanor: 'CLASS_C_MISDEMEANOR' as MaxViolationClassificationEnum,
        ClassCViolation: 'CLASS_C_VIOLATION' as MaxViolationClassificationEnum,
        ClassDFelony: 'CLASS_D_FELONY' as MaxViolationClassificationEnum,
        ClassDMisdemeanor: 'CLASS_D_MISDEMEANOR' as MaxViolationClassificationEnum,
        ClassDViolation: 'CLASS_D_VIOLATION' as MaxViolationClassificationEnum,
        ClassEFelony: 'CLASS_E_FELONY' as MaxViolationClassificationEnum,
        ClassFFelony: 'CLASS_F_FELONY' as MaxViolationClassificationEnum,
        ClassHFelony: 'CLASS_H_FELONY' as MaxViolationClassificationEnum,
        DisorderlyPersonsOffense: 'DISORDERLY_PERSONS_OFFENSE' as MaxViolationClassificationEnum,
        Felony: 'FELONY' as MaxViolationClassificationEnum,
        Felony1StDegree: 'FELONY_1ST_DEGREE' as MaxViolationClassificationEnum,
        Felony2NdDegree: 'FELONY_2ND_DEGREE' as MaxViolationClassificationEnum,
        Felony3RdDegree: 'FELONY_3RD_DEGREE' as MaxViolationClassificationEnum,
        Felony4ThDegree: 'FELONY_4TH_DEGREE' as MaxViolationClassificationEnum,
        Felony5ThDegree: 'FELONY_5TH_DEGREE' as MaxViolationClassificationEnum,
        GrossMisdemeanor: 'GROSS_MISDEMEANOR' as MaxViolationClassificationEnum,
        HighAndAggravatedMisdemeanor: 'HIGH_AND_AGGRAVATED_MISDEMEANOR' as MaxViolationClassificationEnum,
        Infraction: 'INFRACTION' as MaxViolationClassificationEnum,
        Level4Felony: 'LEVEL_4_FELONY' as MaxViolationClassificationEnum,
        Level5Felony: 'LEVEL_5_FELONY' as MaxViolationClassificationEnum,
        Level6Felony: 'LEVEL_6_FELONY' as MaxViolationClassificationEnum,
        MinorMisdemeanor: 'MINOR_MISDEMEANOR' as MaxViolationClassificationEnum,
        Misdemeanor: 'MISDEMEANOR' as MaxViolationClassificationEnum,
        Misdemeanor1StDegree: 'MISDEMEANOR_1ST_DEGREE' as MaxViolationClassificationEnum,
        Misdemeanor2NdDegree: 'MISDEMEANOR_2ND_DEGREE' as MaxViolationClassificationEnum,
        Misdemeanor3RdDegree: 'MISDEMEANOR_3RD_DEGREE' as MaxViolationClassificationEnum,
        Misdemeanor4ThDegree: 'MISDEMEANOR_4TH_DEGREE' as MaxViolationClassificationEnum,
        MisdemeanorWithRefund: 'MISDEMEANOR_WITH_REFUND' as MaxViolationClassificationEnum,
        NonMoving: 'NON_MOVING' as MaxViolationClassificationEnum,
        NonReportable: 'NON_REPORTABLE' as MaxViolationClassificationEnum,
        PettyMisdemeanor: 'PETTY_MISDEMEANOR' as MaxViolationClassificationEnum,
        QuasiCriminal: 'QUASI_CRIMINAL' as MaxViolationClassificationEnum,
        SummaryOffense: 'SUMMARY_OFFENSE' as MaxViolationClassificationEnum,
        SummaryOffenseNoRefund: 'SUMMARY_OFFENSE_NO_REFUND' as MaxViolationClassificationEnum,
        WobblerToFelony: 'WOBBLER_TO_FELONY' as MaxViolationClassificationEnum,
        WobblerToMisdemeanor: 'WOBBLER_TO_MISDEMEANOR' as MaxViolationClassificationEnum
    };
    export type TicketLocationStateEnum = 'AK' | 'AL' | 'AR' | 'AZ' | 'CA' | 'CO' | 'CT' | 'DC' | 'DE' | 'FL' | 'GA' | 'HI' | 'IA' | 'ID' | 'IL' | 'IN' | 'KS' | 'KY' | 'LA' | 'MA' | 'MD' | 'ME' | 'MI' | 'MN' | 'MO' | 'MS' | 'MT' | 'NC' | 'ND' | 'NE' | 'NH' | 'NJ' | 'NM' | 'NV' | 'NY' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VA' | 'VT' | 'WA' | 'WI' | 'WV' | 'WY';
    export const TicketLocationStateEnum = {
        Ak: 'AK' as TicketLocationStateEnum,
        Al: 'AL' as TicketLocationStateEnum,
        Ar: 'AR' as TicketLocationStateEnum,
        Az: 'AZ' as TicketLocationStateEnum,
        Ca: 'CA' as TicketLocationStateEnum,
        Co: 'CO' as TicketLocationStateEnum,
        Ct: 'CT' as TicketLocationStateEnum,
        Dc: 'DC' as TicketLocationStateEnum,
        De: 'DE' as TicketLocationStateEnum,
        Fl: 'FL' as TicketLocationStateEnum,
        Ga: 'GA' as TicketLocationStateEnum,
        Hi: 'HI' as TicketLocationStateEnum,
        Ia: 'IA' as TicketLocationStateEnum,
        Id: 'ID' as TicketLocationStateEnum,
        Il: 'IL' as TicketLocationStateEnum,
        In: 'IN' as TicketLocationStateEnum,
        Ks: 'KS' as TicketLocationStateEnum,
        Ky: 'KY' as TicketLocationStateEnum,
        La: 'LA' as TicketLocationStateEnum,
        Ma: 'MA' as TicketLocationStateEnum,
        Md: 'MD' as TicketLocationStateEnum,
        Me: 'ME' as TicketLocationStateEnum,
        Mi: 'MI' as TicketLocationStateEnum,
        Mn: 'MN' as TicketLocationStateEnum,
        Mo: 'MO' as TicketLocationStateEnum,
        Ms: 'MS' as TicketLocationStateEnum,
        Mt: 'MT' as TicketLocationStateEnum,
        Nc: 'NC' as TicketLocationStateEnum,
        Nd: 'ND' as TicketLocationStateEnum,
        Ne: 'NE' as TicketLocationStateEnum,
        Nh: 'NH' as TicketLocationStateEnum,
        Nj: 'NJ' as TicketLocationStateEnum,
        Nm: 'NM' as TicketLocationStateEnum,
        Nv: 'NV' as TicketLocationStateEnum,
        Ny: 'NY' as TicketLocationStateEnum,
        Oh: 'OH' as TicketLocationStateEnum,
        Ok: 'OK' as TicketLocationStateEnum,
        Or: 'OR' as TicketLocationStateEnum,
        Pa: 'PA' as TicketLocationStateEnum,
        Ri: 'RI' as TicketLocationStateEnum,
        Sc: 'SC' as TicketLocationStateEnum,
        Sd: 'SD' as TicketLocationStateEnum,
        Tn: 'TN' as TicketLocationStateEnum,
        Tx: 'TX' as TicketLocationStateEnum,
        Ut: 'UT' as TicketLocationStateEnum,
        Va: 'VA' as TicketLocationStateEnum,
        Vt: 'VT' as TicketLocationStateEnum,
        Wa: 'WA' as TicketLocationStateEnum,
        Wi: 'WI' as TicketLocationStateEnum,
        Wv: 'WV' as TicketLocationStateEnum,
        Wy: 'WY' as TicketLocationStateEnum
    };
}


