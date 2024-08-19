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
import { LocalTime, ZoneOffset } from './';
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
export declare function ZoneOffsetTransitionRuleFromJSON(json: any): ZoneOffsetTransitionRule;
export declare function ZoneOffsetTransitionRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): ZoneOffsetTransitionRule;
export declare function ZoneOffsetTransitionRuleToJSON(value?: ZoneOffsetTransitionRule | null): any;
/**
* @export
* @enum {string}
*/
export declare enum ZoneOffsetTransitionRuleDayOfWeekEnum {
    FRIDAY = "FRIDAY",
    MONDAY = "MONDAY",
    SATURDAY = "SATURDAY",
    SUNDAY = "SUNDAY",
    THURSDAY = "THURSDAY",
    TUESDAY = "TUESDAY",
    WEDNESDAY = "WEDNESDAY"
}
/**
* @export
* @enum {string}
*/
export declare enum ZoneOffsetTransitionRuleMonthEnum {
    APRIL = "APRIL",
    AUGUST = "AUGUST",
    DECEMBER = "DECEMBER",
    FEBRUARY = "FEBRUARY",
    JANUARY = "JANUARY",
    JULY = "JULY",
    JUNE = "JUNE",
    MARCH = "MARCH",
    MAY = "MAY",
    NOVEMBER = "NOVEMBER",
    OCTOBER = "OCTOBER",
    SEPTEMBER = "SEPTEMBER"
}
/**
* @export
* @enum {string}
*/
export declare enum ZoneOffsetTransitionRuleTimeDefinitionEnum {
    STANDARD = "STANDARD",
    UTC = "UTC",
    WALL = "WALL"
}
