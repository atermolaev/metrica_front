import { IAuthPayload, IAuthResultData } from '$models';
import * as cnst from './constants';

export const authRequest = (payload: IAuthPayload) => ({
    type: cnst.AUTH_REQUEST,
    payload,
});

export const authSuccess = (payload: IAuthResultData) => ({
    type: cnst.AUTH_SUCCESS,
    payload,
});

export const authFailure = (error: unknown) => ({
    type: cnst.AUTH_FAILURE,
    payload: error,
});

export const authReset = () => ({
    type: cnst.AUTH_RESET,
    payload: {},
});
