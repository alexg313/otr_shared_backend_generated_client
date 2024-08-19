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
import { CoachingCardsModel } from './';
/**
 *
 * @export
 * @interface ListUserCoachingCardsResponse
 */
export interface ListUserCoachingCardsResponse {
    /**
     *
     * @type {Array<CoachingCardsModel>}
     * @memberof ListUserCoachingCardsResponse
     */
    userCoachingCards?: Array<CoachingCardsModel>;
    /**
     *
     * @type {number}
     * @memberof ListUserCoachingCardsResponse
     */
    userId?: number;
}
export declare function ListUserCoachingCardsResponseFromJSON(json: any): ListUserCoachingCardsResponse;
export declare function ListUserCoachingCardsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListUserCoachingCardsResponse;
export declare function ListUserCoachingCardsResponseToJSON(value?: ListUserCoachingCardsResponse | null): any;
