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
export var CourtDomain;
(function (CourtDomain) {
    let CourtTypeEnum;
    (function (CourtTypeEnum) {
        CourtTypeEnum[CourtTypeEnum["CIRCUIT"] = 'CIRCUIT'] = "CIRCUIT";
        CourtTypeEnum[CourtTypeEnum["COUNTYCLERK"] = 'COUNTY_CLERK'] = "COUNTYCLERK";
        CourtTypeEnum[CourtTypeEnum["DISTRICT"] = 'DISTRICT'] = "DISTRICT";
        CourtTypeEnum[CourtTypeEnum["JUVENILE"] = 'JUVENILE'] = "JUVENILE";
        CourtTypeEnum[CourtTypeEnum["MUNICIPAL"] = 'MUNICIPAL'] = "MUNICIPAL";
        CourtTypeEnum[CourtTypeEnum["PROBATION"] = 'PROBATION'] = "PROBATION";
        CourtTypeEnum[CourtTypeEnum["SUPERIOR"] = 'SUPERIOR'] = "SUPERIOR";
        CourtTypeEnum[CourtTypeEnum["VIOLATIONSBUREAU"] = 'VIOLATIONS_BUREAU'] = "VIOLATIONSBUREAU";
    })(CourtTypeEnum = CourtDomain.CourtTypeEnum || (CourtDomain.CourtTypeEnum = {}));
})(CourtDomain || (CourtDomain = {}));
