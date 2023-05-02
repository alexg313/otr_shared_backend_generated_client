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


export interface ReferralContactStatus { 
    emailAddress?: string;
    errorType?: ReferralContactStatus.ErrorTypeEnum;
    successful?: boolean;
}
export namespace ReferralContactStatus {
    export type ErrorTypeEnum = 'EMAIL_ALREADY_EXISTS' | 'EMAIL_NOT_SENT' | 'INVALID_EMAIL';
    export const ErrorTypeEnum = {
        EmailAlreadyExists: 'EMAIL_ALREADY_EXISTS' as ErrorTypeEnum,
        EmailNotSent: 'EMAIL_NOT_SENT' as ErrorTypeEnum,
        InvalidEmail: 'INVALID_EMAIL' as ErrorTypeEnum
    };
}


