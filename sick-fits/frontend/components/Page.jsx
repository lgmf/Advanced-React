import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  boxShadow: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Main = styled.main`
  max-width: ${props => props.theme.maxWidth};
  background: ${props => props.theme.red};
  margin: 0 auto;
  padding: 2rem;
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Main>{this.props.children}</Main>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
