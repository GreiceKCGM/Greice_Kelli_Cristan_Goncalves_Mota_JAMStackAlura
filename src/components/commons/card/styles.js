import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

export const SectionTitle = styled.section`
  height: 72px;
  margin-top: 20px;
  font-family: Fira Sans Condensed;
  font-size: 30px;
  line-height: 42px;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
`;

export const CardDefault = styled.div`
  background-color: gray;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 18px;
  /* max-height: 350px; */
  border-radius: 5px;
  border: 1px solid #c1c1c1;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  &:hover {
    transform: scale(0.98) translateY(-5px);
    box-shadow: 0 3px 25px rgba(0, 0, 0, 0.4);
    border-radius: 0;
  }
`;

export const CardTitleDefault = styled.div`
  position: absolute;
  font-family: Fira Sans Condensed;
  font-weight: bold;
  font-size: 32px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100%;
    width: inherit;

    /* max-width: 90%;
    max-height: 90%; */
    object-fit: cover;
    border-radius: 5px;
  }
`;

export const CardTextDefault = styled.div`
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  ${breakpointsMedia({
    md: css`
      height: 110px;
    `,
  })}
  h2 {
    ${breakpointsMedia({
    md: css`
      font-size: 24px;
    `,
  })}
  }
`;

export default CardDefault;
