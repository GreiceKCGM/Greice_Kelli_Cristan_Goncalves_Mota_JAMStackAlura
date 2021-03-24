import React from 'react';
import websitePageHOC from '../src/components/wrappers/hoc';

function ErrorPage() {
  return (
    <div>
      Página 404
    </div>
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
