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
import { CourtEntity } from './courtEntity';


export interface CaseItem { 
    caseId?: string;
    caseStatus?: CaseItem.CaseStatusEnum;
    citationState?: CaseItem.CitationStateEnum;
    clientFirstName?: string;
    clientLastName?: string;
    court?: CourtEntity;
    lawfirmName?: string;
    profilePictureUrl?: string;
}
export namespace CaseItem {
    export type CaseStatusEnum = 'AMENDED_DOWN_WITHIN_CLASS' | 'AMENDED_FULL_FINE' | 'AMENDED_INCREASED_FINE' | 'AMENDED_NO_FINE' | 'AMENDED_REDUCED_FINE' | 'AMENDED_TO_INFRACTION' | 'AMENDED_TO_NMV' | 'CANCELLED_ATTORNEY_AT_FAULT' | 'CANCELLED_BY_LAWFIRM' | 'CANCELLED_BY_USER' | 'CANCELLED_DUPLICATE' | 'CANCELLED_NMV' | 'CANCELLED_NON_PAYMENT' | 'CANCELLED_NO_LAWFIRM' | 'CANCELLED_OVERDUE' | 'CANCELLED_TOO_SHORT_NOTICE' | 'CASE_IN_PROGRESS' | 'CLIENT_CONFIRMED' | 'CLIENT_CONFIRMED_UNPAID' | 'CLIENT_FIRED_LAWFIRM' | 'CLIENT_FORCED_LOSS' | 'CLIENT_PAID_FINE' | 'CLIENT_UNRESPONSIVE' | 'DEFERRED' | 'DISMISSED' | 'DIVERSION' | 'FEES_DISPUTED' | 'FINE_REDUCTION_ONLY' | 'LAWFIRM_WITHDRAWN' | 'LOST' | 'NO_LAWFIRM_AVAILABLE' | 'POINT_REDUCTION' | 'REFUSED_BY_LAWFIRM' | 'RESOLVED_NON_PAYMENT' | 'STALE' | 'TRAFFIC_SCHOOL' | 'UNCONFIRMED';
    export const CaseStatusEnum = {
        AmendedDownWithinClass: 'AMENDED_DOWN_WITHIN_CLASS' as CaseStatusEnum,
        AmendedFullFine: 'AMENDED_FULL_FINE' as CaseStatusEnum,
        AmendedIncreasedFine: 'AMENDED_INCREASED_FINE' as CaseStatusEnum,
        AmendedNoFine: 'AMENDED_NO_FINE' as CaseStatusEnum,
        AmendedReducedFine: 'AMENDED_REDUCED_FINE' as CaseStatusEnum,
        AmendedToInfraction: 'AMENDED_TO_INFRACTION' as CaseStatusEnum,
        AmendedToNmv: 'AMENDED_TO_NMV' as CaseStatusEnum,
        CancelledAttorneyAtFault: 'CANCELLED_ATTORNEY_AT_FAULT' as CaseStatusEnum,
        CancelledByLawfirm: 'CANCELLED_BY_LAWFIRM' as CaseStatusEnum,
        CancelledByUser: 'CANCELLED_BY_USER' as CaseStatusEnum,
        CancelledDuplicate: 'CANCELLED_DUPLICATE' as CaseStatusEnum,
        CancelledNmv: 'CANCELLED_NMV' as CaseStatusEnum,
        CancelledNonPayment: 'CANCELLED_NON_PAYMENT' as CaseStatusEnum,
        CancelledNoLawfirm: 'CANCELLED_NO_LAWFIRM' as CaseStatusEnum,
        CancelledOverdue: 'CANCELLED_OVERDUE' as CaseStatusEnum,
        CancelledTooShortNotice: 'CANCELLED_TOO_SHORT_NOTICE' as CaseStatusEnum,
        CaseInProgress: 'CASE_IN_PROGRESS' as CaseStatusEnum,
        ClientConfirmed: 'CLIENT_CONFIRMED' as CaseStatusEnum,
        ClientConfirmedUnpaid: 'CLIENT_CONFIRMED_UNPAID' as CaseStatusEnum,
        ClientFiredLawfirm: 'CLIENT_FIRED_LAWFIRM' as CaseStatusEnum,
        ClientForcedLoss: 'CLIENT_FORCED_LOSS' as CaseStatusEnum,
        ClientPaidFine: 'CLIENT_PAID_FINE' as CaseStatusEnum,
        ClientUnresponsive: 'CLIENT_UNRESPONSIVE' as CaseStatusEnum,
        Deferred: 'DEFERRED' as CaseStatusEnum,
        Dismissed: 'DISMISSED' as CaseStatusEnum,
        Diversion: 'DIVERSION' as CaseStatusEnum,
        FeesDisputed: 'FEES_DISPUTED' as CaseStatusEnum,
        FineReductionOnly: 'FINE_REDUCTION_ONLY' as CaseStatusEnum,
        LawfirmWithdrawn: 'LAWFIRM_WITHDRAWN' as CaseStatusEnum,
        Lost: 'LOST' as CaseStatusEnum,
        NoLawfirmAvailable: 'NO_LAWFIRM_AVAILABLE' as CaseStatusEnum,
        PointReduction: 'POINT_REDUCTION' as CaseStatusEnum,
        RefusedByLawfirm: 'REFUSED_BY_LAWFIRM' as CaseStatusEnum,
        ResolvedNonPayment: 'RESOLVED_NON_PAYMENT' as CaseStatusEnum,
        Stale: 'STALE' as CaseStatusEnum,
        TrafficSchool: 'TRAFFIC_SCHOOL' as CaseStatusEnum,
        Unconfirmed: 'UNCONFIRMED' as CaseStatusEnum
    };
    export type CitationStateEnum = 'AK' | 'AL' | 'AR' | 'AZ' | 'CA' | 'CO' | 'CT' | 'DC' | 'DE' | 'FL' | 'GA' | 'HI' | 'IA' | 'ID' | 'IL' | 'IN' | 'KS' | 'KY' | 'LA' | 'MA' | 'MD' | 'ME' | 'MI' | 'MN' | 'MO' | 'MS' | 'MT' | 'NC' | 'ND' | 'NE' | 'NH' | 'NJ' | 'NM' | 'NV' | 'NY' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VA' | 'VT' | 'WA' | 'WI' | 'WV' | 'WY';
    export const CitationStateEnum = {
        Ak: 'AK' as CitationStateEnum,
        Al: 'AL' as CitationStateEnum,
        Ar: 'AR' as CitationStateEnum,
        Az: 'AZ' as CitationStateEnum,
        Ca: 'CA' as CitationStateEnum,
        Co: 'CO' as CitationStateEnum,
        Ct: 'CT' as CitationStateEnum,
        Dc: 'DC' as CitationStateEnum,
        De: 'DE' as CitationStateEnum,
        Fl: 'FL' as CitationStateEnum,
        Ga: 'GA' as CitationStateEnum,
        Hi: 'HI' as CitationStateEnum,
        Ia: 'IA' as CitationStateEnum,
        Id: 'ID' as CitationStateEnum,
        Il: 'IL' as CitationStateEnum,
        In: 'IN' as CitationStateEnum,
        Ks: 'KS' as CitationStateEnum,
        Ky: 'KY' as CitationStateEnum,
        La: 'LA' as CitationStateEnum,
        Ma: 'MA' as CitationStateEnum,
        Md: 'MD' as CitationStateEnum,
        Me: 'ME' as CitationStateEnum,
        Mi: 'MI' as CitationStateEnum,
        Mn: 'MN' as CitationStateEnum,
        Mo: 'MO' as CitationStateEnum,
        Ms: 'MS' as CitationStateEnum,
        Mt: 'MT' as CitationStateEnum,
        Nc: 'NC' as CitationStateEnum,
        Nd: 'ND' as CitationStateEnum,
        Ne: 'NE' as CitationStateEnum,
        Nh: 'NH' as CitationStateEnum,
        Nj: 'NJ' as CitationStateEnum,
        Nm: 'NM' as CitationStateEnum,
        Nv: 'NV' as CitationStateEnum,
        Ny: 'NY' as CitationStateEnum,
        Oh: 'OH' as CitationStateEnum,
        Ok: 'OK' as CitationStateEnum,
        Or: 'OR' as CitationStateEnum,
        Pa: 'PA' as CitationStateEnum,
        Ri: 'RI' as CitationStateEnum,
        Sc: 'SC' as CitationStateEnum,
        Sd: 'SD' as CitationStateEnum,
        Tn: 'TN' as CitationStateEnum,
        Tx: 'TX' as CitationStateEnum,
        Ut: 'UT' as CitationStateEnum,
        Va: 'VA' as CitationStateEnum,
        Vt: 'VT' as CitationStateEnum,
        Wa: 'WA' as CitationStateEnum,
        Wi: 'WI' as CitationStateEnum,
        Wv: 'WV' as CitationStateEnum,
        Wy: 'WY' as CitationStateEnum
    };
}


