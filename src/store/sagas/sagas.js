import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { API_CALL_REQUEST } from '../actions/asyncActions';

// Watcher SAGA

// API_CALL_REQUEST is listened
export function* watcherSaga(){
    // Action listened and starts a worker SAGA
    yield takeLatest(API_CALL_REQUEST, workerSaga)
}

// Worker SAGA
// is called from watcher Saga, a login performs and an actions is dispatched
export function* workerSaga(action){
    try {
        const res = yield call(fetchHttp(action.payload.request))
        // We obtain the token from the res
        const token = res.data.token
        yield put({
            type: action.payload.okAction, // API_CALL_SUCCESS
            payload: {
                token: token
            }
        })
    } catch (error) {
        yield put({
            type: action.payload.failureAction, // API_CALL_FAILURE
            payload: {
                error
            }
        })
    }
}

function fetchHttp(request){
    return function(){
        return (axios(request))
    }
}