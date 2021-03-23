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
    .then((responseAsObject) => responseAsObject.map((teste) => {
      const { name } = teste;
      const url = teste.html_url;
      return {
        name,
        url,
      };
    }));
  return {
    props: {
      gitHubRepository,

    },
  };
}
