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


export interface Penalty { 
    additionalTip?: string;
    penaltyFriendlyDescription?: string;
    penaltyMerged?: boolean;
    penaltyType?: Penalty.PenaltyTypeEnum;
    penaltyTypeId?: number;
    penaltyValue?: string;
    vectorImageUrl?: string;
}
export namespace Penalty {
    export type PenaltyTypeEnum = 'DEMERIT_POINTS' | 'INCARCERATION_MAX_DAYS' | 'INCARCERATION_MIN_DAYS' | 'INSURANCE_POINTS' | 'INSURANCE_RATE_INCREASE' | 'LICENSE_REVOCATION_MAX_DAYS' | 'LICENSE_REVOCATION_MIN_DAYS' | 'LICENSE_SUSPENSION_MAX_DAYS' | 'LICENSE_SUSPENSION_MIN_DAYS' | 'MANDATORY_COURT_APPEARANCE' | 'MANDATORY_COURT_APPEARANCE_WITH_ATTORNEY' | 'MAX_BAIL_AMOUNT' | 'MIN_BAIL_AMOUNT' | 'PROBATION_IN_DAYS' | 'TOTAL_BAIL_AMOUNT';
    export const PenaltyTypeEnum = {
        DemeritPoints: 'DEMERIT_POINTS' as PenaltyTypeEnum,
        IncarcerationMaxDays: 'INCARCERATION_MAX_DAYS' as PenaltyTypeEnum,
        IncarcerationMinDays: 'INCARCERATION_MIN_DAYS' as PenaltyTypeEnum,
        InsurancePoints: 'INSURANCE_POINTS' as PenaltyTypeEnum,
        InsuranceRateIncrease: 'INSURANCE_RATE_INCREASE' as PenaltyTypeEnum,
        LicenseRevocationMaxDays: 'LICENSE_REVOCATION_MAX_DAYS' as PenaltyTypeEnum,
        LicenseRevocationMinDays: 'LICENSE_REVOCATION_MIN_DAYS' as PenaltyTypeEnum,
        LicenseSuspensionMaxDays: 'LICENSE_SUSPENSION_MAX_DAYS' as PenaltyTypeEnum,
        LicenseSuspensionMinDays: 'LICENSE_SUSPENSION_MIN_DAYS' as PenaltyTypeEnum,
        MandatoryCourtAppearance: 'MANDATORY_COURT_APPEARANCE' as PenaltyTypeEnum,
        MandatoryCourtAppearanceWithAttorney: 'MANDATORY_COURT_APPEARANCE_WITH_ATTORNEY' as PenaltyTypeEnum,
        MaxBailAmount: 'MAX_BAIL_AMOUNT' as PenaltyTypeEnum,
        MinBailAmount: 'MIN_BAIL_AMOUNT' as PenaltyTypeEnum,
        ProbationInDays: 'PROBATION_IN_DAYS' as PenaltyTypeEnum,
        TotalBailAmount: 'TOTAL_BAIL_AMOUNT' as PenaltyTypeEnum
    };
}


