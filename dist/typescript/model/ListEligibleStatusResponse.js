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
export var ListEligibleStatusResponse;
(function (ListEligibleStatusResponse) {
    let StatusesEnum;
    (function (StatusesEnum) {
        StatusesEnum[StatusesEnum["AMENDEDDOWNWITHINCLASS"] = 'AMENDED_DOWN_WITHIN_CLASS'] = "AMENDEDDOWNWITHINCLASS";
        StatusesEnum[StatusesEnum["AMENDEDFULLFINE"] = 'AMENDED_FULL_FINE'] = "AMENDEDFULLFINE";
        StatusesEnum[StatusesEnum["AMENDEDINCREASEDFINE"] = 'AMENDED_INCREASED_FINE'] = "AMENDEDINCREASEDFINE";
        StatusesEnum[StatusesEnum["AMENDEDNOFINE"] = 'AMENDED_NO_FINE'] = "AMENDEDNOFINE";
        StatusesEnum[StatusesEnum["AMENDEDREDUCEDFINE"] = 'AMENDED_REDUCED_FINE'] = "AMENDEDREDUCEDFINE";
        StatusesEnum[StatusesEnum["AMENDEDTOINFRACTION"] = 'AMENDED_TO_INFRACTION'] = "AMENDEDTOINFRACTION";
        StatusesEnum[StatusesEnum["AMENDEDTONMV"] = 'AMENDED_TO_NMV'] = "AMENDEDTONMV";
        StatusesEnum[StatusesEnum["CANCELLEDATTORNEYATFAULT"] = 'CANCELLED_ATTORNEY_AT_FAULT'] = "CANCELLEDATTORNEYATFAULT";
        StatusesEnum[StatusesEnum["CANCELLEDBYLAWFIRM"] = 'CANCELLED_BY_LAWFIRM'] = "CANCELLEDBYLAWFIRM";
        StatusesEnum[StatusesEnum["CANCELLEDBYUSER"] = 'CANCELLED_BY_USER'] = "CANCELLEDBYUSER";
        StatusesEnum[StatusesEnum["CANCELLEDDUPLICATE"] = 'CANCELLED_DUPLICATE'] = "CANCELLEDDUPLICATE";
        StatusesEnum[StatusesEnum["CANCELLEDNMV"] = 'CANCELLED_NMV'] = "CANCELLEDNMV";
        StatusesEnum[StatusesEnum["CANCELLEDNONPAYMENT"] = 'CANCELLED_NON_PAYMENT'] = "CANCELLEDNONPAYMENT";
        StatusesEnum[StatusesEnum["CANCELLEDNOLAWFIRM"] = 'CANCELLED_NO_LAWFIRM'] = "CANCELLEDNOLAWFIRM";
        StatusesEnum[StatusesEnum["CANCELLEDOVERDUE"] = 'CANCELLED_OVERDUE'] = "CANCELLEDOVERDUE";
        StatusesEnum[StatusesEnum["CANCELLEDTOOSHORTNOTICE"] = 'CANCELLED_TOO_SHORT_NOTICE'] = "CANCELLEDTOOSHORTNOTICE";
        StatusesEnum[StatusesEnum["CASEINPROGRESS"] = 'CASE_IN_PROGRESS'] = "CASEINPROGRESS";
        StatusesEnum[StatusesEnum["CLIENTCONFIRMED"] = 'CLIENT_CONFIRMED'] = "CLIENTCONFIRMED";
        StatusesEnum[StatusesEnum["CLIENTCONFIRMEDUNPAID"] = 'CLIENT_CONFIRMED_UNPAID'] = "CLIENTCONFIRMEDUNPAID";
        StatusesEnum[StatusesEnum["CLIENTFIREDLAWFIRM"] = 'CLIENT_FIRED_LAWFIRM'] = "CLIENTFIREDLAWFIRM";
        StatusesEnum[StatusesEnum["CLIENTFORCEDLOSS"] = 'CLIENT_FORCED_LOSS'] = "CLIENTFORCEDLOSS";
        StatusesEnum[StatusesEnum["CLIENTPAIDFINE"] = 'CLIENT_PAID_FINE'] = "CLIENTPAIDFINE";
        StatusesEnum[StatusesEnum["CLIENTUNRESPONSIVE"] = 'CLIENT_UNRESPONSIVE'] = "CLIENTUNRESPONSIVE";
        StatusesEnum[StatusesEnum["DEFERRED"] = 'DEFERRED'] = "DEFERRED";
        StatusesEnum[StatusesEnum["DISMISSED"] = 'DISMISSED'] = "DISMISSED";
        StatusesEnum[StatusesEnum["DIVERSION"] = 'DIVERSION'] = "DIVERSION";
        StatusesEnum[StatusesEnum["FEESDISPUTED"] = 'FEES_DISPUTED'] = "FEESDISPUTED";
        StatusesEnum[StatusesEnum["FINEREDUCTIONONLY"] = 'FINE_REDUCTION_ONLY'] = "FINEREDUCTIONONLY";
        StatusesEnum[StatusesEnum["LAWFIRMWITHDRAWN"] = 'LAWFIRM_WITHDRAWN'] = "LAWFIRMWITHDRAWN";
        StatusesEnum[StatusesEnum["LOST"] = 'LOST'] = "LOST";
        StatusesEnum[StatusesEnum["NOLAWFIRMAVAILABLE"] = 'NO_LAWFIRM_AVAILABLE'] = "NOLAWFIRMAVAILABLE";
        StatusesEnum[StatusesEnum["POINTREDUCTION"] = 'POINT_REDUCTION'] = "POINTREDUCTION";
        StatusesEnum[StatusesEnum["REFUSEDBYLAWFIRM"] = 'REFUSED_BY_LAWFIRM'] = "REFUSEDBYLAWFIRM";
        StatusesEnum[StatusesEnum["RESOLVEDNONPAYMENT"] = 'RESOLVED_NON_PAYMENT'] = "RESOLVEDNONPAYMENT";
        StatusesEnum[StatusesEnum["STALE"] = 'STALE'] = "STALE";
        StatusesEnum[StatusesEnum["TRAFFICSCHOOL"] = 'TRAFFIC_SCHOOL'] = "TRAFFICSCHOOL";
        StatusesEnum[StatusesEnum["UNCONFIRMED"] = 'UNCONFIRMED'] = "UNCONFIRMED";
    })(StatusesEnum = ListEligibleStatusResponse.StatusesEnum || (ListEligibleStatusResponse.StatusesEnum = {}));
})(ListEligibleStatusResponse || (ListEligibleStatusResponse = {}));
