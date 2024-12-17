/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CaseActionRequestModel
 */
export interface CaseActionRequestModel {
    /**
     * 
     * @type {Date}
     * @memberof CaseActionRequestModel
     */
    actionDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof CaseActionRequestModel
     */
    actionNote?: string;
    /**
     * 
     * @type {string}
     * @memberof CaseActionRequestModel
     */
    actionType?: CaseActionRequestModelActionTypeEnum;
}

export function CaseActionRequestModelFromJSON(json: any): CaseActionRequestModel {
    return CaseActionRequestModelFromJSONTyped(json, false);
}

export function CaseActionRequestModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CaseActionRequestModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actionDate': !exists(json, 'actionDate') ? undefined : (new Date(json['actionDate'])),
        'actionNote': !exists(json, 'actionNote') ? undefined : json['actionNote'],
        'actionType': !exists(json, 'actionType') ? undefined : json['actionType'],
    };
}

export function CaseActionRequestModelToJSON(value?: CaseActionRequestModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actionDate': value.actionDate === undefined ? undefined : (value.actionDate.toISOString()),
        'actionNote': value.actionNote,
        'actionType': value.actionType,
    };
}

/**
* @export
* @enum {string}
*/
export enum CaseActionRequestModelActionTypeEnum {
    CASEACCEPT = 'CASE_ACCEPT',
    CASECOUNTERACCEPTED = 'CASE_COUNTER_ACCEPTED',
    CASECOUNTERDECLINED = 'CASE_COUNTER_DECLINED',
    CASECOUNTERINITIATED = 'CASE_COUNTER_INITIATED',
    CASECOUNTERWITHDRAWN = 'CASE_COUNTER_WITHDRAWN',
    CASEDECLINE = 'CASE_DECLINE',
    CITATIONDATAEXTRACTED = 'CITATION_DATA_EXTRACTED',
    COURTDATEREMOVED = 'COURT_DATE_REMOVED',
    COURTDATESCHEDULED = 'COURT_DATE_SCHEDULED',
    DISCOVERYRECEIVED = 'DISCOVERY_RECEIVED',
    DISCOVERYREQUESTED = 'DISCOVERY_REQUESTED',
    DISPUTEFILED = 'DISPUTE_FILED',
    DRIVERLICENSEREQUESTED = 'DRIVER_LICENSE_REQUESTED',
    FAILEDPAYMENTATTEMPT = 'FAILED_PAYMENT_ATTEMPT',
    NOTICEOFAPPEARANCEFILED = 'NOTICE_OF_APPEARANCE_FILED',
    OTHER = 'OTHER',
    OVERDUEBALANCEPAID = 'OVERDUE_BALANCE_PAID',
    REVIEWEDBYLAWFIRM = 'REVIEWED_BY_LAWFIRM',
    SOCIALMEDIAASK = 'SOCIAL_MEDIA_ASK',
    TICKETMAILEDTOCOURT = 'TICKET_MAILED_TO_COURT'
}


