import { delay } from 'redux-saga';
import { takeEvery, takeLatest, put, call, select } from 'redux-saga/effects'

function apiGet(text,length){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(length + ' - '+ text + ' everyday! ') 
        }, 2000);
    }) 
}

function* asyncAddTodo(action) {
    try {
        const todos = yield select(state => state.todos)
        const response = yield call (apiGet, action.payload.text, todos.length)
        yield put({type: 'ADD_TODO', payload: {text: response } })
    } catch (error) {
        yield put({type: 'ERROR'})
    }
}
 
export default function* root(){
    yield [
        takeLatest('ASYNC_ADD_TODO', asyncAddTodo),

    ];
}