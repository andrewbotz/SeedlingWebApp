import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useParams } from 'react-router-dom';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectJob,
  makeSelectJobOrganization,
} from 'selectors/JobSelectors';
import reducer from 'reducers/JobReducer';
import saga from 'sagas/JobSagas';
import { loadJob, loadJobOrganization } from 'actions/JobActions';

const key = 'job';

export function JobPage({
  onGetJob,
  job,
  onGetJobOrganization,
  jobOrganization,
}) {
  const { id } = useParams();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    onGetJob(id);
    onGetJobOrganization(id);
  }, []);

  return (
    <article>
      <Helmet>
        <title>Job Page</title>
        <meta
          name="description"
          content="Seedling non-profit job to apply for."
        />
      </Helmet>
      <div>Job Page</div>
      <div>{job.title || 'unknown job name'}</div>
      <div>{jobOrganization.name || 'unknown job organization name'}</div>
    </article>
  );
}

JobPage.propTypes = {
  job: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onGetJob: PropTypes.func,
  jobOrganization: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onGetJobOrganization: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  job: makeSelectJob(),
  jobOrganization: makeSelectJobOrganization(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onGetJob: id => dispatch(loadJob.request(id)),
    onGetJobOrganization: id => dispatch(loadJobOrganization.request(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(JobPage);
