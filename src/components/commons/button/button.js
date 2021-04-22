import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle/propToStyled';
import { TextStyleVariantsMap } from '../../foundations/text';

export const ButtonClose = styled.button`
  margin-top: 15px;

  img{
    ${TextStyleVariantsMap.title}
      width: 30px;
      height: 30px;
      border-radius: 50px;
      margin-top: 5px;



  position:relative;
  cursor: pointer;
  &:hover,
    &:focus {
      opacity: .5;
    }

    ${breakpointsMedia({
    xs: css`

        ${TextStyleVariantsMap.paragraph1}
    `,
    md: css`

        ${TextStyleVariantsMap.title}
    `,
  })}

  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }
}
`;

const Button = styled.button`
    ${TextStyleVariantsMap.title}
    margin-bottom:10px;
    height: 40PX;
    /* line-height: 40px; */
    width: 40PX;
    font-size: 1em;
    background-color:white;
    color: black;
    border: 1px solid ${({ theme }) => theme.colors.borders.main.color};
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

        ${TextStyleVariantsMap.title}
    `,
    md: css`

        /* ${TextStyleVariantsMap.paragraph1} */
    `,
  })}

  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }

`;

export const ButtonWrapper = styled.button`
    width: 200px;
    height: 48px;
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;
    background-color:${({ theme }) => theme.colors.secondary.main.color};

    transition: opacity ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};

    &:hover,
    &:focus {
      opacity: .5;
    }

    ${breakpointsMedia({
    xs: css`
        /*All devices*/
        ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
        /* From md breakpoint*/
        ${TextStyleVariantsMap.paragraph1}
    `,
  })}

  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }
  ${({ fullWidth }) => fullWidth && css`
  width: 100%
  `};

    ${propToStyle('margin')}
    ${propToStyle('display')}


`;

export default Button;
