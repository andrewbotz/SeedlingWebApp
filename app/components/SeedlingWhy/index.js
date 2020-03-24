import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Box, Heading, Paragraph } from 'grommet';

export const StyledHeading = styled(Heading)`
  font-weight: 200;
`;

const SeedlingWhy = ({ size, ...props }) => (
  <Fragment>
    <Box direction="row" {...props}>
      <StyledHeading size={size}>Seedling</StyledHeading>
    </Box>
    <Paragraph margin={{ top: 'none' }} textAlign="center" size="xxlarge">
      Seedling helps non-profit organizations by posting help wanted for
      developers and designers for <b>free</b>. From a quick chat to guide you
      where you need to go or helping you build a landing page for your
      non-profit; We&apos;re here to help.
    </Paragraph>
  </Fragment>
);

SeedlingWhy.propTypes = {
  size: PropTypes.string,
};

export default SeedlingWhy;
