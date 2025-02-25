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
import { exists } from '../runtime';
import { FreshDeskTicketReqFromJSON, FreshDeskTicketReqToJSON, TimestampReqFromJSON, TimestampReqToJSON, } from './';
export function LawfirmCaseModelReqFromJSON(json) {
    return LawfirmCaseModelReqFromJSONTyped(json, false);
}
export function LawfirmCaseModelReqFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'caseArchivedByLawfirm': !exists(json, 'caseArchivedByLawfirm') ? undefined : json['caseArchivedByLawfirm'],
        'caseDecisionStatus': !exists(json, 'caseDecisionStatus') ? undefined : json['caseDecisionStatus'],
        'clientDeclineTicket': !exists(json, 'clientDeclineTicket') ? undefined : FreshDeskTicketReqFromJSON(json['clientDeclineTicket']),
        'declineReason': !exists(json, 'declineReason') ? undefined : json['declineReason'],
        'isMatchInternal': !exists(json, 'isMatchInternal') ? undefined : json['isMatchInternal'],
        'isSelected': !exists(json, 'isSelected') ? undefined : json['isSelected'],
        'lawfirmCaseId': !exists(json, 'lawfirmCaseId') ? undefined : json['lawfirmCaseId'],
        'lawfirmDecisionDateUtc': !exists(json, 'lawfirmDecisionDateUtc') ? undefined : (new Date(json['lawfirmDecisionDateUtc'])),
        'lawfirmDeclineTicket': !exists(json, 'lawfirmDeclineTicket') ? undefined : FreshDeskTicketReqFromJSON(json['lawfirmDeclineTicket']),
        'lawfirmId': !exists(json, 'lawfirmId') ? undefined : json['lawfirmId'],
        'lawfirmName': !exists(json, 'lawfirmName') ? undefined : json['lawfirmName'],
        'lawfirmPrimaryEmail': !exists(json, 'lawfirmPrimaryEmail') ? undefined : json['lawfirmPrimaryEmail'],
        'lawfirmReceiptDateUtc': !exists(json, 'lawfirmReceiptDateUtc') ? undefined : TimestampReqFromJSON(json['lawfirmReceiptDateUtc']),
        'lawyerCounterOfferTicketId': !exists(json, 'lawyerCounterOfferTicketId') ? undefined : json['lawyerCounterOfferTicketId'],
        'matchExpirationDateUtc': !exists(json, 'matchExpirationDateUtc') ? undefined : (new Date(json['matchExpirationDateUtc'])),
        'obfuscatedPictureUrl': !exists(json, 'obfuscatedPictureUrl') ? undefined : json['obfuscatedPictureUrl'],
        'profilePictureUrl': !exists(json, 'profilePictureUrl') ? undefined : json['profilePictureUrl'],
        'refundOwner': !exists(json, 'refundOwner') ? undefined : json['refundOwner'],
    };
}
export function LawfirmCaseModelReqToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'caseArchivedByLawfirm': value.caseArchivedByLawfirm,
        'caseDecisionStatus': value.caseDecisionStatus,
        'clientDeclineTicket': FreshDeskTicketReqToJSON(value.clientDeclineTicket),
        'declineReason': value.declineReason,
        'isMatchInternal': value.isMatchInternal,
        'isSelected': value.isSelected,
        'lawfirmCaseId': value.lawfirmCaseId,
        'lawfirmDecisionDateUtc': value.lawfirmDecisionDateUtc === undefined ? undefined : (value.lawfirmDecisionDateUtc.toISOString()),
        'lawfirmDeclineTicket': FreshDeskTicketReqToJSON(value.lawfirmDeclineTicket),
        'lawfirmId': value.lawfirmId,
        'lawfirmName': value.lawfirmName,
        'lawfirmPrimaryEmail': value.lawfirmPrimaryEmail,
        'lawfirmReceiptDateUtc': TimestampReqToJSON(value.lawfirmReceiptDateUtc),
        'lawyerCounterOfferTicketId': value.lawyerCounterOfferTicketId,
        'matchExpirationDateUtc': value.matchExpirationDateUtc === undefined ? undefined : (value.matchExpirationDateUtc.toISOString()),
        'obfuscatedPictureUrl': value.obfuscatedPictureUrl,
        'profilePictureUrl': value.profilePictureUrl,
        'refundOwner': value.refundOwner,
    };
}
/**
* @export
* @enum {string}
*/
export var LawfirmCaseModelReqCaseDecisionStatusEnum;
(function (LawfirmCaseModelReqCaseDecisionStatusEnum) {
    LawfirmCaseModelReqCaseDecisionStatusEnum["ACCEPTED"] = "ACCEPTED";
    LawfirmCaseModelReqCaseDecisionStatusEnum["CREATED"] = "CREATED";
    LawfirmCaseModelReqCaseDecisionStatusEnum["DECLINED"] = "DECLINED";
    LawfirmCaseModelReqCaseDecisionStatusEnum["EXPIRED"] = "EXPIRED";
    LawfirmCaseModelReqCaseDecisionStatusEnum["PENDING"] = "PENDING";
    LawfirmCaseModelReqCaseDecisionStatusEnum["REMATCHED"] = "REMATCHED";
    LawfirmCaseModelReqCaseDecisionStatusEnum["REMATCHEDREFERRAL"] = "REMATCHED_REFERRAL";
})(LawfirmCaseModelReqCaseDecisionStatusEnum || (LawfirmCaseModelReqCaseDecisionStatusEnum = {}));
/**
* @export
* @enum {string}
*/
export var LawfirmCaseModelReqRefundOwnerEnum;
(function (LawfirmCaseModelReqRefundOwnerEnum) {
    LawfirmCaseModelReqRefundOwnerEnum["LAWFIRM"] = "LAWFIRM";
    LawfirmCaseModelReqRefundOwnerEnum["NONE"] = "NONE";
    LawfirmCaseModelReqRefundOwnerEnum["OTR"] = "OTR";
})(LawfirmCaseModelReqRefundOwnerEnum || (LawfirmCaseModelReqRefundOwnerEnum = {}));
