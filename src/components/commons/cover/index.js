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
        color="primary.main"
        marginBottom="0"
      >
        Greice Kelli
        <Text variant="titleBold" tag="span">
          C.G.Mota
        </Text>
      </Text>
      <Text
        variant="titleXS"
        tag="h2"
        textAlign="center"
        color="primary.main"
        marginTop="0"
      >
        Front-end Developer
      </Text>
    </CoverPrincipal>
  );
}
