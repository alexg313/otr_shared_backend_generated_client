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
export var Case;
(function (Case) {
    let CaseStatusEnum;
    (function (CaseStatusEnum) {
        CaseStatusEnum[CaseStatusEnum["AMENDEDDOWNWITHINCLASS"] = 'AMENDED_DOWN_WITHIN_CLASS'] = "AMENDEDDOWNWITHINCLASS";
        CaseStatusEnum[CaseStatusEnum["AMENDEDFULLFINE"] = 'AMENDED_FULL_FINE'] = "AMENDEDFULLFINE";
        CaseStatusEnum[CaseStatusEnum["AMENDEDINCREASEDFINE"] = 'AMENDED_INCREASED_FINE'] = "AMENDEDINCREASEDFINE";
        CaseStatusEnum[CaseStatusEnum["AMENDEDNOFINE"] = 'AMENDED_NO_FINE'] = "AMENDEDNOFINE";
        CaseStatusEnum[CaseStatusEnum["AMENDEDREDUCEDFINE"] = 'AMENDED_REDUCED_FINE'] = "AMENDEDREDUCEDFINE";
        CaseStatusEnum[CaseStatusEnum["AMENDEDTOINFRACTION"] = 'AMENDED_TO_INFRACTION'] = "AMENDEDTOINFRACTION";
        CaseStatusEnum[CaseStatusEnum["AMENDEDTONMV"] = 'AMENDED_TO_NMV'] = "AMENDEDTONMV";
        CaseStatusEnum[CaseStatusEnum["CANCELLEDATTORNEYATFAULT"] = 'CANCELLED_ATTORNEY_AT_FAULT'] = "CANCELLEDATTORNEYATFAULT";
        CaseStatusEnum[CaseStatusEnum["CANCELLEDBYLAWFIRM"] = 'CANCELLED_BY_LAWFIRM'] = "CANCELLEDBYLAWFIRM";
        CaseStatusEnum[CaseStatusEnum["CANCELLEDBYUSER"] = 'CANCELLED_BY_USER'] = "CANCELLEDBYUSER";
        CaseStatusEnum[CaseStatusEnum["CANCELLEDDUPLICATE"] = 'CANCELLED_DUPLICATE'] = "CANCELLEDDUPLICATE";
        CaseStatusEnum[CaseStatusEnum["CANCELLEDNMV"] = 'CANCELLED_NMV'] = "CANCELLEDNMV";
        CaseStatusEnum[CaseStatusEnum["CANCELLEDNONPAYMENT"] = 'CANCELLED_NON_PAYMENT'] = "CANCELLEDNONPAYMENT";
        CaseStatusEnum[CaseStatusEnum["CANCELLEDNOLAWFIRM"] = 'CANCELLED_NO_LAWFIRM'] = "CANCELLEDNOLAWFIRM";
        CaseStatusEnum[CaseStatusEnum["CANCELLEDOVERDUE"] = 'CANCELLED_OVERDUE'] = "CANCELLEDOVERDUE";
        CaseStatusEnum[CaseStatusEnum["CANCELLEDTOOSHORTNOTICE"] = 'CANCELLED_TOO_SHORT_NOTICE'] = "CANCELLEDTOOSHORTNOTICE";
        CaseStatusEnum[CaseStatusEnum["CASEINPROGRESS"] = 'CASE_IN_PROGRESS'] = "CASEINPROGRESS";
        CaseStatusEnum[CaseStatusEnum["CLIENTCONFIRMED"] = 'CLIENT_CONFIRMED'] = "CLIENTCONFIRMED";
        CaseStatusEnum[CaseStatusEnum["CLIENTCONFIRMEDUNPAID"] = 'CLIENT_CONFIRMED_UNPAID'] = "CLIENTCONFIRMEDUNPAID";
        CaseStatusEnum[CaseStatusEnum["CLIENTFIREDLAWFIRM"] = 'CLIENT_FIRED_LAWFIRM'] = "CLIENTFIREDLAWFIRM";
        CaseStatusEnum[CaseStatusEnum["CLIENTFORCEDLOSS"] = 'CLIENT_FORCED_LOSS'] = "CLIENTFORCEDLOSS";
        CaseStatusEnum[CaseStatusEnum["CLIENTPAIDFINE"] = 'CLIENT_PAID_FINE'] = "CLIENTPAIDFINE";
        CaseStatusEnum[CaseStatusEnum["CLIENTUNRESPONSIVE"] = 'CLIENT_UNRESPONSIVE'] = "CLIENTUNRESPONSIVE";
        CaseStatusEnum[CaseStatusEnum["DEFERRED"] = 'DEFERRED'] = "DEFERRED";
        CaseStatusEnum[CaseStatusEnum["DISMISSED"] = 'DISMISSED'] = "DISMISSED";
        CaseStatusEnum[CaseStatusEnum["DIVERSION"] = 'DIVERSION'] = "DIVERSION";
        CaseStatusEnum[CaseStatusEnum["FEESDISPUTED"] = 'FEES_DISPUTED'] = "FEESDISPUTED";
        CaseStatusEnum[CaseStatusEnum["FINEREDUCTIONONLY"] = 'FINE_REDUCTION_ONLY'] = "FINEREDUCTIONONLY";
        CaseStatusEnum[CaseStatusEnum["LAWFIRMWITHDRAWN"] = 'LAWFIRM_WITHDRAWN'] = "LAWFIRMWITHDRAWN";
        CaseStatusEnum[CaseStatusEnum["LOST"] = 'LOST'] = "LOST";
        CaseStatusEnum[CaseStatusEnum["NOLAWFIRMAVAILABLE"] = 'NO_LAWFIRM_AVAILABLE'] = "NOLAWFIRMAVAILABLE";
        CaseStatusEnum[CaseStatusEnum["POINTREDUCTION"] = 'POINT_REDUCTION'] = "POINTREDUCTION";
        CaseStatusEnum[CaseStatusEnum["REFUSEDBYLAWFIRM"] = 'REFUSED_BY_LAWFIRM'] = "REFUSEDBYLAWFIRM";
        CaseStatusEnum[CaseStatusEnum["RESOLVEDNONPAYMENT"] = 'RESOLVED_NON_PAYMENT'] = "RESOLVEDNONPAYMENT";
        CaseStatusEnum[CaseStatusEnum["STALE"] = 'STALE'] = "STALE";
        CaseStatusEnum[CaseStatusEnum["TRAFFICSCHOOL"] = 'TRAFFIC_SCHOOL'] = "TRAFFICSCHOOL";
        CaseStatusEnum[CaseStatusEnum["UNCONFIRMED"] = 'UNCONFIRMED'] = "UNCONFIRMED";
    })(CaseStatusEnum = Case.CaseStatusEnum || (Case.CaseStatusEnum = {}));
    let GenderEnum;
    (function (GenderEnum) {
        GenderEnum[GenderEnum["FEMALE"] = 'FEMALE'] = "FEMALE";
        GenderEnum[GenderEnum["MALE"] = 'MALE'] = "MALE";
        GenderEnum[GenderEnum["NOTAVAILABLE"] = 'NOT_AVAILABLE'] = "NOTAVAILABLE";
        GenderEnum[GenderEnum["NOTLISTED"] = 'NOT_LISTED'] = "NOTLISTED";
        GenderEnum[GenderEnum["UNVERIFIED"] = 'UNVERIFIED'] = "UNVERIFIED";
        GenderEnum[GenderEnum["X"] = 'X'] = "X";
    })(GenderEnum = Case.GenderEnum || (Case.GenderEnum = {}));
    let RaceEnum;
    (function (RaceEnum) {
        RaceEnum[RaceEnum["ASIAN"] = 'ASIAN'] = "ASIAN";
        RaceEnum[RaceEnum["BLACK"] = 'BLACK'] = "BLACK";
        RaceEnum[RaceEnum["HISPANIC"] = 'HISPANIC'] = "HISPANIC";
        RaceEnum[RaceEnum["MIDDLEEASTERN"] = 'MIDDLE_EASTERN'] = "MIDDLEEASTERN";
        RaceEnum[RaceEnum["NATIVE"] = 'NATIVE'] = "NATIVE";
        RaceEnum[RaceEnum["NOTAVAILABLE"] = 'NOT_AVAILABLE'] = "NOTAVAILABLE";
        RaceEnum[RaceEnum["PACIFICISLANDER"] = 'PACIFIC_ISLANDER'] = "PACIFICISLANDER";
        RaceEnum[RaceEnum["TWOORMORE"] = 'TWO_OR_MORE'] = "TWOORMORE";
        RaceEnum[RaceEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
        RaceEnum[RaceEnum["UNVERIFIED"] = 'UNVERIFIED'] = "UNVERIFIED";
        RaceEnum[RaceEnum["WHITE"] = 'WHITE'] = "WHITE";
    })(RaceEnum = Case.RaceEnum || (Case.RaceEnum = {}));
    let StateEnum;
    (function (StateEnum) {
        StateEnum[StateEnum["AK"] = 'AK'] = "AK";
        StateEnum[StateEnum["AL"] = 'AL'] = "AL";
        StateEnum[StateEnum["AR"] = 'AR'] = "AR";
        StateEnum[StateEnum["AZ"] = 'AZ'] = "AZ";
        StateEnum[StateEnum["CA"] = 'CA'] = "CA";
        StateEnum[StateEnum["CO"] = 'CO'] = "CO";
        StateEnum[StateEnum["CT"] = 'CT'] = "CT";
        StateEnum[StateEnum["DC"] = 'DC'] = "DC";
        StateEnum[StateEnum["DE"] = 'DE'] = "DE";
        StateEnum[StateEnum["FL"] = 'FL'] = "FL";
        StateEnum[StateEnum["GA"] = 'GA'] = "GA";
        StateEnum[StateEnum["HI"] = 'HI'] = "HI";
        StateEnum[StateEnum["IA"] = 'IA'] = "IA";
        StateEnum[StateEnum["ID"] = 'ID'] = "ID";
        StateEnum[StateEnum["IL"] = 'IL'] = "IL";
        StateEnum[StateEnum["IN"] = 'IN'] = "IN";
        StateEnum[StateEnum["KS"] = 'KS'] = "KS";
        StateEnum[StateEnum["KY"] = 'KY'] = "KY";
        StateEnum[StateEnum["LA"] = 'LA'] = "LA";
        StateEnum[StateEnum["MA"] = 'MA'] = "MA";
        StateEnum[StateEnum["MD"] = 'MD'] = "MD";
        StateEnum[StateEnum["ME"] = 'ME'] = "ME";
        StateEnum[StateEnum["MI"] = 'MI'] = "MI";
        StateEnum[StateEnum["MN"] = 'MN'] = "MN";
        StateEnum[StateEnum["MO"] = 'MO'] = "MO";
        StateEnum[StateEnum["MS"] = 'MS'] = "MS";
        StateEnum[StateEnum["MT"] = 'MT'] = "MT";
        StateEnum[StateEnum["NC"] = 'NC'] = "NC";
        StateEnum[StateEnum["ND"] = 'ND'] = "ND";
        StateEnum[StateEnum["NE"] = 'NE'] = "NE";
        StateEnum[StateEnum["NH"] = 'NH'] = "NH";
        StateEnum[StateEnum["NJ"] = 'NJ'] = "NJ";
        StateEnum[StateEnum["NM"] = 'NM'] = "NM";
        StateEnum[StateEnum["NV"] = 'NV'] = "NV";
        StateEnum[StateEnum["NY"] = 'NY'] = "NY";
        StateEnum[StateEnum["OH"] = 'OH'] = "OH";
        StateEnum[StateEnum["OK"] = 'OK'] = "OK";
        StateEnum[StateEnum["OR"] = 'OR'] = "OR";
        StateEnum[StateEnum["PA"] = 'PA'] = "PA";
        StateEnum[StateEnum["RI"] = 'RI'] = "RI";
        StateEnum[StateEnum["SC"] = 'SC'] = "SC";
        StateEnum[StateEnum["SD"] = 'SD'] = "SD";
        StateEnum[StateEnum["TN"] = 'TN'] = "TN";
        StateEnum[StateEnum["TX"] = 'TX'] = "TX";
        StateEnum[StateEnum["UT"] = 'UT'] = "UT";
        StateEnum[StateEnum["VA"] = 'VA'] = "VA";
        StateEnum[StateEnum["VT"] = 'VT'] = "VT";
        StateEnum[StateEnum["WA"] = 'WA'] = "WA";
        StateEnum[StateEnum["WI"] = 'WI'] = "WI";
        StateEnum[StateEnum["WV"] = 'WV'] = "WV";
        StateEnum[StateEnum["WY"] = 'WY'] = "WY";
    })(StateEnum = Case.StateEnum || (Case.StateEnum = {}));
    let StatusCategoryEnum;
    (function (StatusCategoryEnum) {
        StatusCategoryEnum[StatusCategoryEnum["ACTIVE"] = 'ACTIVE'] = "ACTIVE";
        StatusCategoryEnum[StatusCategoryEnum["CANCELLED"] = 'CANCELLED'] = "CANCELLED";
        StatusCategoryEnum[StatusCategoryEnum["RESOLVED"] = 'RESOLVED'] = "RESOLVED";
        StatusCategoryEnum[StatusCategoryEnum["UNCONFIRMED"] = 'UNCONFIRMED'] = "UNCONFIRMED";
    })(StatusCategoryEnum = Case.StatusCategoryEnum || (Case.StatusCategoryEnum = {}));
})(Case || (Case = {}));
