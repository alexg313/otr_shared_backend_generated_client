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
import { ViolationInputFromJSON, ViolationInputToJSON, } from './';
export function NoViolationCitationFromJSON(json) {
    return NoViolationCitationFromJSONTyped(json, false);
}
export function NoViolationCitationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'caseId': !exists(json, 'caseId') ? undefined : json['caseId'],
        'caseStatus': !exists(json, 'caseStatus') ? undefined : json['caseStatus'],
        'citationId': !exists(json, 'citationId') ? undefined : json['citationId'],
        'regionCode': !exists(json, 'regionCode') ? undefined : json['regionCode'],
        'unsignedImageUrl': !exists(json, 'unsignedImageUrl') ? undefined : json['unsignedImageUrl'],
        'uploadDateUtc': !exists(json, 'uploadDateUtc') ? undefined : (new Date(json['uploadDateUtc'])),
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'violations': !exists(json, 'violations') ? undefined : (json['violations'].map(ViolationInputFromJSON)),
    };
}
export function NoViolationCitationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'caseId': value.caseId,
        'caseStatus': value.caseStatus,
        'citationId': value.citationId,
        'regionCode': value.regionCode,
        'unsignedImageUrl': value.unsignedImageUrl,
        'uploadDateUtc': value.uploadDateUtc === undefined ? undefined : (value.uploadDateUtc.toISOString()),
        'userId': value.userId,
        'violations': value.violations === undefined ? undefined : (value.violations.map(ViolationInputToJSON)),
    };
}
/**
* @export
* @enum {string}
*/
export var NoViolationCitationCaseStatusEnum;
(function (NoViolationCitationCaseStatusEnum) {
    NoViolationCitationCaseStatusEnum["AMENDEDDOWNWITHINCLASS"] = "AMENDED_DOWN_WITHIN_CLASS";
    NoViolationCitationCaseStatusEnum["AMENDEDFULLFINE"] = "AMENDED_FULL_FINE";
    NoViolationCitationCaseStatusEnum["AMENDEDINCREASEDFINE"] = "AMENDED_INCREASED_FINE";
    NoViolationCitationCaseStatusEnum["AMENDEDNOFINE"] = "AMENDED_NO_FINE";
    NoViolationCitationCaseStatusEnum["AMENDEDREDUCEDFINE"] = "AMENDED_REDUCED_FINE";
    NoViolationCitationCaseStatusEnum["AMENDEDTOINFRACTION"] = "AMENDED_TO_INFRACTION";
    NoViolationCitationCaseStatusEnum["AMENDEDTONMV"] = "AMENDED_TO_NMV";
    NoViolationCitationCaseStatusEnum["CANCELLEDATTORNEYATFAULT"] = "CANCELLED_ATTORNEY_AT_FAULT";
    NoViolationCitationCaseStatusEnum["CANCELLEDBYLAWFIRM"] = "CANCELLED_BY_LAWFIRM";
    NoViolationCitationCaseStatusEnum["CANCELLEDBYUSER"] = "CANCELLED_BY_USER";
    NoViolationCitationCaseStatusEnum["CANCELLEDDUPLICATE"] = "CANCELLED_DUPLICATE";
    NoViolationCitationCaseStatusEnum["CANCELLEDNMV"] = "CANCELLED_NMV";
    NoViolationCitationCaseStatusEnum["CANCELLEDNONPAYMENT"] = "CANCELLED_NON_PAYMENT";
    NoViolationCitationCaseStatusEnum["CANCELLEDNOLAWFIRM"] = "CANCELLED_NO_LAWFIRM";
    NoViolationCitationCaseStatusEnum["CANCELLEDOVERDUE"] = "CANCELLED_OVERDUE";
    NoViolationCitationCaseStatusEnum["CANCELLEDTOOSHORTNOTICE"] = "CANCELLED_TOO_SHORT_NOTICE";
    NoViolationCitationCaseStatusEnum["CASEINPROGRESS"] = "CASE_IN_PROGRESS";
    NoViolationCitationCaseStatusEnum["CLIENTCONFIRMED"] = "CLIENT_CONFIRMED";
    NoViolationCitationCaseStatusEnum["CLIENTCONFIRMEDUNPAID"] = "CLIENT_CONFIRMED_UNPAID";
    NoViolationCitationCaseStatusEnum["CLIENTFIREDLAWFIRM"] = "CLIENT_FIRED_LAWFIRM";
    NoViolationCitationCaseStatusEnum["CLIENTFORCEDLOSS"] = "CLIENT_FORCED_LOSS";
    NoViolationCitationCaseStatusEnum["CLIENTPAIDFINE"] = "CLIENT_PAID_FINE";
    NoViolationCitationCaseStatusEnum["CLIENTUNRESPONSIVE"] = "CLIENT_UNRESPONSIVE";
    NoViolationCitationCaseStatusEnum["DEFERRED"] = "DEFERRED";
    NoViolationCitationCaseStatusEnum["DISMISSED"] = "DISMISSED";
    NoViolationCitationCaseStatusEnum["DIVERSION"] = "DIVERSION";
    NoViolationCitationCaseStatusEnum["FEESDISPUTED"] = "FEES_DISPUTED";
    NoViolationCitationCaseStatusEnum["FINEREDUCTIONONLY"] = "FINE_REDUCTION_ONLY";
    NoViolationCitationCaseStatusEnum["LAWFIRMWITHDRAWN"] = "LAWFIRM_WITHDRAWN";
    NoViolationCitationCaseStatusEnum["LOST"] = "LOST";
    NoViolationCitationCaseStatusEnum["NOLAWFIRMAVAILABLE"] = "NO_LAWFIRM_AVAILABLE";
    NoViolationCitationCaseStatusEnum["POINTREDUCTION"] = "POINT_REDUCTION";
    NoViolationCitationCaseStatusEnum["REFUSEDBYLAWFIRM"] = "REFUSED_BY_LAWFIRM";
    NoViolationCitationCaseStatusEnum["RESOLVEDNONPAYMENT"] = "RESOLVED_NON_PAYMENT";
    NoViolationCitationCaseStatusEnum["STALE"] = "STALE";
    NoViolationCitationCaseStatusEnum["TRAFFICSCHOOL"] = "TRAFFIC_SCHOOL";
    NoViolationCitationCaseStatusEnum["UNCONFIRMED"] = "UNCONFIRMED";
})(NoViolationCitationCaseStatusEnum || (NoViolationCitationCaseStatusEnum = {}));
