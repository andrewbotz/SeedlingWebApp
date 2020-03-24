import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from 'grommet';
import JobCard from 'components/JobCard';

const JobList = props => {
  const { jobs, onNavigateToJobPage } = props;
  return (
    <Grid gap="medium" margin="large">
      {jobs.length > 0 &&
        jobs.map(job => (
          // <Box align="center" gap="large" elevation="medium" width="large">
          <JobCard
            key={job.id}
            job={job}
            onNavigateToJobPage={onNavigateToJobPage}
          />
          // </Box>
        ))}
    </Grid>
  );
};

JobList.propTypes = {
  jobs: PropTypes.array,
  onNavigateToJobPage: PropTypes.func,
};

export default JobList;
