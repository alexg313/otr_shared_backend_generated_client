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
import { DurationFromJSON, DurationToJSON, ZoneOffsetFromJSON, ZoneOffsetToJSON, } from './';
export function ZoneOffsetTransitionFromJSON(json) {
    return ZoneOffsetTransitionFromJSONTyped(json, false);
}
export function ZoneOffsetTransitionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dateTimeAfter': !exists(json, 'dateTimeAfter') ? undefined : (new Date(json['dateTimeAfter'])),
        'dateTimeBefore': !exists(json, 'dateTimeBefore') ? undefined : (new Date(json['dateTimeBefore'])),
        'duration': !exists(json, 'duration') ? undefined : DurationFromJSON(json['duration']),
        'gap': !exists(json, 'gap') ? undefined : json['gap'],
        'instant': !exists(json, 'instant') ? undefined : (new Date(json['instant'])),
        'offsetAfter': !exists(json, 'offsetAfter') ? undefined : ZoneOffsetFromJSON(json['offsetAfter']),
        'offsetBefore': !exists(json, 'offsetBefore') ? undefined : ZoneOffsetFromJSON(json['offsetBefore']),
        'overlap': !exists(json, 'overlap') ? undefined : json['overlap'],
    };
}
export function ZoneOffsetTransitionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'dateTimeAfter': value.dateTimeAfter === undefined ? undefined : (value.dateTimeAfter.toISOString()),
        'dateTimeBefore': value.dateTimeBefore === undefined ? undefined : (value.dateTimeBefore.toISOString()),
        'duration': DurationToJSON(value.duration),
        'gap': value.gap,
        'instant': value.instant === undefined ? undefined : (value.instant.toISOString()),
        'offsetAfter': ZoneOffsetToJSON(value.offsetAfter),
        'offsetBefore': ZoneOffsetToJSON(value.offsetBefore),
        'overlap': value.overlap,
    };
}
