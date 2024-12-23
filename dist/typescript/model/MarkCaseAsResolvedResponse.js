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
export var MarkCaseAsResolvedResponse;
(function (MarkCaseAsResolvedResponse) {
    let CaseStatusEnum;
    (function (CaseStatusEnum) {
        CaseStatusEnum[CaseStatusEnum["AMENDEDDOWNWITHINCLASS"] = 'AMENDED_DOWN_WITHIN_CLASS'] = "AMENDEDDOWNWITHINCLASS";
        CaseStatusEnum[CaseStatusEnum["AMENDEDFULLFINE"] = 'AMENDED_FULL_FINE'] = "AMENDEDFULLFINE";
        CaseStatusEnum[CaseStatusEnum["AMENDEDINCREASEDFINE"] = 'AMENDED_INCREASED_FINE'] = "AMENDEDINCREASEDFINE";
        CaseStatusEnum[CaseStatusEnum["AMENDEDNOFINE"] = 'AMENDED_NO_FINE'] = "AMENDEDNOFINE";
        CaseStatusEnum[CaseStatusEnum["AMENDEDREDUCEDFINE"] = 'AMENDED_REDUCED_FINE'] = "AMENDEDREDUCEDFINE";
        CaseStatusEnum[CaseStatusEnum["AMENDEDTOINFRACTION"] = 'AMENDED_TO_INFRACTION'] = "AMENDEDTOINFRACTION";
        CaseStatusEnum[CaseStatusEnum["AMENDEDTONMV"] = 'AMENDED_TO_NMV'] = "AMENDEDTONMV";
        CaseStatusEnum[CaseStatusEnum["CANCELLEDATTORNEYATFAULT"] = 'CANCELLED_ATTORNEY_AT_FAULT'] = "CANCELLEDATTORNEYATFAULT";
        CaseStatusEnum[CaseStatusEnum["CANCELLEDBYLAWFIRM"] = 'CANCELLED_BY_LAWFIRM'] = "CANCELLEDBYLAWFIRM";
        CaseStatusEnum[CaseStatusEnum["CANCELLEDBYUSER"] = 'CANCELLED_BY_USER'] = "CANCELLEDBYUSER";
        CaseStatusEnum[CaseStatusEnum["CANCELLEDDUPLICATE"] = 'CANCELLED_DUPLICATE'] = "CANCELLEDDUPLICATE";
        CaseStatusEnum[CaseStatusEnum["CANCELLEDNMV"] = 'CANCELLED_NMV'] = "CANCELLEDNMV";
        CaseStatusEnum[CaseStatusEnum["CANCELLEDNONPAYMENT"] = 'CANCELLED_NON_PAYMENT'] = "CANCELLEDNONPAYMENT";
        CaseStatusEnum[CaseStatusEnum["CANCELLEDNOLAWFIRM"] = 'CANCELLED_NO_LAWFIRM'] = "CANCELLEDNOLAWFIRM";
        CaseStatusEnum[CaseStatusEnum["CANCELLEDOVERDUE"] = 'CANCELLED_OVERDUE'] = "CANCELLEDOVERDUE";
        CaseStatusEnum[CaseStatusEnum["CANCELLEDTOOSHORTNOTICE"] = 'CANCELLED_TOO_SHORT_NOTICE'] = "CANCELLEDTOOSHORTNOTICE";
        CaseStatusEnum[CaseStatusEnum["CASEINPROGRESS"] = 'CASE_IN_PROGRESS'] = "CASEINPROGRESS";
        CaseStatusEnum[CaseStatusEnum["CLIENTCONFIRMED"] = 'CLIENT_CONFIRMED'] = "CLIENTCONFIRMED";
        CaseStatusEnum[CaseStatusEnum["CLIENTCONFIRMEDUNPAID"] = 'CLIENT_CONFIRMED_UNPAID'] = "CLIENTCONFIRMEDUNPAID";
        CaseStatusEnum[CaseStatusEnum["CLIENTFIREDLAWFIRM"] = 'CLIENT_FIRED_LAWFIRM'] = "CLIENTFIREDLAWFIRM";
        CaseStatusEnum[CaseStatusEnum["CLIENTFORCEDLOSS"] = 'CLIENT_FORCED_LOSS'] = "CLIENTFORCEDLOSS";
        CaseStatusEnum[CaseStatusEnum["CLIENTPAIDFINE"] = 'CLIENT_PAID_FINE'] = "CLIENTPAIDFINE";
        CaseStatusEnum[CaseStatusEnum["CLIENTUNRESPONSIVE"] = 'CLIENT_UNRESPONSIVE'] = "CLIENTUNRESPONSIVE";
        CaseStatusEnum[CaseStatusEnum["DEFERRED"] = 'DEFERRED'] = "DEFERRED";
        CaseStatusEnum[CaseStatusEnum["DISMISSED"] = 'DISMISSED'] = "DISMISSED";
        CaseStatusEnum[CaseStatusEnum["DIVERSION"] = 'DIVERSION'] = "DIVERSION";
        CaseStatusEnum[CaseStatusEnum["FEESDISPUTED"] = 'FEES_DISPUTED'] = "FEESDISPUTED";
        CaseStatusEnum[CaseStatusEnum["FINEREDUCTIONONLY"] = 'FINE_REDUCTION_ONLY'] = "FINEREDUCTIONONLY";
        CaseStatusEnum[CaseStatusEnum["LAWFIRMWITHDRAWN"] = 'LAWFIRM_WITHDRAWN'] = "LAWFIRMWITHDRAWN";
        CaseStatusEnum[CaseStatusEnum["LOST"] = 'LOST'] = "LOST";
        CaseStatusEnum[CaseStatusEnum["NOLAWFIRMAVAILABLE"] = 'NO_LAWFIRM_AVAILABLE'] = "NOLAWFIRMAVAILABLE";
        CaseStatusEnum[CaseStatusEnum["POINTREDUCTION"] = 'POINT_REDUCTION'] = "POINTREDUCTION";
        CaseStatusEnum[CaseStatusEnum["REFUSEDBYLAWFIRM"] = 'REFUSED_BY_LAWFIRM'] = "REFUSEDBYLAWFIRM";
        CaseStatusEnum[CaseStatusEnum["RESOLVEDNONPAYMENT"] = 'RESOLVED_NON_PAYMENT'] = "RESOLVEDNONPAYMENT";
        CaseStatusEnum[CaseStatusEnum["STALE"] = 'STALE'] = "STALE";
        CaseStatusEnum[CaseStatusEnum["TRAFFICSCHOOL"] = 'TRAFFIC_SCHOOL'] = "TRAFFICSCHOOL";
        CaseStatusEnum[CaseStatusEnum["UNCONFIRMED"] = 'UNCONFIRMED'] = "UNCONFIRMED";
    })(CaseStatusEnum = MarkCaseAsResolvedResponse.CaseStatusEnum || (MarkCaseAsResolvedResponse.CaseStatusEnum = {}));
    let StatusCategoryEnum;
    (function (StatusCategoryEnum) {
        StatusCategoryEnum[StatusCategoryEnum["ACTIVE"] = 'ACTIVE'] = "ACTIVE";
        StatusCategoryEnum[StatusCategoryEnum["CANCELLED"] = 'CANCELLED'] = "CANCELLED";
        StatusCategoryEnum[StatusCategoryEnum["RESOLVED"] = 'RESOLVED'] = "RESOLVED";
        StatusCategoryEnum[StatusCategoryEnum["UNCONFIRMED"] = 'UNCONFIRMED'] = "UNCONFIRMED";
    })(StatusCategoryEnum = MarkCaseAsResolvedResponse.StatusCategoryEnum || (MarkCaseAsResolvedResponse.StatusCategoryEnum = {}));
})(MarkCaseAsResolvedResponse || (MarkCaseAsResolvedResponse = {}));
