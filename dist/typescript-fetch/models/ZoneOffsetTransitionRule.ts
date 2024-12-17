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

import { exists, mapValues } from '../runtime';
import {
    LocalTime,
    LocalTimeFromJSON,
    LocalTimeFromJSONTyped,
    LocalTimeToJSON,
    ZoneOffset,
    ZoneOffsetFromJSON,
    ZoneOffsetFromJSONTyped,
    ZoneOffsetToJSON,
} from './';

/**
 * 
 * @export
 * @interface ZoneOffsetTransitionRule
 */
export interface ZoneOffsetTransitionRule {
    /**
     * 
     * @type {number}
     * @memberof ZoneOffsetTransitionRule
     */
    dayOfMonthIndicator?: number;
    /**
     * 
     * @type {string}
     * @memberof ZoneOffsetTransitionRule
     */
    dayOfWeek?: ZoneOffsetTransitionRuleDayOfWeekEnum;
    /**
     * 
     * @type {LocalTime}
     * @memberof ZoneOffsetTransitionRule
     */
    localTime?: LocalTime;
    /**
     * 
     * @type {boolean}
     * @memberof ZoneOffsetTransitionRule
     */
    midnightEndOfDay?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ZoneOffsetTransitionRule
     */
    month?: ZoneOffsetTransitionRuleMonthEnum;
    /**
     * 
     * @type {ZoneOffset}
     * @memberof ZoneOffsetTransitionRule
     */
    offsetAfter?: ZoneOffset;
    /**
     * 
     * @type {ZoneOffset}
     * @memberof ZoneOffsetTransitionRule
     */
    offsetBefore?: ZoneOffset;
    /**
     * 
     * @type {ZoneOffset}
     * @memberof ZoneOffsetTransitionRule
     */
    standardOffset?: ZoneOffset;
    /**
     * 
     * @type {string}
     * @memberof ZoneOffsetTransitionRule
     */
    timeDefinition?: ZoneOffsetTransitionRuleTimeDefinitionEnum;
}

export function ZoneOffsetTransitionRuleFromJSON(json: any): ZoneOffsetTransitionRule {
    return ZoneOffsetTransitionRuleFromJSONTyped(json, false);
}

export function ZoneOffsetTransitionRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): ZoneOffsetTransitionRule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dayOfMonthIndicator': !exists(json, 'dayOfMonthIndicator') ? undefined : json['dayOfMonthIndicator'],
        'dayOfWeek': !exists(json, 'dayOfWeek') ? undefined : json['dayOfWeek'],
        'localTime': !exists(json, 'localTime') ? undefined : LocalTimeFromJSON(json['localTime']),
        'midnightEndOfDay': !exists(json, 'midnightEndOfDay') ? undefined : json['midnightEndOfDay'],
        'month': !exists(json, 'month') ? undefined : json['month'],
        'offsetAfter': !exists(json, 'offsetAfter') ? undefined : ZoneOffsetFromJSON(json['offsetAfter']),
        'offsetBefore': !exists(json, 'offsetBefore') ? undefined : ZoneOffsetFromJSON(json['offsetBefore']),
        'standardOffset': !exists(json, 'standardOffset') ? undefined : ZoneOffsetFromJSON(json['standardOffset']),
        'timeDefinition': !exists(json, 'timeDefinition') ? undefined : json['timeDefinition'],
    };
}

export function ZoneOffsetTransitionRuleToJSON(value?: ZoneOffsetTransitionRule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dayOfMonthIndicator': value.dayOfMonthIndicator,
        'dayOfWeek': value.dayOfWeek,
        'localTime': LocalTimeToJSON(value.localTime),
        'midnightEndOfDay': value.midnightEndOfDay,
        'month': value.month,
        'offsetAfter': ZoneOffsetToJSON(value.offsetAfter),
        'offsetBefore': ZoneOffsetToJSON(value.offsetBefore),
        'standardOffset': ZoneOffsetToJSON(value.standardOffset),
        'timeDefinition': value.timeDefinition,
    };
}

/**
* @export
* @enum {string}
*/
export enum ZoneOffsetTransitionRuleDayOfWeekEnum {
    FRIDAY = 'FRIDAY',
    MONDAY = 'MONDAY',
    SATURDAY = 'SATURDAY',
    SUNDAY = 'SUNDAY',
    THURSDAY = 'THURSDAY',
    TUESDAY = 'TUESDAY',
    WEDNESDAY = 'WEDNESDAY'
}
/**
* @export
* @enum {string}
*/
export enum ZoneOffsetTransitionRuleMonthEnum {
    APRIL = 'APRIL',
    AUGUST = 'AUGUST',
    DECEMBER = 'DECEMBER',
    FEBRUARY = 'FEBRUARY',
    JANUARY = 'JANUARY',
    JULY = 'JULY',
    JUNE = 'JUNE',
    MARCH = 'MARCH',
    MAY = 'MAY',
    NOVEMBER = 'NOVEMBER',
    OCTOBER = 'OCTOBER',
    SEPTEMBER = 'SEPTEMBER'
}
/**
* @export
* @enum {string}
*/
export enum ZoneOffsetTransitionRuleTimeDefinitionEnum {
    STANDARD = 'STANDARD',
    UTC = 'UTC',
    WALL = 'WALL'
}


