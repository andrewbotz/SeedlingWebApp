import React from 'react';
import PropTypes from 'prop-types';

import { Box, Heading, Paragraph } from 'grommet';

const JobDescriptionSection = ({ title, content }) => (
  <Box>
    <Heading level="4">{title}</Heading>
    <Paragraph fill>{content}</Paragraph>
  </Box>
);

JobDescriptionSection.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default JobDescriptionSection;
