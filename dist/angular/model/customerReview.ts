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
import { ReviewVoteAggregateModel } from './reviewVoteAggregateModel';
import { ReviewCommentModel } from './reviewCommentModel';
import { Timestamp } from './timestamp';
import { ReviewRatingModel } from './reviewRatingModel';


export interface CustomerReview { 
    comments?: Array<ReviewCommentModel>;
    copy?: string;
    courtName?: string;
    displayName?: string;
    featured?: boolean;
    id?: number;
    loggedInUserVote?: CustomerReview.LoggedInUserVoteEnum;
    nameSetting?: CustomerReview.NameSettingEnum;
    profilePictureUrl?: string;
    ratingModel?: ReviewRatingModel;
    recommendationType?: string;
    resolutionName?: string;
    reviewDateUtc?: Timestamp;
    source?: CustomerReview.SourceEnum;
    starRating?: string;
    stateAbbreviation?: string;
    tagLine?: string;
    ticketLocation?: string;
    voteModel?: ReviewVoteAggregateModel;
}
export namespace CustomerReview {
    export type LoggedInUserVoteEnum = 'HELPFUL' | 'UNHELPFUL';
    export const LoggedInUserVoteEnum = {
        Helpful: 'HELPFUL' as LoggedInUserVoteEnum,
        Unhelpful: 'UNHELPFUL' as LoggedInUserVoteEnum
    };
    export type NameSettingEnum = 'ANONYMOUS' | 'FIRST_NAME_LAST_INITIAL' | 'FULL_NAME';
    export const NameSettingEnum = {
        Anonymous: 'ANONYMOUS' as NameSettingEnum,
        FirstNameLastInitial: 'FIRST_NAME_LAST_INITIAL' as NameSettingEnum,
        FullName: 'FULL_NAME' as NameSettingEnum
    };
    export type SourceEnum = 'ANDROID' | 'APPLE' | 'FACEBOOK' | 'GOOGLE_BUSINESS' | 'OTR' | 'REVIEWS_IO';
    export const SourceEnum = {
        Android: 'ANDROID' as SourceEnum,
        Apple: 'APPLE' as SourceEnum,
        Facebook: 'FACEBOOK' as SourceEnum,
        GoogleBusiness: 'GOOGLE_BUSINESS' as SourceEnum,
        Otr: 'OTR' as SourceEnum,
        ReviewsIo: 'REVIEWS_IO' as SourceEnum
    };
}


