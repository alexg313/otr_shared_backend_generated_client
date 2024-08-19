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
import { IsRefundEligibleResponseFromJSON, } from '../models';
/**
 *
 */
export class RefundEligibilityControllerApi extends runtime.BaseAPI {
    /**
     * isRefundEligible
     */
    isRefundEligibleUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
                throw new runtime.RequiredError('caseId', 'Required parameter requestParameters.caseId was null or undefined when calling isRefundEligibleUsingGET.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/cases/{caseId}/refund/eligibility`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => IsRefundEligibleResponseFromJSON(jsonValue));
        });
    }
    /**
     * isRefundEligible
     */
    isRefundEligibleUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.isRefundEligibleUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
}
