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
export function ExternalContentVoteFromJSON(json) {
    return ExternalContentVoteFromJSONTyped(json, false);
}
export function ExternalContentVoteFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'voteType': !exists(json, 'voteType') ? undefined : json['voteType'],
    };
}
export function ExternalContentVoteToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'voteType': value.voteType,
    };
}
/**
* @export
* @enum {string}
*/
export var ExternalContentVoteVoteTypeEnum;
(function (ExternalContentVoteVoteTypeEnum) {
    ExternalContentVoteVoteTypeEnum["DISLIKE"] = "DISLIKE";
    ExternalContentVoteVoteTypeEnum["LIKE"] = "LIKE";
})(ExternalContentVoteVoteTypeEnum || (ExternalContentVoteVoteTypeEnum = {}));
