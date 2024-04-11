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
export function DeleteNotificationEventRequestFromJSON(json) {
    return DeleteNotificationEventRequestFromJSONTyped(json, false);
}
export function DeleteNotificationEventRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'notificationId': !exists(json, 'notificationId') ? undefined : json['notificationId'],
        'pageType': !exists(json, 'pageType') ? undefined : json['pageType'],
    };
}
export function DeleteNotificationEventRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'notificationId': value.notificationId,
        'pageType': value.pageType,
    };
}
/**
* @export
* @enum {string}
*/
export var DeleteNotificationEventRequestPageTypeEnum;
(function (DeleteNotificationEventRequestPageTypeEnum) {
    DeleteNotificationEventRequestPageTypeEnum["CASEACTION"] = "CASE_ACTION";
    DeleteNotificationEventRequestPageTypeEnum["CASEMESSAGES"] = "CASE_MESSAGES";
    DeleteNotificationEventRequestPageTypeEnum["CASESTATUS"] = "CASE_STATUS";
    DeleteNotificationEventRequestPageTypeEnum["COURTDATESCHEDULED"] = "COURT_DATE_SCHEDULED";
    DeleteNotificationEventRequestPageTypeEnum["NEWTICKET"] = "NEW_TICKET";
    DeleteNotificationEventRequestPageTypeEnum["PROFILE"] = "PROFILE";
})(DeleteNotificationEventRequestPageTypeEnum || (DeleteNotificationEventRequestPageTypeEnum = {}));
