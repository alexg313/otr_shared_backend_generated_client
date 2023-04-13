"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserModel = void 0;
var UpdateUserModel;
(function (UpdateUserModel) {
    var LoginProviderEnum;
    (function (LoginProviderEnum) {
        LoginProviderEnum[LoginProviderEnum["APPLE"] = 'APPLE'] = "APPLE";
        LoginProviderEnum[LoginProviderEnum["EMAIL"] = 'EMAIL'] = "EMAIL";
        LoginProviderEnum[LoginProviderEnum["FACEBOOK"] = 'FACEBOOK'] = "FACEBOOK";
        LoginProviderEnum[LoginProviderEnum["GOOGLE"] = 'GOOGLE'] = "GOOGLE";
        LoginProviderEnum[LoginProviderEnum["PHONE"] = 'PHONE'] = "PHONE";
        LoginProviderEnum[LoginProviderEnum["TWITTER"] = 'TWITTER'] = "TWITTER";
        LoginProviderEnum[LoginProviderEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
    })(LoginProviderEnum = UpdateUserModel.LoginProviderEnum || (UpdateUserModel.LoginProviderEnum = {}));
    var PrivacyModeEnum;
    (function (PrivacyModeEnum) {
        PrivacyModeEnum[PrivacyModeEnum["FRIENDS"] = 'FRIENDS'] = "FRIENDS";
        PrivacyModeEnum[PrivacyModeEnum["PRIVATE"] = 'PRIVATE'] = "PRIVATE";
        PrivacyModeEnum[PrivacyModeEnum["PUBLIC"] = 'PUBLIC'] = "PUBLIC";
        PrivacyModeEnum[PrivacyModeEnum["SEMIPUBLIC"] = 'SEMI_PUBLIC'] = "SEMIPUBLIC";
    })(PrivacyModeEnum = UpdateUserModel.PrivacyModeEnum || (UpdateUserModel.PrivacyModeEnum = {}));
})(UpdateUserModel = exports.UpdateUserModel || (exports.UpdateUserModel = {}));
