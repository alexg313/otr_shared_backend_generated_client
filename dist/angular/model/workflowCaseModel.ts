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
import { WorkflowViolationPenaltyModel } from './workflowViolationPenaltyModel';
import { WorkflowCitationModel } from './workflowCitationModel';
import { LegalServiceModel } from './legalServiceModel';


export interface WorkflowCaseModel { 
    caseId?: string;
    citation?: WorkflowCitationModel;
    isLawfirmCodeApplied?: boolean;
    legalServices?: Array<LegalServiceModel>;
    maxPenalties?: Array<WorkflowViolationPenaltyModel>;
    referralCodeOwner?: WorkflowCaseModel.ReferralCodeOwnerEnum;
    userId?: number;
}
export namespace WorkflowCaseModel {
    export type ReferralCodeOwnerEnum = 'LAWFIRM' | 'OTR';
    export const ReferralCodeOwnerEnum = {
        Lawfirm: 'LAWFIRM' as ReferralCodeOwnerEnum,
        Otr: 'OTR' as ReferralCodeOwnerEnum
    };
}


