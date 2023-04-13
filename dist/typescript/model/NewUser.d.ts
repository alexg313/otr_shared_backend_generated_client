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
import * as models from './models';
export interface NewUser {
    "emailAddress"?: string;
    "firstname"?: string;
    "isEmailConfirmed"?: boolean;
    "lastname"?: string;
    "loginProvider"?: NewUser.LoginProviderEnum;
    "password"?: string;
    "phoneNumbers"?: Array<models.PhoneNumberDomain>;
}
export declare namespace NewUser {
    enum LoginProviderEnum {
        APPLE,
        EMAIL,
        FACEBOOK,
        GOOGLE,
        PHONE,
        TWITTER,
        UNKNOWN
    }
}
