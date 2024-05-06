import { put, call, takeLatest } from 'redux-saga/effects';
import { sendAuthData } from './api';
import * as cnst from './constants';
import {
    authSuccess,
    authFailure,
    authRequest,
} from './actions';
import { IAuthResult } from '$models';

function* authorization({ payload } : ReturnType<typeof authRequest>){
    try{
        const result: IAuthResult = yield call(sendAuthData, payload);

        yield put(authSuccess(result.data));
    } catch(error) {
        yield put(authFailure(error));
    }
}

export default function* authSaga(){
    yield takeLatest(cnst.AUTH_REQUEST, authorization);
}
