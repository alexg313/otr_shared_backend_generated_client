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

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { GetCaseFromCitationResponse } from '../model/getCaseFromCitationResponse';
// @ts-ignore
import { GetCaseResponse } from '../model/getCaseResponse';
// @ts-ignore
import { GetUserResponse } from '../model/getUserResponse';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class GetCaseControllerService {

    protected basePath = 'http://otr-backend-service-us-devo.offtherecord.com';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string|string[], @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (Array.isArray(basePath) && basePath.length > 0) {
                basePath = basePath[0];
            }

            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    // @ts-ignore
    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * getCaseClient
     * @param caseId caseId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCaseClientUsingGET(caseId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<GetUserResponse>;
    public getCaseClientUsingGET(caseId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpResponse<GetUserResponse>>;
    public getCaseClientUsingGET(caseId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpEvent<GetUserResponse>>;
    public getCaseClientUsingGET(caseId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<any> {
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling getCaseClientUsingGET.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v1/cases/${this.configuration.encodeParam({name: "caseId", value: caseId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/client`;
        return this.httpClient.request<GetUserResponse>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getCaseFromCitation
     * @param citationId citationId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCaseFromCitationUsingGET(citationId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<GetCaseFromCitationResponse>;
    public getCaseFromCitationUsingGET(citationId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpResponse<GetCaseFromCitationResponse>>;
    public getCaseFromCitationUsingGET(citationId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpEvent<GetCaseFromCitationResponse>>;
    public getCaseFromCitationUsingGET(citationId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<any> {
        if (citationId === null || citationId === undefined) {
            throw new Error('Required parameter citationId was null or undefined when calling getCaseFromCitationUsingGET.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v1/citations/${this.configuration.encodeParam({name: "citationId", value: citationId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/case`;
        return this.httpClient.request<GetCaseFromCitationResponse>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getCase
     * @param caseId caseId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCaseUsingGET(caseId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<GetCaseResponse>;
    public getCaseUsingGET(caseId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpResponse<GetCaseResponse>>;
    public getCaseUsingGET(caseId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpEvent<GetCaseResponse>>;
    public getCaseUsingGET(caseId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<any> {
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling getCaseUsingGET.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v1/cases/${this.configuration.encodeParam({name: "caseId", value: caseId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<GetCaseResponse>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
