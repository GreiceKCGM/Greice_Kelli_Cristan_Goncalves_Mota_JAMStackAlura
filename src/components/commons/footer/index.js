import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  position:absolute;
  width: 100vw;
  height: 5vh;
  top: 95vh; 
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #E9C46A;
  border-radius: 4px; 
  padding-right: 28px;
  padding-left: 28px;
  color: ${({ theme }) => theme.colors.primary.main.color};

  background: #FFF8E6;
  
  a {
    /* width: 15px;
    height: auto; */
    background: #000000;
    height: 19.75px;
width: 20.26px;
/* left: 5.86865234375px;
top: 5.86871337890625px; */
border-radius: 0px;

  }

`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://github.com/GreiceKCGM">
        <img src="../images/github.svg" alt="Github" />
      </a>
      {/* <spam> Greice Kelli</spam> */}
    </FooterWrapper>
  );
}
