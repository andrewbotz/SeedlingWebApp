import React from 'react';
import { Anchor, Box, Text, ResponsiveContext } from 'grommet';
// import { Logo } from '../Logo';
import { SocialMedia } from '../SocialMedia';

const NavHeader = () => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box
        direction="row"
        justify="between"
        alignSelf="center"
        gap="medium"
        pad={{ top: 'large', horizontal: 'xlarge' }}
      >
        <Anchor
          href="/"
          // icon={<Logo />}
          color="primary"
          label={
            size !== 'xsmall' &&
            size !== 'small' && <Text size="large">Seedling</Text>
          }
        />
        <SocialMedia />
      </Box>
    )}
  </ResponsiveContext.Consumer>
);

export default NavHeader;

export { NavHeader };
