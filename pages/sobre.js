import React from 'react';
import SobreScreen from '../src/components/screens/sobreScreen';

export default function SobrePage({ gitHubRepository }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <SobreScreen gitHubRepository={gitHubRepository} />
  );
}
SobrePage.propTypes = SobreScreen.propTypes;

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
