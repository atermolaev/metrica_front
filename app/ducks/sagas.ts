import { all } from 'redux-saga/effects';
import page1Saga from './page1/saga';
import page2Saga from './page2/saga';

export default function* rootSaga() {
    yield all([
        page1Saga(),
        page2Saga(),
    ]);
}