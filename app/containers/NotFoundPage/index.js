/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';

export default function NotFound() {
  return (
    <article>
      <Box align="center" pad="large">
        <Heading>Not Found</Heading>
        <Paragraph textAlign="center" size="xxlarge">
          Oops. Something went wrong.
        </Paragraph>
      </Box>
    </article>
  );
}
