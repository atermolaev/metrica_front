import { createSelector } from 'reselect';
import { IRootState } from '$models';

export const authToken = createSelector((state: IRootState) => state.authReducer, auth => {
    return auth.token;
})   