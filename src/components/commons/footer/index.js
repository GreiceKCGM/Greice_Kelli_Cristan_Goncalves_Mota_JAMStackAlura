import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  position:absolute;
  width: 1440px;
  height: 68px;
  top: 1804px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px; 
  padding-right: 28px;
  padding-left: 28px;
  color: ${({ theme }) => theme.colors.primary.main.color};

  background: blue;
  
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
