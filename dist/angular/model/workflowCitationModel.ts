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
import { WorkflowViolationModel } from './workflowViolationModel';
import { CourtDomain } from './courtDomain';
import { AddressDomain } from './addressDomain';
import { PureDate } from './pureDate';
import { Timestamp } from './timestamp';


export interface WorkflowCitationModel { 
    address?: AddressDomain;
    cdlStatus?: WorkflowCitationModel.CdlStatusEnum;
    citationId?: number;
    citationIssueDate?: PureDate;
    citationIssueDateUtc?: Timestamp;
    citationLockedForClient?: boolean;
    clientEmailAddress?: string;
    clientFirstName?: string;
    court?: CourtDomain;
    documentUrlToConvert?: string;
    fineAmount?: number;
    hasCitationImage?: boolean;
    involvesAccident?: boolean;
    isDeleted?: boolean;
    regionCode?: string;
    signedTicketImageUrl?: string;
    ticketImageUrl?: string;
    ticketNumber?: string;
    violationCount?: number;
    violations?: Array<WorkflowViolationModel>;
}
export namespace WorkflowCitationModel {
    export type CdlStatusEnum = 'CDL_IN_COMMERCIAL_VEHICLE' | 'CDL_IN_PERSONAL_VEHICLE' | 'NO_CDL';
    export const CdlStatusEnum = {
        CdlInCommercialVehicle: 'CDL_IN_COMMERCIAL_VEHICLE' as CdlStatusEnum,
        CdlInPersonalVehicle: 'CDL_IN_PERSONAL_VEHICLE' as CdlStatusEnum,
        NoCdl: 'NO_CDL' as CdlStatusEnum
    };
}


