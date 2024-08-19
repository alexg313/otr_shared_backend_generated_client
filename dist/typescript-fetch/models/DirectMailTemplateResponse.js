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
import { DirectMailTemplateFromJSON, DirectMailTemplateToJSON, } from './';
export function DirectMailTemplateResponseFromJSON(json) {
    return DirectMailTemplateResponseFromJSONTyped(json, false);
}
export function DirectMailTemplateResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'templates': !exists(json, 'templates') ? undefined : (json['templates'].map(DirectMailTemplateFromJSON)),
    };
}
export function DirectMailTemplateResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'templates': value.templates === undefined ? undefined : (value.templates.map(DirectMailTemplateToJSON)),
    };
}
