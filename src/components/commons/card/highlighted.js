import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
// import Text from '../../foundations/text';
import { CardTitle, CardText, CardImage } from './styles';

// const CardTitleHighlighted = styled.div`

//   font-family: Fira Sans Condensed;
//   font-weight: bold;
//   font-size: 24px;
//   text-align: center;
//   align-items: center;
//   height: 50px;
//   border: 1px solid ${({ theme }) => theme.colors.borders.main.color};
//   box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
//   border-radius: 5px;
//   flex-direction: column;
//   height: 31px;
//   position: absolute;
//   top: 15px;
//   left: 10px;
//   box-sizing: border-box;
//   z-index:1;
//   background: #ffffff;
//   ${breakpointsMedia({
//     md: css`
//     `,
//     xs: css`
//       left: 100px;

//     `,
//   })}

// `;

const CardHighlightedStyle = styled.div`

  /* width: auto; */
  flex: 1;
  min-width: 100%;
  max-width: 100%;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  margin-top: 18px;
  margin-bottom: 24px;
  transform: scale(1);


  ${breakpointsMedia({
    md: css`
      /* min-width: 33.3%; */
      align-items: center;
      justify-content: center;
      flex-direction: row;

    `,
    xs: css`
      align-items: center;

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
      border: 1px solid ${({ theme }) => theme.colors.borders.main.color};
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
    width:100%;
    border: 1px solid ${({ theme }) => theme.colors.borders.main.color};
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    padding:1px;
    margin-top: 1px;
    border-radius: 5px;
    justify-content: flex-start;
    ${breakpointsMedia({
    xs: css`
      display: flex;
      align-items: center;

      width: 289px;
      height: 72px;
    `,
    sm: css`
      /* display:none; */
      /* order: 1; */


    `,
    md: css`
      margin-top: 1px;
      margin-left: 0;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      /*  */
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
      {/* <CardTitleHighlighted>
        <Text
          textAlign="center"
          color="tertiary.main"
          marginTop="0"
        >
          DESTAQUES
        </Text>
      </CardTitleHighlighted> */}
      {children}
    </CardHighlightedStyle>
  );
}

export default CardHighlighted;
