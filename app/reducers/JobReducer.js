import produce from 'immer';
import {
  LOAD_JOBS,
  LOAD_JOB,
  LOAD_JOB_ORGANIZATION,
  SAVE_JOB_APPLICANT,
} from 'actions/JobActions';

export const INITIAL_STATE = {
  loading: false,
  error: false,
  jobs: [],
  job: false,
  jobOrganization: false,
};

/* eslint-disable default-case, no-param-reassign, consistent-return */
const jobReducer = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_JOBS.REQUEST:
      case LOAD_JOB_ORGANIZATION.REQUST:
      case LOAD_JOB.REQUEST:
      case SAVE_JOB_APPLICANT.REQUEST:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_JOBS.FAILURE:
      case LOAD_JOB.FAILURE:
      case LOAD_JOB_ORGANIZATION.FAILURE:
      case SAVE_JOB_APPLICANT.FAILURE:
        draft.loading = false;
        draft.error = action.error;
        break;

      case LOAD_JOBS.SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.jobs = action.jobs;
        break;

      case LOAD_JOB.SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.job = action.job;
        break;

      case LOAD_JOB_ORGANIZATION.SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.jobOrganization = action.jobOrganization;
        break;

      case SAVE_JOB_APPLICANT.SUCCESS:
        draft.loading = false;
        draft.error = false;
        break;

      default:
        return state;
    }
  });

export default jobReducer;
