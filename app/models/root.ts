import { IAuthResultDataBody } from './auth';

export interface IRootState {
    authReducer: IAuthResultDataBody;
    page1Reducer: {
        cource: Record<string, string>,
    };
    page2Reducer: {
        cource: Record<string, string>,
    };
}