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
/* tslint:disable:no-unused-variable member-ordering */
export class StripeCardControllerApi {
    constructor($http, $httpParamSerializer, basePath) {
        this.$http = $http;
        this.$httpParamSerializer = $httpParamSerializer;
        this.basePath = 'http://otr-backend-service-us-devo.offtherecord.com';
        this.defaultHeaders = {};
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * @summary addACHToLawfirmStripeAccount
     * @param lawfirmId lawfirmId
     * @param request request
     */
    addACHToLawfirmStripeAccountUsingPOST(lawfirmId, request, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmId}/stripe/ach'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling addACHToLawfirmStripeAccountUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling addACHToLawfirmStripeAccountUsingPOST.');
        }
        let httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    }
    /**
     *
     * @summary addACHToUserStripeAccount
     * @param userId userId
     * @param request request
     */
    addACHToUserStripeAccountUsingPOST(userId, request, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/users/{userId}/stripe/ach'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling addACHToUserStripeAccountUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling addACHToUserStripeAccountUsingPOST.');
        }
        let httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    }
    /**
     *
     * @summary addCardToStripeAccount
     * @param request request
     */
    addCardToStripeAccountUsingPOST(request, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/users/stripe/account/cards';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling addCardToStripeAccountUsingPOST.');
        }
        let httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    }
    /**
     *
     * @summary deleteBankAccountFromLawfirmStripeAccount
     * @param bankAccountId bankAccountId
     * @param lawfirmId lawfirmId
     */
    deleteBankAccountFromLawfirmStripeAccountUsingDELETE(bankAccountId, lawfirmId, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmId}/stripe/bank-accounts/{bankAccountId}'
            .replace('{' + 'bankAccountId' + '}', encodeURIComponent(String(bankAccountId)))
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'bankAccountId' is not null or undefined
        if (bankAccountId === null || bankAccountId === undefined) {
            throw new Error('Required parameter bankAccountId was null or undefined when calling deleteBankAccountFromLawfirmStripeAccountUsingDELETE.');
        }
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling deleteBankAccountFromLawfirmStripeAccountUsingDELETE.');
        }
        let httpRequestParams = {
            method: 'DELETE',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    }
    /**
     *
     * @summary deleteCardForUser
     * @param cardId cardId
     * @param userId userId
     */
    deleteCardForUserUsingDELETE(cardId, userId, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/users/{userId}/stripe/account/cards/{cardId}'
            .replace('{' + 'cardId' + '}', encodeURIComponent(String(cardId)))
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'cardId' is not null or undefined
        if (cardId === null || cardId === undefined) {
            throw new Error('Required parameter cardId was null or undefined when calling deleteCardForUserUsingDELETE.');
        }
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling deleteCardForUserUsingDELETE.');
        }
        let httpRequestParams = {
            method: 'DELETE',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    }
    /**
     *
     * @summary deleteCard
     * @param cardId cardId
     */
    deleteCardUsingDELETE(cardId, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/users/stripe/account/cards/{cardId}'
            .replace('{' + 'cardId' + '}', encodeURIComponent(String(cardId)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'cardId' is not null or undefined
        if (cardId === null || cardId === undefined) {
            throw new Error('Required parameter cardId was null or undefined when calling deleteCardUsingDELETE.');
        }
        let httpRequestParams = {
            method: 'DELETE',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    }
    /**
     *
     * @summary getCard
     * @param cardId cardId
     */
    getCardUsingGET(cardId, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/users/stripe/account/cards/{cardId}'
            .replace('{' + 'cardId' + '}', encodeURIComponent(String(cardId)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'cardId' is not null or undefined
        if (cardId === null || cardId === undefined) {
            throw new Error('Required parameter cardId was null or undefined when calling getCardUsingGET.');
        }
        let httpRequestParams = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    }
    /**
     *
     * @summary Retrieves all the payment methods available on the lawfirm\'s Stripe account.
     * @param lawfirmId lawfirmId
     */
    getLawfirmPaymentMethodsUsingGET(lawfirmId, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmId}/paymentmethods'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling getLawfirmPaymentMethodsUsingGET.');
        }
        let httpRequestParams = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    }
    /**
     *
     * @summary Retrieves all the payment methods available on the user\'s Stripe account.
     * @param userIdString userIdString
     */
    getPaymentMethodsForUserUsingGET(userIdString, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/users/{userIdString}/paymentmethods'
            .replace('{' + 'userIdString' + '}', encodeURIComponent(String(userIdString)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userIdString' is not null or undefined
        if (userIdString === null || userIdString === undefined) {
            throw new Error('Required parameter userIdString was null or undefined when calling getPaymentMethodsForUserUsingGET.');
        }
        let httpRequestParams = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    }
    /**
     *
     * @summary setCardAsPrimary
     * @param cardId cardId
     * @param userId userId
     */
    setCardAsPrimaryUsingPUT(cardId, userId, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/users/{userId}/account/cards/{cardId}/primary'
            .replace('{' + 'cardId' + '}', encodeURIComponent(String(cardId)))
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'cardId' is not null or undefined
        if (cardId === null || cardId === undefined) {
            throw new Error('Required parameter cardId was null or undefined when calling setCardAsPrimaryUsingPUT.');
        }
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling setCardAsPrimaryUsingPUT.');
        }
        let httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    }
    /**
     *
     * @summary setDefaultPaymentMethodForLawfirm
     * @param lawfirmId lawfirmId
     * @param stripePaymentSourceId stripePaymentSourceId
     */
    setDefaultPaymentMethodForLawfirmUsingPUT(lawfirmId, stripePaymentSourceId, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmId}/stripe/payment-methods/default'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling setDefaultPaymentMethodForLawfirmUsingPUT.');
        }
        // verify required parameter 'stripePaymentSourceId' is not null or undefined
        if (stripePaymentSourceId === null || stripePaymentSourceId === undefined) {
            throw new Error('Required parameter stripePaymentSourceId was null or undefined when calling setDefaultPaymentMethodForLawfirmUsingPUT.');
        }
        if (stripePaymentSourceId !== undefined) {
            queryParameters['stripePaymentSourceId'] = stripePaymentSourceId;
        }
        let httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    }
}
StripeCardControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
