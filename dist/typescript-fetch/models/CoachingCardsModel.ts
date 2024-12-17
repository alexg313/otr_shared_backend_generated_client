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
    CoachingCardUsersModel,
    CoachingCardUsersModelFromJSON,
    CoachingCardUsersModelFromJSONTyped,
    CoachingCardUsersModelToJSON,
    CoachingLinks,
    CoachingLinksFromJSON,
    CoachingLinksFromJSONTyped,
    CoachingLinksToJSON,
} from './';

/**
 * 
 * @export
 * @interface CoachingCardsModel
 */
export interface CoachingCardsModel {
    /**
     * 
     * @type {Date}
     * @memberof CoachingCardsModel
     */
    cardCreatedDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof CoachingCardsModel
     */
    cardLastUpdatedDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof CoachingCardsModel
     */
    coachingCardCategoryId?: number;
    /**
     * 
     * @type {number}
     * @memberof CoachingCardsModel
     */
    coachingCardId?: number;
    /**
     * 
     * @type {number}
     * @memberof CoachingCardsModel
     */
    coachingCardSubcategoryId?: number;
    /**
     * 
     * @type {string}
     * @memberof CoachingCardsModel
     */
    coachingCardType?: CoachingCardsModelCoachingCardTypeEnum;
    /**
     * 
     * @type {Array<CoachingCardUsersModel>}
     * @memberof CoachingCardsModel
     */
    coachingCardUsers?: Array<CoachingCardUsersModel>;
    /**
     * 
     * @type {CoachingLinks}
     * @memberof CoachingCardsModel
     */
    coachingLinks?: CoachingLinks;
    /**
     * 
     * @type {string}
     * @memberof CoachingCardsModel
     */
    coachingText?: string;
}

export function CoachingCardsModelFromJSON(json: any): CoachingCardsModel {
    return CoachingCardsModelFromJSONTyped(json, false);
}

export function CoachingCardsModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoachingCardsModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cardCreatedDate': !exists(json, 'cardCreatedDate') ? undefined : (new Date(json['cardCreatedDate'])),
        'cardLastUpdatedDate': !exists(json, 'cardLastUpdatedDate') ? undefined : (new Date(json['cardLastUpdatedDate'])),
        'coachingCardCategoryId': !exists(json, 'coachingCardCategoryId') ? undefined : json['coachingCardCategoryId'],
        'coachingCardId': !exists(json, 'coachingCardId') ? undefined : json['coachingCardId'],
        'coachingCardSubcategoryId': !exists(json, 'coachingCardSubcategoryId') ? undefined : json['coachingCardSubcategoryId'],
        'coachingCardType': !exists(json, 'coachingCardType') ? undefined : json['coachingCardType'],
        'coachingCardUsers': !exists(json, 'coachingCardUsers') ? undefined : ((json['coachingCardUsers'] as Array<any>).map(CoachingCardUsersModelFromJSON)),
        'coachingLinks': !exists(json, 'coachingLinks') ? undefined : CoachingLinksFromJSON(json['coachingLinks']),
        'coachingText': !exists(json, 'coachingText') ? undefined : json['coachingText'],
    };
}

export function CoachingCardsModelToJSON(value?: CoachingCardsModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cardCreatedDate': value.cardCreatedDate === undefined ? undefined : (value.cardCreatedDate.toISOString()),
        'cardLastUpdatedDate': value.cardLastUpdatedDate === undefined ? undefined : (value.cardLastUpdatedDate.toISOString()),
        'coachingCardCategoryId': value.coachingCardCategoryId,
        'coachingCardId': value.coachingCardId,
        'coachingCardSubcategoryId': value.coachingCardSubcategoryId,
        'coachingCardType': value.coachingCardType,
        'coachingCardUsers': value.coachingCardUsers === undefined ? undefined : ((value.coachingCardUsers as Array<any>).map(CoachingCardUsersModelToJSON)),
        'coachingLinks': CoachingLinksToJSON(value.coachingLinks),
        'coachingText': value.coachingText,
    };
}

/**
* @export
* @enum {string}
*/
export enum CoachingCardsModelCoachingCardTypeEnum {
    COACHING = 'COACHING',
    KUDOS = 'KUDOS'
}


