import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const CoverPrincipal = styled.div`
  font-family: 'Open Sans', sans-serif;
  background-color: #ff7256;
  background-position: center top;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${breakpointsMedia({
    xs: css`
      padding: 100px 0;
    `,
    md: css`
      padding: 18% 0;
    `,
    xl: css`
      height: 100vh;
      max-height: 100vh;
    `,
  })}
`;

export default CoverPrincipal;
