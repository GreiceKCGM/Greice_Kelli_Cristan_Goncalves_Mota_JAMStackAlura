import React from 'react';
import Text from '../../foundations/text';
import CoverPrincipal from './covStyled';

export default function Cover() {
  return (
    <CoverPrincipal>
      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
        // textAlign={{
        //   xs: 'center',
        //   md: 'left',
        // }}
      >
        Greice Kelli C.G.Mota
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        // textAlign={{
        //   xs: 'center',
        //   md: 'left',
        // }}
      >
        Portifólio Front End
      </Text>
    </CoverPrincipal>
  );
}
