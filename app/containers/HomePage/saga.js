import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';
import { LOAD_JOBS } from 'containers/HomePage/constants';
import {
  loadJobs,
  loadJobsSucess,
  loadJobsFailure,
} from 'containers/HomePage/actions';

// todo-abotz: move to central spot
const API_URL = `https://locahost:3001`;
const JOBS_API_URL = `${API_URL}/jobs`;

export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* getJobs() {
  yield put(loadJobs());

  try {
    const jobs = yield call(request, JOBS_API_URL);
    yield put(loadJobsSucess, jobs);
  } catch (error) {
    yield put(loadJobsFailure, error);
  }
}

export default function* githubData() {
  yield takeLatest(LOAD_JOBS, getJobs);
  yield takeLatest(LOAD_REPOS, getRepos);
}
