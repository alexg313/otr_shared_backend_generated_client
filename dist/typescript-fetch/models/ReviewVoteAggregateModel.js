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
export function ReviewVoteAggregateModelFromJSON(json) {
    return ReviewVoteAggregateModelFromJSONTyped(json, false);
}
export function ReviewVoteAggregateModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'helpfulCount': !exists(json, 'helpfulCount') ? undefined : json['helpfulCount'],
        'notHelpfulCount': !exists(json, 'notHelpfulCount') ? undefined : json['notHelpfulCount'],
    };
}
export function ReviewVoteAggregateModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'helpfulCount': value.helpfulCount,
        'notHelpfulCount': value.notHelpfulCount,
    };
}
