import React from 'react';
import styled from 'styled-components';

const LogoName = styled.a`
  font-family: Fira Sans Condensed;
  font-size: 20px;
  background-color: #ff7256;
  color: #8b3e2f;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  transition: 0.3s;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export default function Logo() {
  return <LogoName>{'<GKM/>'}</LogoName>;
}
