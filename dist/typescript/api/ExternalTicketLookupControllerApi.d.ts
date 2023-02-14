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
/// <reference types="angular" />
import * as models from '../model/models';
export declare class ExternalTicketLookupControllerApi {
    protected $http: ng.IHttpService;
    protected $httpParamSerializer?: (d: any) => any;
    protected basePath: string;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
    /**
     *
     * @summary getExternalTickets
     * @param countyId countyId
     * @param regionCode regionCode
     * @param attempts attempts
     * @param citationId citationId
     * @param dateOfBirth dateOfBirth
     * @param driversLicenseId driversLicenseId
     * @param lastName lastName
     * @param organizationName organizationName
     * @param searchType searchType
     * @param searchValue searchValue
     */
    getExternalTicketsUsingGET(countyId: number, regionCode: string, attempts?: number, citationId?: string, dateOfBirth?: string, driversLicenseId?: string, lastName?: string, organizationName?: string, searchType?: string, searchValue?: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.GetExternalTicketsResponse>;
}
