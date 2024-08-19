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
export function ListCitationsRequestFromJSON(json) {
    return ListCitationsRequestFromJSONTyped(json, false);
}
export function ListCitationsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'caseStatusCategoryFilter': !exists(json, 'caseStatusCategoryFilter') ? undefined : json['caseStatusCategoryFilter'],
        'caseStatusFilterList': !exists(json, 'caseStatusFilterList') ? undefined : json['caseStatusFilterList'],
        'cdlStatus': !exists(json, 'cdlStatus') ? undefined : json['cdlStatus'],
        'countyFilter': !exists(json, 'countyFilter') ? undefined : json['countyFilter'],
        'endDate': !exists(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'experimentGroup': !exists(json, 'experimentGroup') ? undefined : json['experimentGroup'],
        'experimentName': !exists(json, 'experimentName') ? undefined : json['experimentName'],
        'hasAccident': !exists(json, 'hasAccident') ? undefined : json['hasAccident'],
        'hasCase': !exists(json, 'hasCase') ? undefined : json['hasCase'],
        'hasLastBookingDate': !exists(json, 'hasLastBookingDate') ? undefined : json['hasLastBookingDate'],
        'hasPhoto': !exists(json, 'hasPhoto') ? undefined : json['hasPhoto'],
        'includeDataRecords': !exists(json, 'includeDataRecords') ? undefined : json['includeDataRecords'],
        'length': !exists(json, 'length') ? undefined : json['length'],
        'page': !exists(json, 'page') ? undefined : json['page'],
        'sortMap': !exists(json, 'sortMap') ? undefined : json['sortMap'],
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
        'stateFilterList': !exists(json, 'stateFilterList') ? undefined : json['stateFilterList'],
        'timeZoneId': !exists(json, 'timeZoneId') ? undefined : json['timeZoneId'],
    };
}
export function ListCitationsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'caseStatusCategoryFilter': value.caseStatusCategoryFilter,
        'caseStatusFilterList': value.caseStatusFilterList,
        'cdlStatus': value.cdlStatus,
        'countyFilter': value.countyFilter,
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString()),
        'experimentGroup': value.experimentGroup,
        'experimentName': value.experimentName,
        'hasAccident': value.hasAccident,
        'hasCase': value.hasCase,
        'hasLastBookingDate': value.hasLastBookingDate,
        'hasPhoto': value.hasPhoto,
        'includeDataRecords': value.includeDataRecords,
        'length': value.length,
        'page': value.page,
        'sortMap': value.sortMap,
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString()),
        'stateFilterList': value.stateFilterList,
        'timeZoneId': value.timeZoneId,
    };
}
/**
* @export
* @enum {string}
*/
export var ListCitationsRequestCaseStatusCategoryFilterEnum;
(function (ListCitationsRequestCaseStatusCategoryFilterEnum) {
    ListCitationsRequestCaseStatusCategoryFilterEnum["ACTIVE"] = "ACTIVE";
    ListCitationsRequestCaseStatusCategoryFilterEnum["CANCELLED"] = "CANCELLED";
    ListCitationsRequestCaseStatusCategoryFilterEnum["RESOLVED"] = "RESOLVED";
    ListCitationsRequestCaseStatusCategoryFilterEnum["UNCONFIRMED"] = "UNCONFIRMED";
})(ListCitationsRequestCaseStatusCategoryFilterEnum || (ListCitationsRequestCaseStatusCategoryFilterEnum = {}));
/**
* @export
* @enum {string}
*/
export var ListCitationsRequestCdlStatusEnum;
(function (ListCitationsRequestCdlStatusEnum) {
    ListCitationsRequestCdlStatusEnum["CDLINCOMMERCIALVEHICLE"] = "CDL_IN_COMMERCIAL_VEHICLE";
    ListCitationsRequestCdlStatusEnum["CDLINPERSONALVEHICLE"] = "CDL_IN_PERSONAL_VEHICLE";
    ListCitationsRequestCdlStatusEnum["NOCDL"] = "NO_CDL";
})(ListCitationsRequestCdlStatusEnum || (ListCitationsRequestCdlStatusEnum = {}));
/**
* @export
* @enum {string}
*/
export var ListCitationsRequestExperimentGroupEnum;
(function (ListCitationsRequestExperimentGroupEnum) {
    ListCitationsRequestExperimentGroupEnum["CONTROL"] = "CONTROL";
    ListCitationsRequestExperimentGroupEnum["VARIATION1"] = "VARIATION_1";
    ListCitationsRequestExperimentGroupEnum["VARIATION2"] = "VARIATION_2";
})(ListCitationsRequestExperimentGroupEnum || (ListCitationsRequestExperimentGroupEnum = {}));
/**
* @export
* @enum {string}
*/
export var ListCitationsRequestStateFilterListEnum;
(function (ListCitationsRequestStateFilterListEnum) {
    ListCitationsRequestStateFilterListEnum["AK"] = "AK";
    ListCitationsRequestStateFilterListEnum["AL"] = "AL";
    ListCitationsRequestStateFilterListEnum["AR"] = "AR";
    ListCitationsRequestStateFilterListEnum["AZ"] = "AZ";
    ListCitationsRequestStateFilterListEnum["CA"] = "CA";
    ListCitationsRequestStateFilterListEnum["CO"] = "CO";
    ListCitationsRequestStateFilterListEnum["CT"] = "CT";
    ListCitationsRequestStateFilterListEnum["DC"] = "DC";
    ListCitationsRequestStateFilterListEnum["DE"] = "DE";
    ListCitationsRequestStateFilterListEnum["FL"] = "FL";
    ListCitationsRequestStateFilterListEnum["GA"] = "GA";
    ListCitationsRequestStateFilterListEnum["HI"] = "HI";
    ListCitationsRequestStateFilterListEnum["IA"] = "IA";
    ListCitationsRequestStateFilterListEnum["ID"] = "ID";
    ListCitationsRequestStateFilterListEnum["IL"] = "IL";
    ListCitationsRequestStateFilterListEnum["IN"] = "IN";
    ListCitationsRequestStateFilterListEnum["KS"] = "KS";
    ListCitationsRequestStateFilterListEnum["KY"] = "KY";
    ListCitationsRequestStateFilterListEnum["LA"] = "LA";
    ListCitationsRequestStateFilterListEnum["MA"] = "MA";
    ListCitationsRequestStateFilterListEnum["MD"] = "MD";
    ListCitationsRequestStateFilterListEnum["ME"] = "ME";
    ListCitationsRequestStateFilterListEnum["MI"] = "MI";
    ListCitationsRequestStateFilterListEnum["MN"] = "MN";
    ListCitationsRequestStateFilterListEnum["MO"] = "MO";
    ListCitationsRequestStateFilterListEnum["MS"] = "MS";
    ListCitationsRequestStateFilterListEnum["MT"] = "MT";
    ListCitationsRequestStateFilterListEnum["NC"] = "NC";
    ListCitationsRequestStateFilterListEnum["ND"] = "ND";
    ListCitationsRequestStateFilterListEnum["NE"] = "NE";
    ListCitationsRequestStateFilterListEnum["NH"] = "NH";
    ListCitationsRequestStateFilterListEnum["NJ"] = "NJ";
    ListCitationsRequestStateFilterListEnum["NM"] = "NM";
    ListCitationsRequestStateFilterListEnum["NV"] = "NV";
    ListCitationsRequestStateFilterListEnum["NY"] = "NY";
    ListCitationsRequestStateFilterListEnum["OH"] = "OH";
    ListCitationsRequestStateFilterListEnum["OK"] = "OK";
    ListCitationsRequestStateFilterListEnum["OR"] = "OR";
    ListCitationsRequestStateFilterListEnum["PA"] = "PA";
    ListCitationsRequestStateFilterListEnum["RI"] = "RI";
    ListCitationsRequestStateFilterListEnum["SC"] = "SC";
    ListCitationsRequestStateFilterListEnum["SD"] = "SD";
    ListCitationsRequestStateFilterListEnum["TN"] = "TN";
    ListCitationsRequestStateFilterListEnum["TX"] = "TX";
    ListCitationsRequestStateFilterListEnum["UT"] = "UT";
    ListCitationsRequestStateFilterListEnum["VA"] = "VA";
    ListCitationsRequestStateFilterListEnum["VT"] = "VT";
    ListCitationsRequestStateFilterListEnum["WA"] = "WA";
    ListCitationsRequestStateFilterListEnum["WI"] = "WI";
    ListCitationsRequestStateFilterListEnum["WV"] = "WV";
    ListCitationsRequestStateFilterListEnum["WY"] = "WY";
})(ListCitationsRequestStateFilterListEnum || (ListCitationsRequestStateFilterListEnum = {}));
