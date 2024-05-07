import { createSelector } from 'reselect';
import { IRootState } from '$models';

export const authTokenSelector = createSelector((state: IRootState) => state.authReducer, auth => {
    return auth.token;
});

export const authStatusSelector = createSelector((state: IRootState) => state.authReducer, auth => auth.auth);

export const authFetchingSelector = createSelector((state: IRootState) => state.authReducer, auth => auth.isFetching);
