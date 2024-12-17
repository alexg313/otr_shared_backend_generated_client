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

import { exists, mapValues } from '../runtime';
import {
    BillingSubscriptionModel,
    BillingSubscriptionModelFromJSON,
    BillingSubscriptionModelFromJSONTyped,
    BillingSubscriptionModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface ListBillingSubscriptionsResponse
 */
export interface ListBillingSubscriptionsResponse {
    /**
     * 
     * @type {Array<BillingSubscriptionModel>}
     * @memberof ListBillingSubscriptionsResponse
     */
    subscriptions?: Array<BillingSubscriptionModel>;
    /**
     * 
     * @type {Array<BillingSubscriptionModel>}
     * @memberof ListBillingSubscriptionsResponse
     */
    subscriptionsAsBeneficiary?: Array<BillingSubscriptionModel>;
}

export function ListBillingSubscriptionsResponseFromJSON(json: any): ListBillingSubscriptionsResponse {
    return ListBillingSubscriptionsResponseFromJSONTyped(json, false);
}

export function ListBillingSubscriptionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListBillingSubscriptionsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subscriptions': !exists(json, 'subscriptions') ? undefined : ((json['subscriptions'] as Array<any>).map(BillingSubscriptionModelFromJSON)),
        'subscriptionsAsBeneficiary': !exists(json, 'subscriptionsAsBeneficiary') ? undefined : ((json['subscriptionsAsBeneficiary'] as Array<any>).map(BillingSubscriptionModelFromJSON)),
    };
}

export function ListBillingSubscriptionsResponseToJSON(value?: ListBillingSubscriptionsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subscriptions': value.subscriptions === undefined ? undefined : ((value.subscriptions as Array<any>).map(BillingSubscriptionModelToJSON)),
        'subscriptionsAsBeneficiary': value.subscriptionsAsBeneficiary === undefined ? undefined : ((value.subscriptionsAsBeneficiary as Array<any>).map(BillingSubscriptionModelToJSON)),
    };
}


