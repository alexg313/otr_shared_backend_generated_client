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
import { ActionByEntityModelFromJSON, ActionByEntityModelToJSON, MessageByEntityModelFromJSON, MessageByEntityModelToJSON, } from './';
export function GetMessagesByEntityResponseFromJSON(json) {
    return GetMessagesByEntityResponseFromJSONTyped(json, false);
}
export function GetMessagesByEntityResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'actions': !exists(json, 'actions') ? undefined : (json['actions'].map(ActionByEntityModelFromJSON)),
        'messages': !exists(json, 'messages') ? undefined : (json['messages'].map(MessageByEntityModelFromJSON)),
        'numActions': !exists(json, 'numActions') ? undefined : json['numActions'],
        'numMessages': !exists(json, 'numMessages') ? undefined : json['numMessages'],
    };
}
export function GetMessagesByEntityResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'actions': value.actions === undefined ? undefined : (value.actions.map(ActionByEntityModelToJSON)),
        'messages': value.messages === undefined ? undefined : (value.messages.map(MessageByEntityModelToJSON)),
        'numActions': value.numActions,
        'numMessages': value.numMessages,
    };
}
