import React from 'react';
import PropTypes from 'prop-types';

import { Box, Heading, Text } from 'grommet';

const JobCard = props => {
  const { job, onNavigateToJobPage } = props;
  return (
    <Box
      round="xxsmall"
      elevation="small"
      onClick={() => onNavigateToJobPage(job.id)}
    >
      <Box pad={{ horizontal: 'small' }}>
        <Box
          margin={{ top: 'small' }}
          direction="row"
          align="center"
          justify="between"
        >
          <Box>
            <Heading level="3" margin="none" color="brand">
              {job.title}
            </Heading>
            <Text color="dark-5" size="small">
              {job.city}, {job.state}
            </Text>
          </Box>
        </Box>
        <Text size="small" color="dark-1" margin={{ vertical: 'small' }}>
          {job.description}
        </Text>
      </Box>
    </Box>
  );
};

JobCard.propTypes = {
  job: PropTypes.object,
  onNavigateToJobPage: PropTypes.func,
};

export default JobCard;
