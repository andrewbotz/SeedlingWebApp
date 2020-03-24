import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

// Containers
import HomePage from 'containers/HomePage/Loadable';
import JobPage from 'containers/JobPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

// Components
import NavHeader from 'components/NavHeader';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  padding: 0;
  margin: 0;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Seedling" defaultTitle="Seedling">
        <meta name="description" content="A non-profit application" />
      </Helmet>
      <NavHeader />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/jobs/:id" component={JobPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
