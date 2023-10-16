import * as at from './constants';

export const moneyCourceRequest = () => ({
    type: at.MONEY_COURCE_REQUEST,
})

export const moneyCourceSuccess = (obj: string[]) => ({
    type: at.MONEY_COURCE_SUCCESS,
    obj,
})

export const moneyCourceFailure = (error: unknown) => ({
    type: at.MONEY_COURCE_FAILURE,
    error,
})