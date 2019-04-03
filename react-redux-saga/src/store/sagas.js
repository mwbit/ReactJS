import { takeLatest, put, call } from "redux-saga/effects";

function apiGet(text, length) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: "comprar comida" },
        { id: 2, text: "comprar comida 2" },
        { id: 3, text: "comprar comida 3" },
        { id: 4, text: "comprar comida 4" }
      ]);
    }, 2000);
  });
}

function* getTodoList() {
  try {
    const response = yield call(apiGet);
    yield put({ type: "SUCCESS_TODO_LIST", payload: { data: response } });
  } catch (err) {
    yield put({ type: "FAILURE_TODO_LIST" });
  }
}

export default function* root() {
  yield takeLatest("REQUEST_TODO_LIST", getTodoList);
}
