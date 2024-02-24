"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCaseActionTypesResponse = void 0;
var GetCaseActionTypesResponse;
(function (GetCaseActionTypesResponse) {
    var CaseActionTypesEnum;
    (function (CaseActionTypesEnum) {
        CaseActionTypesEnum[CaseActionTypesEnum["CASEACCEPT"] = 'CASE_ACCEPT'] = "CASEACCEPT";
        CaseActionTypesEnum[CaseActionTypesEnum["CASECOUNTERACCEPTED"] = 'CASE_COUNTER_ACCEPTED'] = "CASECOUNTERACCEPTED";
        CaseActionTypesEnum[CaseActionTypesEnum["CASECOUNTERDECLINED"] = 'CASE_COUNTER_DECLINED'] = "CASECOUNTERDECLINED";
        CaseActionTypesEnum[CaseActionTypesEnum["CASECOUNTERINITIATED"] = 'CASE_COUNTER_INITIATED'] = "CASECOUNTERINITIATED";
        CaseActionTypesEnum[CaseActionTypesEnum["CASECOUNTERWITHDRAWN"] = 'CASE_COUNTER_WITHDRAWN'] = "CASECOUNTERWITHDRAWN";
        CaseActionTypesEnum[CaseActionTypesEnum["CASEDECLINE"] = 'CASE_DECLINE'] = "CASEDECLINE";
        CaseActionTypesEnum[CaseActionTypesEnum["CITATIONDATAEXTRACTED"] = 'CITATION_DATA_EXTRACTED'] = "CITATIONDATAEXTRACTED";
        CaseActionTypesEnum[CaseActionTypesEnum["COURTDATEREMOVED"] = 'COURT_DATE_REMOVED'] = "COURTDATEREMOVED";
        CaseActionTypesEnum[CaseActionTypesEnum["COURTDATESCHEDULED"] = 'COURT_DATE_SCHEDULED'] = "COURTDATESCHEDULED";
        CaseActionTypesEnum[CaseActionTypesEnum["DISCOVERYRECEIVED"] = 'DISCOVERY_RECEIVED'] = "DISCOVERYRECEIVED";
        CaseActionTypesEnum[CaseActionTypesEnum["DISCOVERYREQUESTED"] = 'DISCOVERY_REQUESTED'] = "DISCOVERYREQUESTED";
        CaseActionTypesEnum[CaseActionTypesEnum["DISPUTEFILED"] = 'DISPUTE_FILED'] = "DISPUTEFILED";
        CaseActionTypesEnum[CaseActionTypesEnum["DRIVERLICENSEREQUESTED"] = 'DRIVER_LICENSE_REQUESTED'] = "DRIVERLICENSEREQUESTED";
        CaseActionTypesEnum[CaseActionTypesEnum["FAILEDPAYMENTATTEMPT"] = 'FAILED_PAYMENT_ATTEMPT'] = "FAILEDPAYMENTATTEMPT";
        CaseActionTypesEnum[CaseActionTypesEnum["NOTICEOFAPPEARANCEFILED"] = 'NOTICE_OF_APPEARANCE_FILED'] = "NOTICEOFAPPEARANCEFILED";
        CaseActionTypesEnum[CaseActionTypesEnum["OTHER"] = 'OTHER'] = "OTHER";
        CaseActionTypesEnum[CaseActionTypesEnum["OVERDUEBALANCEPAID"] = 'OVERDUE_BALANCE_PAID'] = "OVERDUEBALANCEPAID";
        CaseActionTypesEnum[CaseActionTypesEnum["REVIEWEDBYLAWFIRM"] = 'REVIEWED_BY_LAWFIRM'] = "REVIEWEDBYLAWFIRM";
        CaseActionTypesEnum[CaseActionTypesEnum["SOCIALMEDIAASK"] = 'SOCIAL_MEDIA_ASK'] = "SOCIALMEDIAASK";
        CaseActionTypesEnum[CaseActionTypesEnum["TICKETMAILEDTOCOURT"] = 'TICKET_MAILED_TO_COURT'] = "TICKETMAILEDTOCOURT";
    })(CaseActionTypesEnum = GetCaseActionTypesResponse.CaseActionTypesEnum || (GetCaseActionTypesResponse.CaseActionTypesEnum = {}));
})(GetCaseActionTypesResponse = exports.GetCaseActionTypesResponse || (exports.GetCaseActionTypesResponse = {}));
