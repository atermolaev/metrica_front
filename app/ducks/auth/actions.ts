import { IAuthPayload } from '$types';
import * as cnst from './constants';

export const authRequest = (payload: IAuthPayload) => ({
    type: cnst.AUTH_REQUEST,
    payload,
})

export const authSuccess = (payload: string[]) => ({
    type: cnst.AUTH_SUCCESS,
    payload,
})

export const authFailure = (error: unknown) => ({
    type: cnst.AUTH_FAILURE,
    payload: error,
})