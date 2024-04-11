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
export function GenerateTemplateRequestFromJSON(json) {
    return GenerateTemplateRequestFromJSONTyped(json, false);
}
export function GenerateTemplateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'caseId': !exists(json, 'caseId') ? undefined : json['caseId'],
        'citationId': !exists(json, 'citationId') ? undefined : json['citationId'],
        'citationViolation': !exists(json, 'citationViolation') ? undefined : json['citationViolation'],
        'emailTemplateId': !exists(json, 'emailTemplateId') ? undefined : json['emailTemplateId'],
        'recipientUserId': !exists(json, 'recipientUserId') ? undefined : json['recipientUserId'],
    };
}
export function GenerateTemplateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'caseId': value.caseId,
        'citationId': value.citationId,
        'citationViolation': value.citationViolation,
        'emailTemplateId': value.emailTemplateId,
        'recipientUserId': value.recipientUserId,
    };
}
/**
* @export
* @enum {string}
*/
export var GenerateTemplateRequestEmailTemplateIdEnum;
(function (GenerateTemplateRequestEmailTemplateIdEnum) {
    GenerateTemplateRequestEmailTemplateIdEnum["AFTERNOONHELLO2"] = "AFTERNOON_HELLO_2";
    GenerateTemplateRequestEmailTemplateIdEnum["ATTICUSATTORNEYCONTACT1"] = "ATTICUS_ATTORNEY_CONTACT_1";
    GenerateTemplateRequestEmailTemplateIdEnum["CAMERATICKETNMV"] = "CAMERA_TICKET_NMV";
    GenerateTemplateRequestEmailTemplateIdEnum["CASECANCELLEDBYUSER"] = "CASE_CANCELLED_BY_USER";
    GenerateTemplateRequestEmailTemplateIdEnum["CASECANCELLEDDUPLICATE"] = "CASE_CANCELLED_DUPLICATE";
    GenerateTemplateRequestEmailTemplateIdEnum["CASECANCELLEDNMV"] = "CASE_CANCELLED_NMV";
    GenerateTemplateRequestEmailTemplateIdEnum["CASECANCELLEDNONPAYMENT"] = "CASE_CANCELLED_NON_PAYMENT";
    GenerateTemplateRequestEmailTemplateIdEnum["CASECANCELLEDNOLAWFIRM"] = "CASE_CANCELLED_NO_LAWFIRM";
    GenerateTemplateRequestEmailTemplateIdEnum["CASECANCELLEDOVERDUE"] = "CASE_CANCELLED_OVERDUE";
    GenerateTemplateRequestEmailTemplateIdEnum["CASECANCELLEDTOOSHORTNOTICE"] = "CASE_CANCELLED_TOO_SHORT_NOTICE";
    GenerateTemplateRequestEmailTemplateIdEnum["CASUALFIRSTV1"] = "CASUAL_FIRST_V1";
    GenerateTemplateRequestEmailTemplateIdEnum["CASUALSECONDV1"] = "CASUAL_SECOND_V1";
    GenerateTemplateRequestEmailTemplateIdEnum["FRIDAYINTRO"] = "FRIDAY_INTRO";
    GenerateTemplateRequestEmailTemplateIdEnum["HUBSPOTGENERIC"] = "HUBSPOT_GENERIC";
    GenerateTemplateRequestEmailTemplateIdEnum["INVALIDIMAGEUPLOAD1"] = "INVALID_IMAGE_UPLOAD_1";
    GenerateTemplateRequestEmailTemplateIdEnum["LAWFIRMCONTACT10V1"] = "LAWFIRM_CONTACT_10_V1";
    GenerateTemplateRequestEmailTemplateIdEnum["LAWFIRMCONTACT1V1"] = "LAWFIRM_CONTACT_1_V1";
    GenerateTemplateRequestEmailTemplateIdEnum["LAWFIRMCONTACT2V1"] = "LAWFIRM_CONTACT_2_V1";
    GenerateTemplateRequestEmailTemplateIdEnum["LAWFIRMCONTACT3V1"] = "LAWFIRM_CONTACT_3_V1";
    GenerateTemplateRequestEmailTemplateIdEnum["LAWFIRMCONTACT4V1"] = "LAWFIRM_CONTACT_4_V1";
    GenerateTemplateRequestEmailTemplateIdEnum["LAWFIRMCONTACT5V1"] = "LAWFIRM_CONTACT_5_V1";
    GenerateTemplateRequestEmailTemplateIdEnum["LAWFIRMCONTACT6V1"] = "LAWFIRM_CONTACT_6_V1";
    GenerateTemplateRequestEmailTemplateIdEnum["LAWFIRMCONTACT7V1"] = "LAWFIRM_CONTACT_7_V1";
    GenerateTemplateRequestEmailTemplateIdEnum["LAWFIRMCONTACT8V1"] = "LAWFIRM_CONTACT_8_V1";
    GenerateTemplateRequestEmailTemplateIdEnum["LAWFIRMCONTACT9V1"] = "LAWFIRM_CONTACT_9_V1";
    GenerateTemplateRequestEmailTemplateIdEnum["LAWYERPOSTCOURTREMINDER"] = "LAWYER_POST_COURT_REMINDER";
    GenerateTemplateRequestEmailTemplateIdEnum["NOCOVERAGEAVAILABLE"] = "NO_COVERAGE_AVAILABLE";
    GenerateTemplateRequestEmailTemplateIdEnum["NOCOVERAGEAVAILABLEMISSINGCOURT"] = "NO_COVERAGE_AVAILABLE_MISSING_COURT";
    GenerateTemplateRequestEmailTemplateIdEnum["PARKINGTICKET"] = "PARKING_TICKET";
    GenerateTemplateRequestEmailTemplateIdEnum["POSTWIN"] = "POST_WIN";
    GenerateTemplateRequestEmailTemplateIdEnum["POSTWINLASTASK"] = "POST_WIN_LAST_ASK";
    GenerateTemplateRequestEmailTemplateIdEnum["POSTWINV2"] = "POST_WIN_V2";
    GenerateTemplateRequestEmailTemplateIdEnum["SUNDAYAFTERNOONHELLO"] = "SUNDAY_AFTERNOON_HELLO";
    GenerateTemplateRequestEmailTemplateIdEnum["TICKETDUEWA"] = "TICKET_DUE_WA";
    GenerateTemplateRequestEmailTemplateIdEnum["TICKETEVALWITHCITATION"] = "TICKET_EVAL_WITH_CITATION";
    GenerateTemplateRequestEmailTemplateIdEnum["TICKETEVALWITHCITATION2NDFOLLOWUP"] = "TICKET_EVAL_WITH_CITATION_2ND_FOLLOW_UP";
    GenerateTemplateRequestEmailTemplateIdEnum["TICKETEVALWITHCITATIONCLOSEOUT"] = "TICKET_EVAL_WITH_CITATION_CLOSE_OUT";
})(GenerateTemplateRequestEmailTemplateIdEnum || (GenerateTemplateRequestEmailTemplateIdEnum = {}));
