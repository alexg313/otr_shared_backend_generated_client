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
/**
 *
 * @export
 * @interface CounterOption
 */
export interface CounterOption {
    /**
     *
     * @type {string}
     * @memberof CounterOption
     */
    counterOptionType?: CounterOptionCounterOptionTypeEnum;
    /**
     *
     * @type {string}
     * @memberof CounterOption
     */
    value?: string;
}
export declare function CounterOptionFromJSON(json: any): CounterOption;
export declare function CounterOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CounterOption;
export declare function CounterOptionToJSON(value?: CounterOption | null): any;
/**
* @export
* @enum {string}
*/
export declare enum CounterOptionCounterOptionTypeEnum {
    FEE = "CHANGE_FEE",
    MBG = "CHANGE_MBG"
}
