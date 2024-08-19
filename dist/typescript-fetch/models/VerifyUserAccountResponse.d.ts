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
import { ExistingAccountDetails } from './';
/**
 *
 * @export
 * @interface VerifyUserAccountResponse
 */
export interface VerifyUserAccountResponse {
    /**
     *
     * @type {boolean}
     * @memberof VerifyUserAccountResponse
     */
    emailAlreadyConfirmed?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof VerifyUserAccountResponse
     */
    emailConfirmed?: boolean;
    /**
     *
     * @type {Array<ExistingAccountDetails>}
     * @memberof VerifyUserAccountResponse
     */
    existingAccounts?: Array<ExistingAccountDetails>;
    /**
     *
     * @type {boolean}
     * @memberof VerifyUserAccountResponse
     */
    mobilePhoneConfirmed?: boolean;
}
export declare function VerifyUserAccountResponseFromJSON(json: any): VerifyUserAccountResponse;
export declare function VerifyUserAccountResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerifyUserAccountResponse;
export declare function VerifyUserAccountResponseToJSON(value?: VerifyUserAccountResponse | null): any;
