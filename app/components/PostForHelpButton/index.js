import React from 'react';

import { Box, Button } from 'grommet';

const PostForHelpButton = props => (
  <Box align="center" pad="medium">
    <Button
      primary
      label="Post for Help"
      size="large"
      // color="accent-1"
      onClick={() => {}}
      {...props}
    />
  </Box>
);

export default PostForHelpButton;
