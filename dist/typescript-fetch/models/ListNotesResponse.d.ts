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
import { Cursor, NoteAuthor, NoteModel } from './';
/**
 *
 * @export
 * @interface ListNotesResponse
 */
export interface ListNotesResponse {
    /**
     *
     * @type {Array<NoteAuthor>}
     * @memberof ListNotesResponse
     */
    authors?: Array<NoteAuthor>;
    /**
     *
     * @type {Cursor}
     * @memberof ListNotesResponse
     */
    cursorModel?: Cursor;
    /**
     *
     * @type {Array<NoteModel>}
     * @memberof ListNotesResponse
     */
    notes?: Array<NoteModel>;
    /**
     *
     * @type {number}
     * @memberof ListNotesResponse
     */
    totalRecords?: number;
}
export declare function ListNotesResponseFromJSON(json: any): ListNotesResponse;
export declare function ListNotesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListNotesResponse;
export declare function ListNotesResponseToJSON(value?: ListNotesResponse | null): any;
