import { createSelector } from 'reselect';
import { INITIAL_STATE } from 'reducers/JobReducer';

export const selectJobState = state => state.job || INITIAL_STATE;

export const makeSelectJobs = () =>
  createSelector(
    selectJobState,
    jobState => jobState.jobs,
  );

export const makeSelectJob = () =>
  createSelector(
    selectJobState,
    jobState => jobState.job,
  );

export const makeSelectJobOrganization = () =>
  createSelector(
    selectJobState,
    jobState => jobState.jobOrganization,
  );
