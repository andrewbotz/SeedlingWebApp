import { call, put, all, takeLatest } from 'redux-saga/effects';
import { request, post } from 'utils/request';
import {
  LOAD_JOBS,
  loadJobs,
  LOAD_JOB,
  loadJob,
  LOAD_JOB_ORGANIZATION,
  loadJobOrganization,
  SAVE_JOB_APPLICANT,
  saveJobApplicant,
} from 'actions/JobActions';

// TODO-ABOTZ: move to central spot
const API_URL = `http://localhost:3001`;
const JOBS_API_URL = `${API_URL}/jobs`;
const JOB_APPLICANT_API_URL = `${API_URL}/applicants`;

export function* getJobs() {
  try {
    // TODO-ABOTZ: Need to create services for these API url calls, create way to extend from request.js
    const requestURLOrderByDatePosted = `${JOBS_API_URL}/?filter[order][0]=datePosted DESC&filter[include][][relation]=organization`;
    const jobs = yield call(request, requestURLOrderByDatePosted);
    yield put(loadJobs.success(jobs));
  } catch (error) {
    // TODO-ABOTZ: Need to report failure to something? Sentry?
    yield put(loadJobs.failure(error));
  }
}

export function* getJob(action) {
  try {
    // https://strongloop.com/strongblog/inclusion-of-related-models/
    // http://localhost:3001/jobs?filter[include][][relation]=organization
    const requestURLIncludeOrganization = `${JOBS_API_URL}/${
      action.id
    }?filter[include][][relation]=organization`;
    const job = yield call(request, requestURLIncludeOrganization);
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

export function* postJobApplicant(action) {
  try {
    const { id, applicant } = action;

    const newJobApplicant = yield call(post, JOB_APPLICANT_API_URL, {
      jobId: Number(id),
      ...applicant,
    });
    yield put(saveJobApplicant.success(newJobApplicant));
    // TODO-abotz: Route user to Thank You Page when application is successful
  } catch (error) {
    yield put(saveJobApplicant.failure(error));
  }
}

export default function* jobRootSaga() {
  yield all([
    yield takeLatest(LOAD_JOBS.REQUEST, getJobs),
    yield takeLatest(LOAD_JOB.REQUEST, getJob),
    yield takeLatest(LOAD_JOB_ORGANIZATION.REQUEST, getJobOrganization),
    yield takeLatest(SAVE_JOB_APPLICANT.REQUEST, postJobApplicant),
  ]);
}
