import { createSelector } from 'reselect';
import { IRootState } from '$models';

export const authTokenSelector = createSelector((state: IRootState) => state.authReducer, auth => {
    return auth.token;
});

export const authDataSelector = createSelector((state: IRootState) => state.authReducer, auth => auth);

