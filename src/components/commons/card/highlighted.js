import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import { CardTitle, CardText, CardImage } from './styles';

// export const CardTitleHighlighted = styled.div`
//   display: flex;
//   justify-content: center;
// `;
// export const CardTextHighlighted = styled.div`
//   background: yellow;
//   flex: 2;
//   padding: 10px;
//   display: none;
//   ${breakpointsMedia({
//     md: css`
//       display: flex;
//     `,
//   })}
// `;

const CardHighlighted = styled.div`
  max-width: auto;
  height: auto;
  left: 270px;
  top: 1853px;
  border-radius: 5px;
  border: 1px solid #c1c1c1;
  margin-top: 18px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  margin-bottom: 24px;

  ${breakpointsMedia({
    md: css`
      display: flex;
      align-items: center;
    `,
  })}
  &:hover {
    transform: scale(0.98) translateY(-5px);
    box-shadow: 0 3px 25px rgba(0, 0, 0, 0.4);
    border-radius: 0;
  }
  ${CardImage} {
    width: 100%;
    height: 100%;
    border: 1px solid;
  }

  img {
    height: 100%;
    width: inherit;
    /* max-width: 100%;
    object-fit: cover; */
    border-radius: 5px;
    /* height: 250px; */
  }

  // eslint-disable-next-line no-undef
  ${CardText} {
    background: yellow;
    /* flex: 2;
    padding: 10px;
    display: none; */
    display: block;
    ${breakpointsMedia({
      md: css`
        display: flex;
      `,
    })}
  }

  ${CardTitle} {
    background-color: green;
    position: relative;
    bottom: 0;
    margin-top: 10px;
    ${breakpointsMedia({
      md: css`
        flex: 1;
        padding: 10px;
        align-items: center;
        justify-content: center;
      `,
    })}
    h2 {
      ${breakpointsMedia({
        md: css`
          font-size: 24px;
        `,
      })}
    }
  }
`;

export default CardHighlighted;
