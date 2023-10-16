import { put, call, takeLatest } from 'redux-saga/effects';
import { getMoneyCource } from './api';
import * as at from './constants';
import {
    moneyCourceSuccess,
    moneyCourceFailure,
} from './actions';

interface IResult {
    data: string[];
}

function* moneyCource(){
    try{
        const result: IResult = yield call(getMoneyCource);

        yield put(moneyCourceSuccess(result.data));
    } catch(error) {
        yield put(moneyCourceFailure(error));
    }
}

export default function* page1Saga(){
    yield takeLatest(at.MONEY_COURCE_REQUEST, moneyCource)
}