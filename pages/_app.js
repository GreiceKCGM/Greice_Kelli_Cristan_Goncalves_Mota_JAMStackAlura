import React from 'react';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component
          // eslint-disable-next-line react/jsx-props-no-spreading
        {...pageProps}
      />

    </>
  );
}
