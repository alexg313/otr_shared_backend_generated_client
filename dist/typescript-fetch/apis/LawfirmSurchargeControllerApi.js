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
import { ListLawfirmSurchargesResponseFromJSON, RemoveLawfirmSurchargeRequestToJSON, SaveLawfirmSurchargesRequestToJSON, } from '../models';
/**
 *
 */
export class LawfirmSurchargeControllerApi extends runtime.BaseAPI {
    /**
     * listLawfirmSurcharges
     */
    listLawfirmSurchargesUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.lawfirmId === null || requestParameters.lawfirmId === undefined) {
                throw new runtime.RequiredError('lawfirmId', 'Required parameter requestParameters.lawfirmId was null or undefined when calling listLawfirmSurchargesUsingGET.');
            }
            const queryParameters = {};
            if (requestParameters.featureType !== undefined) {
                queryParameters['featureType'] = requestParameters.featureType;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/lawfirms/{lawfirmId}/surcharges`.replace(`{${"lawfirmId"}}`, encodeURIComponent(String(requestParameters.lawfirmId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => ListLawfirmSurchargesResponseFromJSON(jsonValue));
        });
    }
    /**
     * listLawfirmSurcharges
     */
    listLawfirmSurchargesUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listLawfirmSurchargesUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * removeSurcharges
     */
    removeSurchargesUsingDELETERaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.lawfirmId === null || requestParameters.lawfirmId === undefined) {
                throw new runtime.RequiredError('lawfirmId', 'Required parameter requestParameters.lawfirmId was null or undefined when calling removeSurchargesUsingDELETE.');
            }
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling removeSurchargesUsingDELETE.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/lawfirms/{lawfirmId}/surcharges`.replace(`{${"lawfirmId"}}`, encodeURIComponent(String(requestParameters.lawfirmId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
                body: RemoveLawfirmSurchargeRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * removeSurcharges
     */
    removeSurchargesUsingDELETE(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.removeSurchargesUsingDELETERaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * saveLawfirmSurcharges
     */
    saveLawfirmSurchargesUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.lawfirmId === null || requestParameters.lawfirmId === undefined) {
                throw new runtime.RequiredError('lawfirmId', 'Required parameter requestParameters.lawfirmId was null or undefined when calling saveLawfirmSurchargesUsingPOST.');
            }
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling saveLawfirmSurchargesUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/lawfirms/{lawfirmId}/surcharges`.replace(`{${"lawfirmId"}}`, encodeURIComponent(String(requestParameters.lawfirmId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: SaveLawfirmSurchargesRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * saveLawfirmSurcharges
     */
    saveLawfirmSurchargesUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.saveLawfirmSurchargesUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
}
/**
    * @export
    * @enum {string}
    */
export var ListLawfirmSurchargesUsingGETFeatureTypeEnum;
(function (ListLawfirmSurchargesUsingGETFeatureTypeEnum) {
    ListLawfirmSurchargesUsingGETFeatureTypeEnum["BLACKBOX"] = "BLACK_BOX";
    ListLawfirmSurchargesUsingGETFeatureTypeEnum["STATEPAGE"] = "STATE_PAGE";
    ListLawfirmSurchargesUsingGETFeatureTypeEnum["STOREFRONT"] = "STOREFRONT";
})(ListLawfirmSurchargesUsingGETFeatureTypeEnum || (ListLawfirmSurchargesUsingGETFeatureTypeEnum = {}));
