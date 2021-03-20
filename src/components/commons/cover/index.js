import React from 'react';
import Text from '../../foundations/text';
import CoverPrincipal from './covStyled';

export default function Cover() {
  return (
    <CoverPrincipal>
      <Text
        variant="title"
        tag="h1"
        textAlign="center"
        color="background.main"
      >
        Greice Kelli C.G.Mota
      </Text>
      <Text
        variant="title"
        tag="h2"
        textAlign="center"
        color="background.main"
        marginTop="0"
      >
        Portifólio
      </Text>
    </CoverPrincipal>
  );
}
