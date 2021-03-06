import React from 'react';
import Text from '../../foundations/text';
import HeaderWrapper from './styles/headerWrapper';
import Logo from './styles/logo';

const links = [
  {
    texto: 'Sobre Mim',
    url: '/sobre',
  },
  {
    texto: 'Contato',
    url: '/contato',
  },
];

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderWrapper.LeftSide>
        <Logo />
      </HeaderWrapper.LeftSide>
      <HeaderWrapper.RightSide
        as="ul"
      >
        {links.map((link) => (
          <li key={link.url}>
            <Text variant="paragraph1" tag="a" href={link.url}>
              {link.texto}
            </Text>
          </li>
        ))}
      </HeaderWrapper.RightSide>
    </HeaderWrapper>
  );
}
