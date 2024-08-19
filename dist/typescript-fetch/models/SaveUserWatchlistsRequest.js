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
import { SaveItemToWatchlistRequestFromJSON, SaveItemToWatchlistRequestToJSON, } from './';
export function SaveUserWatchlistsRequestFromJSON(json) {
    return SaveUserWatchlistsRequestFromJSONTyped(json, false);
}
export function SaveUserWatchlistsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'isArchived': !exists(json, 'isArchived') ? undefined : json['isArchived'],
        'watchlistId': !exists(json, 'watchlistId') ? undefined : json['watchlistId'],
        'watchlistItems': !exists(json, 'watchlistItems') ? undefined : SaveItemToWatchlistRequestFromJSON(json['watchlistItems']),
        'watchlistName': !exists(json, 'watchlistName') ? undefined : json['watchlistName'],
    };
}
export function SaveUserWatchlistsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'isArchived': value.isArchived,
        'watchlistId': value.watchlistId,
        'watchlistItems': SaveItemToWatchlistRequestToJSON(value.watchlistItems),
        'watchlistName': value.watchlistName,
    };
}
