import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'connected-react-router';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectJobs } from 'selectors/JobSelectors';

import SeedlingWhy from 'components/SeedlingWhy';
import PostForHelpButton from 'components/PostForHelpButton';
import JobList from 'components/JobList';
import { Box } from 'grommet';
import { loadJobs } from 'actions/JobActions';
import reducer from 'reducers/JobReducer';
import saga from 'sagas/JobSagas';

// TODO-abotz: move injection keys to central location
const key = 'job';

export function HomePage({ onGetJobs, jobs, navigateToJobPage }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    onGetJobs();
  }, []);

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Seedling helps non-profit organizations find development and design help."
        />
      </Helmet>
      <Box align="center" pad="large">
        <SeedlingWhy />
        <PostForHelpButton />
        <JobList jobs={jobs} onNavigateToJobPage={navigateToJobPage} />
      </Box>
    </article>
  );
}

HomePage.propTypes = {
  jobs: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onGetJobs: PropTypes.func,
  navigateToJobPage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  jobs: makeSelectJobs(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onGetJobs: () => dispatch(loadJobs.request()),
    navigateToJobPage: id => dispatch(push(`/jobs/${id}`, { id })),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
