import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/theme/globalStyle';
import theme from '../src/theme';
import SEO from '../src/components/commons/SEO';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <SEO headTitle="Home" />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...pageProps}
        />
      </ThemeProvider>
    </>
  );
}
