import { takeEvery } from "redux-saga/effects";
import { callTs, put } from "./sagas-functions";
import {
  FETCH_SUMMARY_COLLECTION,
  SUMMARY_INIT,
} from "../constants/summary-constants";
import { TSummary } from "../reducers/summary-reducer";
import { TCollection } from "../reducers/collections-reducer";
import { COLLECTION_INIT } from "../constants/collections-constants";

async function getSummaries(): Promise<TSummary[]> {
  const response = await fetch("http://localhost:3000/summary");
  const data = await response.json();

  return data as Promise<TSummary[]>;
}

async function getCollections(): Promise<TCollection[]> {
  const response = await fetch("http://localhost:3000/collection");
  const data = await response.json();

  return data as Promise<TCollection[]>;
}

function* mainPageWorker() {
  const summaries = yield* callTs(getSummaries);

  yield put({
    type: SUMMARY_INIT,
    summaries,
  });

  const collections = yield* callTs(getCollections);

  yield put({
    type: COLLECTION_INIT,
    collections,
  });
}

export function* mainPageWatcher() {
  yield takeEvery(FETCH_SUMMARY_COLLECTION, mainPageWorker);
}
