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
import { ReviewCommentModelFromJSON, ReviewCommentModelToJSON, ReviewRatingModelFromJSON, ReviewRatingModelToJSON, ReviewVoteAggregateModelFromJSON, ReviewVoteAggregateModelToJSON, TimestampFromJSON, TimestampToJSON, } from './';
export function CustomerReviewFromJSON(json) {
    return CustomerReviewFromJSONTyped(json, false);
}
export function CustomerReviewFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'comments': !exists(json, 'comments') ? undefined : (json['comments'].map(ReviewCommentModelFromJSON)),
        'copy': !exists(json, 'copy') ? undefined : json['copy'],
        'courtName': !exists(json, 'courtName') ? undefined : json['courtName'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'featured': !exists(json, 'featured') ? undefined : json['featured'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'live': !exists(json, 'live') ? undefined : json['live'],
        'loggedInUserVote': !exists(json, 'loggedInUserVote') ? undefined : json['loggedInUserVote'],
        'nameSetting': !exists(json, 'nameSetting') ? undefined : json['nameSetting'],
        'profilePictureSignedUrl': !exists(json, 'profilePictureSignedUrl') ? undefined : json['profilePictureSignedUrl'],
        'profilePictureUrl': !exists(json, 'profilePictureUrl') ? undefined : json['profilePictureUrl'],
        'ratingModel': !exists(json, 'ratingModel') ? undefined : ReviewRatingModelFromJSON(json['ratingModel']),
        'recommendationType': !exists(json, 'recommendationType') ? undefined : json['recommendationType'],
        'resolutionName': !exists(json, 'resolutionName') ? undefined : json['resolutionName'],
        'reviewDateUtc': !exists(json, 'reviewDateUtc') ? undefined : TimestampFromJSON(json['reviewDateUtc']),
        'source': !exists(json, 'source') ? undefined : json['source'],
        'starRating': !exists(json, 'starRating') ? undefined : json['starRating'],
        'stateAbbreviation': !exists(json, 'stateAbbreviation') ? undefined : json['stateAbbreviation'],
        'tagLine': !exists(json, 'tagLine') ? undefined : json['tagLine'],
        'ticketLocation': !exists(json, 'ticketLocation') ? undefined : json['ticketLocation'],
        'voteModel': !exists(json, 'voteModel') ? undefined : ReviewVoteAggregateModelFromJSON(json['voteModel']),
    };
}
export function CustomerReviewToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'comments': value.comments === undefined ? undefined : (value.comments.map(ReviewCommentModelToJSON)),
        'copy': value.copy,
        'courtName': value.courtName,
        'displayName': value.displayName,
        'featured': value.featured,
        'id': value.id,
        'live': value.live,
        'loggedInUserVote': value.loggedInUserVote,
        'nameSetting': value.nameSetting,
        'profilePictureSignedUrl': value.profilePictureSignedUrl,
        'profilePictureUrl': value.profilePictureUrl,
        'ratingModel': ReviewRatingModelToJSON(value.ratingModel),
        'recommendationType': value.recommendationType,
        'resolutionName': value.resolutionName,
        'reviewDateUtc': TimestampToJSON(value.reviewDateUtc),
        'source': value.source,
        'starRating': value.starRating,
        'stateAbbreviation': value.stateAbbreviation,
        'tagLine': value.tagLine,
        'ticketLocation': value.ticketLocation,
        'voteModel': ReviewVoteAggregateModelToJSON(value.voteModel),
    };
}
/**
* @export
* @enum {string}
*/
export var CustomerReviewLoggedInUserVoteEnum;
(function (CustomerReviewLoggedInUserVoteEnum) {
    CustomerReviewLoggedInUserVoteEnum["HELPFUL"] = "HELPFUL";
    CustomerReviewLoggedInUserVoteEnum["UNHELPFUL"] = "UNHELPFUL";
})(CustomerReviewLoggedInUserVoteEnum || (CustomerReviewLoggedInUserVoteEnum = {}));
/**
* @export
* @enum {string}
*/
export var CustomerReviewNameSettingEnum;
(function (CustomerReviewNameSettingEnum) {
    CustomerReviewNameSettingEnum["ANONYMOUS"] = "ANONYMOUS";
    CustomerReviewNameSettingEnum["FIRSTNAMELASTINITIAL"] = "FIRST_NAME_LAST_INITIAL";
    CustomerReviewNameSettingEnum["FULLNAME"] = "FULL_NAME";
})(CustomerReviewNameSettingEnum || (CustomerReviewNameSettingEnum = {}));
/**
* @export
* @enum {string}
*/
export var CustomerReviewSourceEnum;
(function (CustomerReviewSourceEnum) {
    CustomerReviewSourceEnum["ANDROID"] = "ANDROID";
    CustomerReviewSourceEnum["APPLE"] = "APPLE";
    CustomerReviewSourceEnum["FACEBOOK"] = "FACEBOOK";
    CustomerReviewSourceEnum["GOOGLEBUSINESS"] = "GOOGLE_BUSINESS";
    CustomerReviewSourceEnum["OTR"] = "OTR";
    CustomerReviewSourceEnum["REVIEWSIO"] = "REVIEWS_IO";
})(CustomerReviewSourceEnum || (CustomerReviewSourceEnum = {}));
