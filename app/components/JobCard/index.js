import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Box, Heading, Text } from 'grommet';

const JobCard = props => {
  const { job, onNavigateToJobPage } = props;
  return (
    <Box
      round="xxsmall"
      elevation="medium"
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
            <Heading level="3" color="brand">
              {job.organization.name}
            </Heading>
            <Heading
              level="4"
              color="dark-2"
              style={{ marginTop: 0, marginBottom: 0 }}
            >
              {job.title}
            </Heading>
            <Text color="dark-5" size="small" margin={{ top: 'none' }}>
              {job.city}, {job.state} &#8226; {moment(job.datePosted).fromNow()}
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
