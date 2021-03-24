import React from 'react';
import SobreScreen from '../src/components/screens/sobreScreen';
import websitePageHOC from '../src/components/wrappers/hoc';

function SobrePage({ gitHubRepository }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <SobreScreen gitHubRepository={gitHubRepository} />
  );
}
SobrePage.propTypes = SobreScreen.propTypes;

export default websitePageHOC(SobrePage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre Mim',
    },
  },
});

export async function getStaticProps() {
  const gitHubRepository = await fetch('https://api.github.com/users/GreiceKCGM/repos')
    .then((res) => res.json())
    // eslint-disable-next-line camelcase
    .then((responseAsObject) => responseAsObject.map(({ name, html_url }) => ({
      name,
      url: html_url,
    })));
  return {
    props: {
      gitHubRepository,

    },
  };
}
