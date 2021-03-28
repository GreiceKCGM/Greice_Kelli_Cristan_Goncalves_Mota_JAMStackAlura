import React from 'react';
import styled from 'styled-components';
import FooterIcons from './footerIcons';

const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.borders.main.color};
  background: ${({ theme }) => theme.colors.secondary.main.color};

  /* background: #fff8e6; */
  /* bbcbce */
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <FooterIcons>
        <a href="https://github.com/GreiceKCGM">
          <img src="/images/github.svg" alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/greicekellicgm/">
          <img src="/images/linkedin.svg" alt="Linkedin" />
        </a>
      </FooterIcons>
    </FooterWrapper>
  );
}
