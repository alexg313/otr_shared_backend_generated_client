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
export function PredictCitationTextRequestFromJSON(json) {
    return PredictCitationTextRequestFromJSONTyped(json, false);
}
export function PredictCitationTextRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'citationId': !exists(json, 'citationId') ? undefined : json['citationId'],
        'imageInBase64': !exists(json, 'imageInBase64') ? undefined : json['imageInBase64'],
        'regionCode': !exists(json, 'regionCode') ? undefined : json['regionCode'],
    };
}
export function PredictCitationTextRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'citationId': value.citationId,
        'imageInBase64': value.imageInBase64,
        'regionCode': value.regionCode,
    };
}
