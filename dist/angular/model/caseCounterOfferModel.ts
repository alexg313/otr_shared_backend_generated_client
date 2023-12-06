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


export interface CaseCounterOfferModel { 
    counterOfferAmountInCents?: number;
    counterOfferDateUtc?: Timestamp;
    counterOfferId?: number;
    counterOfferStatus?: string;
    createdByUserId?: number;
    createdByUserRoleId?: number;
    lawfirmCaseId?: number;
    noteToClient?: string;
    noteToOtr?: string;
    refundPercentage?: number;
}

