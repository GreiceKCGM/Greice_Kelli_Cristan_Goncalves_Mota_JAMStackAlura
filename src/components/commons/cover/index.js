import React from 'react';
import Text from '../../foundations/text';
import CoverPrincipal from './covStyled';

export default function Cover() {
  return (
    <CoverPrincipal>
      <Text
        variant="paragraph1"
        tag="h1"
        textAlign="center"
        color="primary.main"
      >
        Greice Kelli
        <Text variant="title" tag="span">
          C.G.Mota
        </Text>
      </Text>
      <Text
        variant="title"
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
