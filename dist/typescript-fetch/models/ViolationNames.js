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
export function ViolationNamesFromJSON(json) {
    return ViolationNamesFromJSONTyped(json, false);
}
export function ViolationNamesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'llmPrediction': !exists(json, 'llm_prediction') ? undefined : json['llm_prediction'],
        'pineconeIds': !exists(json, 'pinecone_ids') ? undefined : json['pinecone_ids'],
        'pineconeMatches': !exists(json, 'pinecone_matches') ? undefined : json['pinecone_matches'],
        'pineconeScores': !exists(json, 'pinecone_scores') ? undefined : json['pinecone_scores'],
    };
}
export function ViolationNamesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'llm_prediction': value.llmPrediction,
        'pinecone_ids': value.pineconeIds,
        'pinecone_matches': value.pineconeMatches,
        'pinecone_scores': value.pineconeScores,
    };
}
