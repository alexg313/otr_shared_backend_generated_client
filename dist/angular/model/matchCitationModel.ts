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
import { CourtDomain } from './courtDomain';
import { AddressDomain } from './addressDomain';
import { ViolationModel } from './violationModel';
import { PureDate } from './pureDate';
import { Timestamp } from './timestamp';


export interface MatchCitationModel { 
    address?: AddressDomain;
    citationId?: number;
    citationIssueDate?: PureDate;
    citationIssueDateUtc?: Timestamp;
    court?: CourtDomain;
    fineAmount?: number;
    involvesAccident?: boolean;
    isDeleted?: boolean;
    signedTicketImageUrl?: string;
    ticketImageUrl?: string;
    ticketNumber?: string;
    violations?: Array<ViolationModel>;
}

