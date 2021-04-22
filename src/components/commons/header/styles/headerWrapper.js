import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import { TextStyleVariantsMap } from '../../../foundations/text';

const HeaderWrapper = styled.nav`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 28px;
  padding-right: 28px;
  background-color:${({ theme }) => theme.colors.secondary.main.color};
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.borders.main.color};
`;

HeaderWrapper.LeftSide = styled.div``;

HeaderWrapper.RightSide = styled.div`
  list-style: none;
  display: flex;
  li {
    &:first-child {
      margin-right: 20px;
    }
  }
  a {
    text-transform: uppercase;

    text-align: center;
    display: block;
    text-decoration: none;
    color: black;
    transition: 200ms ease-in-out;
    ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.paragraph2}
    `,
    md: css`
      ${TextStyleVariantsMap.paragraph1}
    `,
  })}
  &:hover,
  &:focus {
    font-weight: 500;
    color: #ec5e52;
  }
  }
`;

export default HeaderWrapper;
