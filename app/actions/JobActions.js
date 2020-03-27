import {
  action,
  createRequestTypes,
  REQUEST,
  SUCCESS,
  FAILURE,
} from './action.utils';

export const LOAD_JOBS = createRequestTypes('LOAD_JOBS');
export const loadJobs = {
  request: () => action(LOAD_JOBS[REQUEST]),
  success: jobs => action(LOAD_JOBS[SUCCESS], { jobs }),
  failure: error => action(LOAD_JOBS[FAILURE], { error }),
};

export const LOAD_JOB = createRequestTypes('LOAD_JOB');
export const loadJob = {
  request: id => action(LOAD_JOB[REQUEST], { id }),
  success: job => action(LOAD_JOB[SUCCESS], { job }),
  failure: error => action(LOAD_JOB[FAILURE], { error }),
};

export const LOAD_JOB_ORGANIZATION = createRequestTypes(
  'LOAD_JOB_ORGANIZATION',
);
export const loadJobOrganization = {
  request: id => action(LOAD_JOB_ORGANIZATION[REQUEST], { id }),
  success: jobOrganization =>
    action(LOAD_JOB_ORGANIZATION[SUCCESS], { jobOrganization }),
  failure: error => action(LOAD_JOB_ORGANIZATION[FAILURE], { error }),
};

export const SAVE_JOB_APPLICANT = createRequestTypes('SAVE_JOB_APPLICANT');
export const saveJobApplicant = {
  request: (id, applicant) =>
    action(SAVE_JOB_APPLICANT[REQUEST], { id, applicant }),
  success: jobApplicant =>
    action(SAVE_JOB_APPLICANT[SUCCESS], { jobApplicant }),
  failure: error => action(SAVE_JOB_APPLICANT[FAILURE], { error }),
};
