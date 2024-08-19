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
import { ForwardMessageRequest } from '../models';
export interface ForwardMessageUsingPOSTRequest {
    xSessionId: string;
    request: ForwardMessageRequest;
}
/**
 *
 */
export declare class WebsocketMessageControllerApi extends runtime.BaseAPI {
    /**
     * forwardMessage
     */
    forwardMessageUsingPOSTRaw(requestParameters: ForwardMessageUsingPOSTRequest): Promise<runtime.ApiResponse<object>>;
    /**
     * forwardMessage
     */
    forwardMessageUsingPOST(requestParameters: ForwardMessageUsingPOSTRequest): Promise<object>;
}
