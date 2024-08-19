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
import { AppEventCreateRequest } from '../models';
export interface AddAppEventUsingPOSTRequest {
    request: AppEventCreateRequest;
}
/**
 *
 */
export declare class AppEventsControllerApi extends runtime.BaseAPI {
    /**
     * addAppEvent
     */
    addAppEventUsingPOSTRaw(requestParameters: AddAppEventUsingPOSTRequest): Promise<runtime.ApiResponse<object>>;
    /**
     * addAppEvent
     */
    addAppEventUsingPOST(requestParameters: AddAppEventUsingPOSTRequest): Promise<object>;
}
