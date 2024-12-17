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
    CustomerServiceAgentDomain,
    CustomerServiceAgentDomainFromJSON,
    CustomerServiceAgentDomainFromJSONTyped,
    CustomerServiceAgentDomainToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetCustomerServiceAgentsResponse
 */
export interface GetCustomerServiceAgentsResponse {
    /**
     * 
     * @type {Array<CustomerServiceAgentDomain>}
     * @memberof GetCustomerServiceAgentsResponse
     */
    agents?: Array<CustomerServiceAgentDomain>;
    /**
     * 
     * @type {number}
     * @memberof GetCustomerServiceAgentsResponse
     */
    count?: number;
}

export function GetCustomerServiceAgentsResponseFromJSON(json: any): GetCustomerServiceAgentsResponse {
    return GetCustomerServiceAgentsResponseFromJSONTyped(json, false);
}

export function GetCustomerServiceAgentsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCustomerServiceAgentsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'agents': !exists(json, 'agents') ? undefined : ((json['agents'] as Array<any>).map(CustomerServiceAgentDomainFromJSON)),
        'count': !exists(json, 'count') ? undefined : json['count'],
    };
}

export function GetCustomerServiceAgentsResponseToJSON(value?: GetCustomerServiceAgentsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'agents': value.agents === undefined ? undefined : ((value.agents as Array<any>).map(CustomerServiceAgentDomainToJSON)),
        'count': value.count,
    };
}


