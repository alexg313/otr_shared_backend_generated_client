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
export var LawfirmBankPayoutModel;
(function (LawfirmBankPayoutModel) {
    let MethodEnum;
    (function (MethodEnum) {
        MethodEnum[MethodEnum["INSTANT"] = 'INSTANT'] = "INSTANT";
        MethodEnum[MethodEnum["STANDARD"] = 'STANDARD'] = "STANDARD";
    })(MethodEnum = LawfirmBankPayoutModel.MethodEnum || (LawfirmBankPayoutModel.MethodEnum = {}));
    let ReconciliationStatusEnum;
    (function (ReconciliationStatusEnum) {
        ReconciliationStatusEnum[ReconciliationStatusEnum["COMPLETED"] = 'COMPLETED'] = "COMPLETED";
        ReconciliationStatusEnum[ReconciliationStatusEnum["INPROGRESS"] = 'IN_PROGRESS'] = "INPROGRESS";
        ReconciliationStatusEnum[ReconciliationStatusEnum["NOTAPPLICABLE"] = 'NOT_APPLICABLE'] = "NOTAPPLICABLE";
    })(ReconciliationStatusEnum = LawfirmBankPayoutModel.ReconciliationStatusEnum || (LawfirmBankPayoutModel.ReconciliationStatusEnum = {}));
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["CANCELED"] = 'CANCELED'] = "CANCELED";
        StatusEnum[StatusEnum["FAILED"] = 'FAILED'] = "FAILED";
        StatusEnum[StatusEnum["INTRANSIT"] = 'IN_TRANSIT'] = "INTRANSIT";
        StatusEnum[StatusEnum["PAID"] = 'PAID'] = "PAID";
        StatusEnum[StatusEnum["PENDING"] = 'PENDING'] = "PENDING";
    })(StatusEnum = LawfirmBankPayoutModel.StatusEnum || (LawfirmBankPayoutModel.StatusEnum = {}));
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["BANKACCOUNT"] = 'BANK_ACCOUNT'] = "BANKACCOUNT";
        TypeEnum[TypeEnum["CARD"] = 'CARD'] = "CARD";
    })(TypeEnum = LawfirmBankPayoutModel.TypeEnum || (LawfirmBankPayoutModel.TypeEnum = {}));
})(LawfirmBankPayoutModel || (LawfirmBankPayoutModel = {}));
