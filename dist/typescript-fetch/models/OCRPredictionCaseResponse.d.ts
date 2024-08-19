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
import { ConfidenceField, OCRCourtModel, OCRViolationModel, Violation } from './';
/**
 *
 * @export
 * @interface OCRPredictionCaseResponse
 */
export interface OCRPredictionCaseResponse {
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    accident?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    cdlClp?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    classification?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    court?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    courtOri?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    driversCity?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    driversDOB?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    driversFirstName?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    driversLastName?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    driversLicenseExpDate?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    driversLicenseNumber?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    driversLicenseState?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    driversMiddleName?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    driversRace?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    driversSex?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    driversState?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    driversStreetAddress?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    driversZip?: ConfidenceField;
    /**
     *
     * @type {Array<OCRCourtModel>}
     * @memberof OCRPredictionCaseResponse
     */
    eligibleCourtModels?: Array<OCRCourtModel>;
    /**
     *
     * @type {Array<OCRViolationModel>}
     * @memberof OCRPredictionCaseResponse
     */
    eligibleViolationModels?: Array<OCRViolationModel>;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    infractionNumber?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    infractionType?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    leaOri?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    officerBadgeNumber?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    officerName?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    ownerCity?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    ownerFirstName?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    ownerLastName?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    ownerState?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    ownerStreetAddress?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    ownerZip?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    smd?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    totalPenalty?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    vehicleActualSpeed?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    vehicleColor?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    vehicleMake?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    vehicleModel?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    vehiclePlateExp?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    vehiclePlateNumber?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    vehiclePlateState?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    vehicleStyle?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    vehicleYear?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    violationCity?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    violationDate?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    violationLocation?: ConfidenceField;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    violationTime?: ConfidenceField;
    /**
     *
     * @type {Array<Violation>}
     * @memberof OCRPredictionCaseResponse
     */
    violations?: Array<Violation>;
    /**
     *
     * @type {ConfidenceField}
     * @memberof OCRPredictionCaseResponse
     */
    zoneSpeedLimit?: ConfidenceField;
}
export declare function OCRPredictionCaseResponseFromJSON(json: any): OCRPredictionCaseResponse;
export declare function OCRPredictionCaseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OCRPredictionCaseResponse;
export declare function OCRPredictionCaseResponseToJSON(value?: OCRPredictionCaseResponse | null): any;
