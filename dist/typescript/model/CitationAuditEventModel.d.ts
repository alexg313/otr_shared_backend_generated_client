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
export interface CitationAuditEventModel {
    "authorName"?: string;
    "citationEventId"?: number;
    "clientType"?: CitationAuditEventModel.ClientTypeEnum;
    "event"?: CitationAuditEventModel.EventEnum;
    "eventDate"?: string;
    "eventId"?: number;
    "newValue"?: string;
    "oldValue"?: string;
    "userId"?: number;
}
export declare namespace CitationAuditEventModel {
    enum ClientTypeEnum {
        ANDROID,
        DESKTOPWEBAPP,
        DMVGO,
        DMVORG,
        FRESHDESK,
        IOS,
        MOBILEWEBAPP,
        OTRADMINCONSOLE,
        OTRADMINCONSOLEDEVO,
        OTRADMINCONSOLELOCALHOST,
        OTREXPLORER,
        OTRLAWFIRMPORTAL,
        OTRLAWFIRMPORTALDEVO,
        OTRLAWFIRMPORTALLOCALHOST,
        OTRWEBSITE,
        OTRWEBSITEDEVO,
        OTRWEBSITELOCALHOST,
        OTRWIDGET,
        UNKNOWN
    }
    enum EventEnum {
        CASEACCEPT,
        CASEBOOKING,
        CASECANCEL,
        CASEDECLINE,
        CASEMATCH,
        CASERESOLVE,
        CASESTATUS,
        CASETRANSFER,
        CASEUNSERVICEABLEREQUEST,
        CITATIONUPLOAD,
        DECIDEEXPERIMENTGROUPCOMMAND,
        EXTERNALTICKETREQUEST,
        GHOSTACCOUNTCREATED,
        LAWFIRMACCOUNTPRIORITY,
        LAWFIRMACCOUNTSTATUS,
        LAWFIRMDAILYCAPACITY,
        LAWFIRMTOTALCAPACITY,
        LINEITEMADDED,
        LINEITEMDELETED,
        PASSWORDCHANGE,
        PASSWORDRESETREQUESTED,
        PAYMENTAUTHORIZED,
        PAYMENTCAPTURED,
        PAYMENTMETHODADD,
        PAYMENTMETHODDELETE,
        PAYMENTREFUNDED,
        PAYMENTSCHEDULED,
        REFERRALCODEAPPLIED,
        REFERRALCODEATTEMPTFAILED,
        REFERRALCODEREMOVED,
        SAVEVACATIONMODEENDDATE,
        SAVEVACATIONMODEREASON,
        UNKNOWN,
        USERLOGINEVENT,
        USERREGISTRATION,
        VACATIONMODETOGGLE,
        VACATIONMODEUPDATE,
        VERIFYEMAIL
    }
}
