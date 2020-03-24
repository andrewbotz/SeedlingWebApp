// import {
//   action,
//   createRequestTypes,
//   REQUEST,
//   SUCCESS,
//   FAILURE,
// } from '../../utils/actions.utils';

// export const LOAD_JOBS = createRequestTypes('LOAD_JOBS');
// export const loadJobs = {
//   request: () => action(LOAD_JOBS[REQUEST]),
//   success: jobs => action(LOAD_JOBS[SUCCESS], { jobs }),
//   failure: error => action(LOAD_JOBS[FAILURE], { error }),
// };

// export function changeUsername(username) {
//   return {
//     type: CHANGE_USERNAME,
//     username,
//   };
// }

// export function loadJobs() {
//   return {
//     type: LOAD_JOBS,
//   };
// }

// export function loadJobsSucess(jobs) {
//   return {
//     type: LOAD_JOBS_SUCCESS,
//     jobs,
//   };
// }

// export function loadJobsFailure(error) {
//   return {
//     type: LOAD_JOBS_ERROR,
//     error,
//   };
// }
