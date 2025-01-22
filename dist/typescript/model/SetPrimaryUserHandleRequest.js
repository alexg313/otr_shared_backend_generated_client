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
export var SetPrimaryUserHandleRequest;
(function (SetPrimaryUserHandleRequest) {
    let LoginProviderEnum;
    (function (LoginProviderEnum) {
        LoginProviderEnum[LoginProviderEnum["APPLE"] = 'APPLE'] = "APPLE";
        LoginProviderEnum[LoginProviderEnum["EMAIL"] = 'EMAIL'] = "EMAIL";
        LoginProviderEnum[LoginProviderEnum["FACEBOOK"] = 'FACEBOOK'] = "FACEBOOK";
        LoginProviderEnum[LoginProviderEnum["GOOGLE"] = 'GOOGLE'] = "GOOGLE";
        LoginProviderEnum[LoginProviderEnum["PHONE"] = 'PHONE'] = "PHONE";
        LoginProviderEnum[LoginProviderEnum["TWITTER"] = 'TWITTER'] = "TWITTER";
        LoginProviderEnum[LoginProviderEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
    })(LoginProviderEnum = SetPrimaryUserHandleRequest.LoginProviderEnum || (SetPrimaryUserHandleRequest.LoginProviderEnum = {}));
})(SetPrimaryUserHandleRequest || (SetPrimaryUserHandleRequest = {}));
