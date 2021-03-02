import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import { TextStyleVariants } from '../../foundations/text';

const Button = styled.button`
    ${TextStyleVariants.title}
    margin-bottom: 10px;
    background-color:white;
    border: 1px solid ${({ theme }) => theme.colors.secondary.main.color};
    position:relative;
    cursor: pointer;
    padding: 4px 10px;
    box-sizing: border-box;
    font-weight: bold;
    border-radius: 100%;
    transition: opacity ${({ theme }) => theme.transition};
    &:hover,
    &:focus {
      opacity: .5;
    }

    ${breakpointsMedia({
    xs: css`
        /*All devices*/
        ${TextStyleVariants.title}
    `,
    md: css`
        /* From md breakpoint*/
        /* ${TextStyleVariants.paragraph1} */
    `,
  })}

  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }

`;

export default Button;
