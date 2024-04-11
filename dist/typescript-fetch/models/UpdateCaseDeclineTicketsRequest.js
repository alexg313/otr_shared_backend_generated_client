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
export function UpdateCaseDeclineTicketsRequestFromJSON(json) {
    return UpdateCaseDeclineTicketsRequestFromJSONTyped(json, false);
}
export function UpdateCaseDeclineTicketsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'clientDeclineTicketId': !exists(json, 'clientDeclineTicketId') ? undefined : json['clientDeclineTicketId'],
        'lawfirmDeclineTicketId': !exists(json, 'lawfirmDeclineTicketId') ? undefined : json['lawfirmDeclineTicketId'],
        'lawfirmId': !exists(json, 'lawfirmId') ? undefined : json['lawfirmId'],
    };
}
export function UpdateCaseDeclineTicketsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'clientDeclineTicketId': value.clientDeclineTicketId,
        'lawfirmDeclineTicketId': value.lawfirmDeclineTicketId,
        'lawfirmId': value.lawfirmId,
    };
}
