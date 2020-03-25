import React from 'react';
import PropTypes from 'prop-types';

import { Box, Button } from 'grommet';

const ApplyNowButton = ({ buttonSize = 'large', onApplyNowClicked }) => (
  <Box align="center" pad="medium">
    <Button
      primary
      label="Apply Now"
      onClick={onApplyNowClicked}
      color="neutral-1"
      size={buttonSize}
    />
  </Box>
);

ApplyNowButton.propTypes = {
  buttonSize: PropTypes.string,
  onApplyNowClicked: PropTypes.func,
};

export default ApplyNowButton;
