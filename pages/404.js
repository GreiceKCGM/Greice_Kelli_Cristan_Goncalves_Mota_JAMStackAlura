import React from 'react';
import ErrorScreen from '../src/components/screens/errorScreen';
import websitePageHOC from '../src/components/wrappers/hoc';

function ErrorPage() {
  return (
    <ErrorScreen />
  );
}
export default websitePageHOC(ErrorPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Página 404',
    },
    headerProps: {
      display: true,
    },
  },
});
