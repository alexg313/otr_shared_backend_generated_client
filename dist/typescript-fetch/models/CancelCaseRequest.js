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
export function CancelCaseRequestFromJSON(json) {
    return CancelCaseRequestFromJSONTyped(json, false);
}
export function CancelCaseRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cancelationReason': !exists(json, 'cancelationReason') ? undefined : json['cancelationReason'],
        'cancelationStatus': !exists(json, 'cancelationStatus') ? undefined : json['cancelationStatus'],
        'caseId': !exists(json, 'caseId') ? undefined : json['caseId'],
        'shouldIssueRefund': !exists(json, 'shouldIssueRefund') ? undefined : json['shouldIssueRefund'],
    };
}
export function CancelCaseRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cancelationReason': value.cancelationReason,
        'cancelationStatus': value.cancelationStatus,
        'caseId': value.caseId,
        'shouldIssueRefund': value.shouldIssueRefund,
    };
}
/**
* @export
* @enum {string}
*/
export var CancelCaseRequestCancelationStatusEnum;
(function (CancelCaseRequestCancelationStatusEnum) {
    CancelCaseRequestCancelationStatusEnum["AMENDEDDOWNWITHINCLASS"] = "AMENDED_DOWN_WITHIN_CLASS";
    CancelCaseRequestCancelationStatusEnum["AMENDEDFULLFINE"] = "AMENDED_FULL_FINE";
    CancelCaseRequestCancelationStatusEnum["AMENDEDINCREASEDFINE"] = "AMENDED_INCREASED_FINE";
    CancelCaseRequestCancelationStatusEnum["AMENDEDNOFINE"] = "AMENDED_NO_FINE";
    CancelCaseRequestCancelationStatusEnum["AMENDEDREDUCEDFINE"] = "AMENDED_REDUCED_FINE";
    CancelCaseRequestCancelationStatusEnum["AMENDEDTOINFRACTION"] = "AMENDED_TO_INFRACTION";
    CancelCaseRequestCancelationStatusEnum["AMENDEDTONMV"] = "AMENDED_TO_NMV";
    CancelCaseRequestCancelationStatusEnum["CANCELLEDATTORNEYATFAULT"] = "CANCELLED_ATTORNEY_AT_FAULT";
    CancelCaseRequestCancelationStatusEnum["CANCELLEDBYLAWFIRM"] = "CANCELLED_BY_LAWFIRM";
    CancelCaseRequestCancelationStatusEnum["CANCELLEDBYUSER"] = "CANCELLED_BY_USER";
    CancelCaseRequestCancelationStatusEnum["CANCELLEDDUPLICATE"] = "CANCELLED_DUPLICATE";
    CancelCaseRequestCancelationStatusEnum["CANCELLEDNMV"] = "CANCELLED_NMV";
    CancelCaseRequestCancelationStatusEnum["CANCELLEDNONPAYMENT"] = "CANCELLED_NON_PAYMENT";
    CancelCaseRequestCancelationStatusEnum["CANCELLEDNOLAWFIRM"] = "CANCELLED_NO_LAWFIRM";
    CancelCaseRequestCancelationStatusEnum["CANCELLEDOVERDUE"] = "CANCELLED_OVERDUE";
    CancelCaseRequestCancelationStatusEnum["CANCELLEDTOOSHORTNOTICE"] = "CANCELLED_TOO_SHORT_NOTICE";
    CancelCaseRequestCancelationStatusEnum["CASEINPROGRESS"] = "CASE_IN_PROGRESS";
    CancelCaseRequestCancelationStatusEnum["CLIENTCONFIRMED"] = "CLIENT_CONFIRMED";
    CancelCaseRequestCancelationStatusEnum["CLIENTCONFIRMEDUNPAID"] = "CLIENT_CONFIRMED_UNPAID";
    CancelCaseRequestCancelationStatusEnum["CLIENTFIREDLAWFIRM"] = "CLIENT_FIRED_LAWFIRM";
    CancelCaseRequestCancelationStatusEnum["CLIENTFORCEDLOSS"] = "CLIENT_FORCED_LOSS";
    CancelCaseRequestCancelationStatusEnum["CLIENTPAIDFINE"] = "CLIENT_PAID_FINE";
    CancelCaseRequestCancelationStatusEnum["CLIENTUNRESPONSIVE"] = "CLIENT_UNRESPONSIVE";
    CancelCaseRequestCancelationStatusEnum["DEFERRED"] = "DEFERRED";
    CancelCaseRequestCancelationStatusEnum["DISMISSED"] = "DISMISSED";
    CancelCaseRequestCancelationStatusEnum["DIVERSION"] = "DIVERSION";
    CancelCaseRequestCancelationStatusEnum["FEESDISPUTED"] = "FEES_DISPUTED";
    CancelCaseRequestCancelationStatusEnum["FINEREDUCTIONONLY"] = "FINE_REDUCTION_ONLY";
    CancelCaseRequestCancelationStatusEnum["LAWFIRMWITHDRAWN"] = "LAWFIRM_WITHDRAWN";
    CancelCaseRequestCancelationStatusEnum["LOST"] = "LOST";
    CancelCaseRequestCancelationStatusEnum["NOLAWFIRMAVAILABLE"] = "NO_LAWFIRM_AVAILABLE";
    CancelCaseRequestCancelationStatusEnum["POINTREDUCTION"] = "POINT_REDUCTION";
    CancelCaseRequestCancelationStatusEnum["REFUSEDBYLAWFIRM"] = "REFUSED_BY_LAWFIRM";
    CancelCaseRequestCancelationStatusEnum["RESOLVEDNONPAYMENT"] = "RESOLVED_NON_PAYMENT";
    CancelCaseRequestCancelationStatusEnum["STALE"] = "STALE";
    CancelCaseRequestCancelationStatusEnum["TRAFFICSCHOOL"] = "TRAFFIC_SCHOOL";
    CancelCaseRequestCancelationStatusEnum["UNCONFIRMED"] = "UNCONFIRMED";
})(CancelCaseRequestCancelationStatusEnum || (CancelCaseRequestCancelationStatusEnum = {}));
