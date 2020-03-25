import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Box, Heading, Text } from 'grommet';
import JobDescriptionSection from 'components/JobDescriptionSection';
import ApplyNowButton from 'components/ApplyNowButton';

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

// TODO-Abotz: clean up inline styling and move this out to own file?
export const Wrapper = styled(Box)`
  max-width: 800px;
  margin: 0 auto;
`;

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
      <Wrapper pad="large">
        <Heading level="2" color="brand">
          {jobOrganization.name}
        </Heading>
        <Heading level="3" style={{ marginBottom: 0 }}>
          {job.title}
        </Heading>
        <Text size="small" color="dark-4" margin={{ bottom: 'medium' }}>
          {jobOrganization.city}, {jobOrganization.state}
        </Text>

        <JobDescriptionSection title="Description" content={job.description} />
        {job.responsibilities && (
          <JobDescriptionSection
            title="Responsibilities"
            content={job.responsibilities}
          />
        )}
        {job.desiredExperience && (
          <JobDescriptionSection
            title="Desired Experience"
            content={job.desiredExperience}
          />
        )}
        {job.benefits && (
          <JobDescriptionSection title="Benefits" content={job.benefits} />
        )}
        <ApplyNowButton
          // TODO-abotz: Wire up apply now clicked button
          // eslint-disable-next-line no-console
          onApplyNowClicked={() => console.log('Apply Now Clicked')}
        />
      </Wrapper>
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
