import { call, put, all, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import {
  LOAD_JOBS,
  loadJobs,
  LOAD_JOB,
  loadJob,
  LOAD_JOB_ORGANIZATION,
  loadJobOrganization,
} from 'actions/JobActions';

// TODO-ABOTZ: move to central spot
const API_URL = `http://localhost:3001`;
const JOBS_API_URL = `${API_URL}/jobs`;

export function* getJobs() {
  try {
    const jobs = yield call(request, JOBS_API_URL);
    yield put(loadJobs.success(jobs));
  } catch (error) {
    // TODO-ABOTZ: Need to report failure to something? Sentry?
    yield put(loadJobs.failure(error));
  }
}

export function* getJob(action) {
  try {
    const job = yield call(request, `${JOBS_API_URL}/${action.id}`);
    yield put(loadJob.success(job));
  } catch (error) {
    yield put(loadJob.failure(error));
  }
}

export function* getJobOrganization(action) {
  try {
    const jobOrganization = yield call(
      request,
      `${JOBS_API_URL}/${action.id}/organization`,
    );
    yield put(loadJobOrganization.success(jobOrganization));
  } catch (error) {
    yield put(loadJobOrganization.failure(error));
  }
}

export default function* jobRootSaga() {
  yield all([
    yield takeLatest(LOAD_JOBS.REQUEST, getJobs),
    yield takeLatest(LOAD_JOB.REQUEST, getJob),
    yield takeLatest(LOAD_JOB_ORGANIZATION.REQUEST, getJobOrganization),
  ]);
}
