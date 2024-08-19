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
import { DeleteNotificationByPagesRequestToJSON, DeleteNotificationEventRequestToJSON, NotificationEventsFromJSON, PushNotificationRegistrationRequestToJSON, PushNotificationRequestToJSON, } from '../models';
/**
 *
 */
export class PushNotificationControllerApi extends runtime.BaseAPI {
    /**
     * getUnreadCounts
     */
    getUnreadCountsUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.includeMessage !== undefined) {
                queryParameters['includeMessage'] = requestParameters.includeMessage;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/notifications/unread`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => NotificationEventsFromJSON(jsonValue));
        });
    }
    /**
     * getUnreadCounts
     */
    getUnreadCountsUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getUnreadCountsUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * markAllReadForUser
     */
    markAllReadForUserUsingDELETERaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.userId === null || requestParameters.userId === undefined) {
                throw new runtime.RequiredError('userId', 'Required parameter requestParameters.userId was null or undefined when calling markAllReadForUserUsingDELETE.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/notifications/unread/{userId}/user`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * markAllReadForUser
     */
    markAllReadForUserUsingDELETE(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.markAllReadForUserUsingDELETERaw(requestParameters);
        });
    }
    /**
     * markCaseNotificationsAsUnread
     */
    markCaseNotificationsAsUnreadUsingPUTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
                throw new runtime.RequiredError('caseId', 'Required parameter requestParameters.caseId was null or undefined when calling markCaseNotificationsAsUnreadUsingPUT.');
            }
            if (requestParameters.userId === null || requestParameters.userId === undefined) {
                throw new runtime.RequiredError('userId', 'Required parameter requestParameters.userId was null or undefined when calling markCaseNotificationsAsUnreadUsingPUT.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/notifications/{userId}/unread/{caseId}/message`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))).replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * markCaseNotificationsAsUnread
     */
    markCaseNotificationsAsUnreadUsingPUT(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.markCaseNotificationsAsUnreadUsingPUTRaw(requestParameters);
        });
    }
    /**
     * markPageTypesAsRead
     */
    markPageTypesAsReadUsingDELETERaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
                throw new runtime.RequiredError('caseId', 'Required parameter requestParameters.caseId was null or undefined when calling markPageTypesAsReadUsingDELETE.');
            }
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling markPageTypesAsReadUsingDELETE.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v2/notifications/unread/{caseId}`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
                body: DeleteNotificationByPagesRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => NotificationEventsFromJSON(jsonValue));
        });
    }
    /**
     * markPageTypesAsRead
     */
    markPageTypesAsReadUsingDELETE(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.markPageTypesAsReadUsingDELETERaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * markRead
     */
    markReadUsingDELETERaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
                throw new runtime.RequiredError('caseId', 'Required parameter requestParameters.caseId was null or undefined when calling markReadUsingDELETE.');
            }
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling markReadUsingDELETE.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/notifications/unread/{caseId}`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
                body: DeleteNotificationEventRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => NotificationEventsFromJSON(jsonValue));
        });
    }
    /**
     * markRead
     */
    markReadUsingDELETE(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.markReadUsingDELETERaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * pushCaseMessage
     */
    pushCaseMessageUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
                throw new runtime.RequiredError('caseId', 'Required parameter requestParameters.caseId was null or undefined when calling pushCaseMessageUsingPOST.');
            }
            if (requestParameters.pushRequest === null || requestParameters.pushRequest === undefined) {
                throw new runtime.RequiredError('pushRequest', 'Required parameter requestParameters.pushRequest was null or undefined when calling pushCaseMessageUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/notifications/cases/{caseId}`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: PushNotificationRequestToJSON(requestParameters.pushRequest),
            });
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * pushCaseMessage
     */
    pushCaseMessageUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.pushCaseMessageUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * pushNotificationToUser
     */
    pushNotificationToUserUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling pushNotificationToUserUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/notifications/users`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.body,
            });
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * pushNotificationToUser
     */
    pushNotificationToUserUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.pushNotificationToUserUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * register
     */
    registerUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling registerUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/notifications/register`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: PushNotificationRegistrationRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * register
     */
    registerUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.registerUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
}
