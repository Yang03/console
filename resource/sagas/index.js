import {take, call, put, takeLatest} from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'


function apiFetchUser() {
    return fetch('/api/user/register', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'test@qq.com',
                password: '123456',
                name: 'yp',
                company: 'bx',
                companyType: 1,
                mobile: '18616813528'
            })
        }).then(Response => Response.json())
}

function* fetchUser(action) {
    console.log(action)
    try {
       const user = yield call(apiFetchUser, action.payload.userId);
       yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    } catch (e) {
       yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
 }

 function* mySaga() {
    yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

  export default mySaga

