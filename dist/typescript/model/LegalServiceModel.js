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
export var LegalServiceModel;
(function (LegalServiceModel) {
    let LegalServiceTypeEnum;
    (function (LegalServiceTypeEnum) {
        LegalServiceTypeEnum[LegalServiceTypeEnum["DEFER"] = 'DEFER'] = "DEFER";
        LegalServiceTypeEnum[LegalServiceTypeEnum["FIGHT"] = 'FIGHT'] = "FIGHT";
    })(LegalServiceTypeEnum = LegalServiceModel.LegalServiceTypeEnum || (LegalServiceModel.LegalServiceTypeEnum = {}));
    let LegalVerticalEnum;
    (function (LegalVerticalEnum) {
        LegalVerticalEnum[LegalVerticalEnum["TRAFFIC"] = 'TRAFFIC'] = "TRAFFIC";
    })(LegalVerticalEnum = LegalServiceModel.LegalVerticalEnum || (LegalServiceModel.LegalVerticalEnum = {}));
    let RefundEligibilityEnum;
    (function (RefundEligibilityEnum) {
        RefundEligibilityEnum[RefundEligibilityEnum["FULLREFUND"] = 'FULL_REFUND'] = "FULLREFUND";
        RefundEligibilityEnum[RefundEligibilityEnum["NOREFUND"] = 'NO_REFUND'] = "NOREFUND";
    })(RefundEligibilityEnum = LegalServiceModel.RefundEligibilityEnum || (LegalServiceModel.RefundEligibilityEnum = {}));
})(LegalServiceModel || (LegalServiceModel = {}));
