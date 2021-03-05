import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import { TextStyleVariants } from '../../foundations/text';

const Button = styled.button`
    ${TextStyleVariants.title}
    margin-bottom:10px;
    height: 40px;
    line-height: 40px;
    width: 40px;
    font-size: 1em;
    background-color:white;
    color: black;
    border: 1px solid ${({ theme }) => theme.colors.secondary.main.color};
    position:relative;
    cursor: pointer;
    /* padding: 6px 6px 6px 6px; */
    box-sizing: border-box;
    font-weight: bold;
    border-radius: 50%;
    text-align: center;
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
