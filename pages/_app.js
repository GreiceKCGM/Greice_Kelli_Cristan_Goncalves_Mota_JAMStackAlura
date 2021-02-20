import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/theme/globalStyle';
import theme from '../src/theme';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
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
