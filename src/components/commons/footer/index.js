import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  position: absolute;
  width: 1440px;
  height: 68px;
  left: 0px;
  top: 2225px;
  background: #fff8e6;
  border-radius: 0px;
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.linkedin.com/in/greicekellicgm/">
        <img src="" alt="" />
      </a>
      <spam> Greice Kelli</spam>
    </FooterWrapper>
  );
}
