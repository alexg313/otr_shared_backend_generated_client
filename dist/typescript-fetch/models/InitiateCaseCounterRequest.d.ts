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
import { CounterOption } from './';
/**
 *
 * @export
 * @interface InitiateCaseCounterRequest
 */
export interface InitiateCaseCounterRequest {
    /**
     *
     * @type {Array<CounterOption>}
     * @memberof InitiateCaseCounterRequest
     */
    counterOptions?: Array<CounterOption>;
    /**
     *
     * @type {string}
     * @memberof InitiateCaseCounterRequest
     */
    noteToClient?: string;
    /**
     *
     * @type {string}
     * @memberof InitiateCaseCounterRequest
     */
    noteToOtr?: string;
}
export declare function InitiateCaseCounterRequestFromJSON(json: any): InitiateCaseCounterRequest;
export declare function InitiateCaseCounterRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InitiateCaseCounterRequest;
export declare function InitiateCaseCounterRequestToJSON(value?: InitiateCaseCounterRequest | null): any;
