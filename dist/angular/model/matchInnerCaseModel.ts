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
import { MatchCitationModel } from './matchCitationModel';
import { MatchLegalServiceModel } from './matchLegalServiceModel';
import { MatchCaseViolationPenaltyModel } from './matchCaseViolationPenaltyModel';


export interface MatchInnerCaseModel { 
    caseId?: string;
    citation?: MatchCitationModel;
    isLawfirmCodeApplied?: boolean;
    legalServices?: Array<MatchLegalServiceModel>;
    maxPenalties?: Array<MatchCaseViolationPenaltyModel>;
    referralCodeOwner?: MatchInnerCaseModel.ReferralCodeOwnerEnum;
    userId?: number;
}
export namespace MatchInnerCaseModel {
    export type ReferralCodeOwnerEnum = 'LAWFIRM' | 'OTR';
    export const ReferralCodeOwnerEnum = {
        Lawfirm: 'LAWFIRM' as ReferralCodeOwnerEnum,
        Otr: 'OTR' as ReferralCodeOwnerEnum
    };
}


