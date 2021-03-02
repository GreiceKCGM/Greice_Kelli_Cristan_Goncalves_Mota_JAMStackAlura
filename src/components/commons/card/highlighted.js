import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import { CardTitle, CardText, CardImage } from './styles';

const CardTitleHighlighted = styled.div`

  font-family: Fira Sans Condensed;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border: 1px solid #e9c46a;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  flex-direction: column;

  /* width: 147px; */
  height: 31px;
  position: absolute;

  top: 15px;
  left: 10px;
  /* transform: translateY(-10px);
  transform: translateX(-40px); */
  box-sizing: border-box;
  z-index:1;
  background: #ffffff;
  border: 1px solid #000000;
`;

const CardHighlightedStyle = styled.div`

  height: auto;

  /* border-radius: 5px;
  border: 1px solid #e9c46a; */
  margin-top: 18px;
  /* box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4); */
  margin-bottom: 24px;
  transform: scale(1);

  ${breakpointsMedia({
    md: css`
      /* width: 100%; */
      /* max-width: 1040px; */
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;

    `,
  })}
  &:hover {
    transform: scale(0.98) translateY(-10px);
    box-shadow: 0 3px 25px rgba(0, 0, 0, 0.4);
    border-radius: 0;
  }

  ${CardImage} {
    height: auto;
    img {
      position : relative;
      width:auto;
      border: 1px solid #e9c46a;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
      border-radius: 5px;

    }
    ${breakpointsMedia({
    xs: css`

      width: 289px;
      height: 177px;
      img {
        width: 289px;
        height: 177px;
      }
    `,
    md: css`
      margin-top: 5px;
      margin-right: 0;
      width: 593px;
      height: 320px;
      img {
        width: 593px;
        height: 320px;
      }
    `,
  })}
  }

  // eslint-disable-next-line no-undef
  ${CardText} {
    border: 1px solid #e9c46a;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    justify-content: flex-start;
    /* display: flex; */
    /* flex: 2;
    padding: 10px;
    display: none; */
    /* display: block; */
    ${breakpointsMedia({
    xs: css`
      display: flex;
      align-items: center;

      width: 289px;
      height: 72px;
    `,
    sm: css`
      display:none;

    `,
    md: css`
      margin-top: 21px;
      margin-left: 0;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      p {
        margin-top: 30px;
        margin-left: 30px;
        margin-right: 26px;
        margin-bottom: 82px;
      }
      h6 {
        margin-top: 28px;
        margin-left: 30px;
        margin-right: 170px;
        margin-bottom: 30px;

      }
      width: 307px;
      height: 310px;
    `,

  })}
  }

  ${CardTitle} {
    flex-direction: column;
    margin-bottom: 2vh;
  }
`;

// eslint-disable-next-line react/prop-types
function CardHighlighted({ children }) {
  return (
    <CardHighlightedStyle>
      <CardTitleHighlighted>DESTAQUES</CardTitleHighlighted>
      {children}
    </CardHighlightedStyle>
  );
}

export default CardHighlighted;
