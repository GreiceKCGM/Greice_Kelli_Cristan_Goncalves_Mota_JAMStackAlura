import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import { CardTitle, CardText, CardImage } from './styles';

const CardHighlighted = styled.div`
  /* max-width: auto; */
  height: auto;
  /* left: 270px;
  top: 1853px; */
  border-radius: 5px;
  border: 1px solid #c1c1c1;
  margin-top: 18px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  margin-bottom: 24px;

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
    transform: scale(0.98) translateY(-5px);
    box-shadow: 0 3px 25px rgba(0, 0, 0, 0.4);
    border-radius: 0;
  }

  ${CardImage} {
    img {
      position : relative;
      border: 1px solid;
      border-radius: 5px;
      /* height: 250px; */
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* width: 147px; */
    height: 31px;
    position: absolute;

    top: 20px;
    left: 32px;

    margin-top: 5px;
    margin-left: 4px;

    background: #ffffff;
    border: 1px solid #000000;
    box-sizing: border-box;
     ${breakpointsMedia({
    md: css`
      width: 228px;
      height: 48px;

      margin-top: 12px;
      margin-left: 12px;

    `,
      sm: css`
      /* font-size: 20px; */
          top: 20px;
    left: 42px;

  }
    `,
  })}
  }
`;

export default CardHighlighted;
