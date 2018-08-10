import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {

  const json = yield fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5200170c2caa4fe197e2e7867ee9a675')
    .then(response => response.json(), );

  yield put({ type: "NEWS_RECEIVED", json: json.articles, });
}

function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
