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
import { exists } from '../runtime';
import { StripeAccountLinkDomainFromJSON, StripeAccountLinkDomainToJSON, StripeConnectedAccountDomainFromJSON, StripeConnectedAccountDomainToJSON, } from './';
export function CreateStripeConnectAccountResponseFromJSON(json) {
    return CreateStripeConnectAccountResponseFromJSONTyped(json, false);
}
export function CreateStripeConnectAccountResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'account': !exists(json, 'account') ? undefined : StripeConnectedAccountDomainFromJSON(json['account']),
        'accountLink': !exists(json, 'accountLink') ? undefined : StripeAccountLinkDomainFromJSON(json['accountLink']),
    };
}
export function CreateStripeConnectAccountResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'account': StripeConnectedAccountDomainToJSON(value.account),
        'accountLink': StripeAccountLinkDomainToJSON(value.accountLink),
    };
}
