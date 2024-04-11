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
export interface OnDeliveredEmailFromHubspotUsingPOSTRequest {
    body: string;
}
/**
 *
 */
export declare class HubspotWebhookControllerApi extends runtime.BaseAPI {
    /**
     * onDeliveredEmailFromHubspot
     */
    onDeliveredEmailFromHubspotUsingPOSTRaw(requestParameters: OnDeliveredEmailFromHubspotUsingPOSTRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * onDeliveredEmailFromHubspot
     */
    onDeliveredEmailFromHubspotUsingPOST(requestParameters: OnDeliveredEmailFromHubspotUsingPOSTRequest): Promise<void>;
}
