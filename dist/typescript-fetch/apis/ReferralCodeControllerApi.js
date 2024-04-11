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
import { CreateReferralCodeRequestToJSON, CreateReferralCodeResponseFromJSON, GetReferralCodeResponseFromJSON, GetReferralCodesResponseFromJSON, } from '../models';
/**
 *
 */
export class ReferralCodeControllerApi extends runtime.BaseAPI {
    /**
     * Only for admins. This will approve and activate a given referral code
     */
    approveReferralCodeUsingPUTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.codeId === null || requestParameters.codeId === undefined) {
                throw new runtime.RequiredError('codeId', 'Required parameter requestParameters.codeId was null or undefined when calling approveReferralCodeUsingPUT.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/referrals/codes/{codeId}/approve`.replace(`{${"codeId"}}`, encodeURIComponent(String(requestParameters.codeId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Only for admins. This will approve and activate a given referral code
     */
    approveReferralCodeUsingPUT(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.approveReferralCodeUsingPUTRaw(requestParameters);
        });
    }
    /**
     * Referral codes are currently immutable. Meaning, once a referral code is created then no modification is allowed. In urgent scenarios, we can update the values via SQL. If you want to apply a discount to the referee then enter a negative value (applies both for percentage_discount and cents_value types), and enter a positive value if you want to increase the price.
     */
    generateReferralCodeUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling generateReferralCodeUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/referrals/codes`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: CreateReferralCodeRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => CreateReferralCodeResponseFromJSON(jsonValue));
        });
    }
    /**
     * Referral codes are currently immutable. Meaning, once a referral code is created then no modification is allowed. In urgent scenarios, we can update the values via SQL. If you want to apply a discount to the referee then enter a negative value (applies both for percentage_discount and cents_value types), and enter a positive value if you want to increase the price.
     */
    generateReferralCodeUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.generateReferralCodeUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * getReferralCode
     */
    getReferralCodeUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.codeId === null || requestParameters.codeId === undefined) {
                throw new runtime.RequiredError('codeId', 'Required parameter requestParameters.codeId was null or undefined when calling getReferralCodeUsingGET.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/referrals/codes/{codeId}`.replace(`{${"codeId"}}`, encodeURIComponent(String(requestParameters.codeId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetReferralCodeResponseFromJSON(jsonValue));
        });
    }
    /**
     * getReferralCode
     */
    getReferralCodeUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getReferralCodeUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * getReferralCodes
     */
    getReferralCodesUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.isActive !== undefined) {
                queryParameters['isActive'] = requestParameters.isActive;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/referrals/codes`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetReferralCodesResponseFromJSON(jsonValue));
        });
    }
    /**
     * getReferralCodes
     */
    getReferralCodesUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getReferralCodesUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * markCodeAsInactive
     */
    markCodeAsInactiveUsingDELETERaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.codeId === null || requestParameters.codeId === undefined) {
                throw new runtime.RequiredError('codeId', 'Required parameter requestParameters.codeId was null or undefined when calling markCodeAsInactiveUsingDELETE.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/referrals/codes/{codeId}`.replace(`{${"codeId"}}`, encodeURIComponent(String(requestParameters.codeId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * markCodeAsInactive
     */
    markCodeAsInactiveUsingDELETE(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.markCodeAsInactiveUsingDELETERaw(requestParameters);
        });
    }
    /**
     * Validates and returns the referral code. Validation includes: Are we passed the expiration date? Has the code exceeded it\'s max use count?
     */
    validateReferralCodeUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.codeId === null || requestParameters.codeId === undefined) {
                throw new runtime.RequiredError('codeId', 'Required parameter requestParameters.codeId was null or undefined when calling validateReferralCodeUsingGET.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/referrals/codes/{codeId}/validate`.replace(`{${"codeId"}}`, encodeURIComponent(String(requestParameters.codeId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetReferralCodeResponseFromJSON(jsonValue));
        });
    }
    /**
     * Validates and returns the referral code. Validation includes: Are we passed the expiration date? Has the code exceeded it\'s max use count?
     */
    validateReferralCodeUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.validateReferralCodeUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
}
