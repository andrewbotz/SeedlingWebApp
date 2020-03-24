import produce from 'immer';
import { LOAD_JOBS, LOAD_JOBS_SUCCESS, LOAD_JOBS_ERROR } from './constants';

export const initialState = {
  loading: false,
  error: false,
  jobs: [],
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_JOBS:
        draft.loading = true;
        draft.error = false;
        break;
      case LOAD_JOBS_SUCCESS:
        draft.loading = false;
        draft.jobs = action.jobs;
        break;
      case LOAD_JOBS_ERROR:
        draft.error = action.error;
    }
  });

export default homeReducer;
