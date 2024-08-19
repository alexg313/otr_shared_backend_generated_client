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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as runtime from '../runtime';
import { ForwardMessageRequestToJSON, } from '../models';
/**
 *
 */
export class WebsocketMessageControllerApi extends runtime.BaseAPI {
    /**
     * forwardMessage
     */
    forwardMessageUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.xSessionId === null || requestParameters.xSessionId === undefined) {
                throw new runtime.RequiredError('xSessionId', 'Required parameter requestParameters.xSessionId was null or undefined when calling forwardMessageUsingPOST.');
            }
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling forwardMessageUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (requestParameters.xSessionId !== undefined && requestParameters.xSessionId !== null) {
                headerParameters['X-Session-Id'] = String(requestParameters.xSessionId);
            }
            const response = yield this.request({
                path: `/api/v1/forward-message`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ForwardMessageRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * forwardMessage
     */
    forwardMessageUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.forwardMessageUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
}
