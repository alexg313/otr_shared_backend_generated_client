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
import * as runtime from '../runtime';
import { GetActivityFeedResponse, ListCaseOutcomesResponse } from '../models';
export interface ListActivityFeedUsingGETRequest {
    limit: number;
    nextPageToken?: string;
    previousPageToken?: string;
}
export interface ListCaseOutcomesUsingGETRequest {
    includeCriminal?: boolean;
    limit?: number;
    regionCode?: string;
    resolutionStatuses?: ListCaseOutcomesUsingGETResolutionStatusesEnum;
    startDate?: Date;
}
/**
 *
 */
export declare class ActivityFeedControllerApi extends runtime.BaseAPI {
    /**
     * listActivityFeed
     */
    listActivityFeedUsingGETRaw(requestParameters: ListActivityFeedUsingGETRequest): Promise<runtime.ApiResponse<GetActivityFeedResponse>>;
    /**
     * listActivityFeed
     */
    listActivityFeedUsingGET(requestParameters: ListActivityFeedUsingGETRequest): Promise<GetActivityFeedResponse>;
    /**
     * listCaseOutcomes
     */
    listCaseOutcomesUsingGETRaw(requestParameters: ListCaseOutcomesUsingGETRequest): Promise<runtime.ApiResponse<ListCaseOutcomesResponse>>;
    /**
     * listCaseOutcomes
     */
    listCaseOutcomesUsingGET(requestParameters: ListCaseOutcomesUsingGETRequest): Promise<ListCaseOutcomesResponse>;
}
/**
    * @export
    * @enum {string}
    */
export declare enum ListCaseOutcomesUsingGETResolutionStatusesEnum {
    LOST = "LOST",
    POINTSREDUCED = "POINTS_REDUCED",
    REDUCEDTONONMOVER = "REDUCED_TO_NON_MOVER",
    TICKETDISMISSED = "TICKET_DISMISSED"
}
