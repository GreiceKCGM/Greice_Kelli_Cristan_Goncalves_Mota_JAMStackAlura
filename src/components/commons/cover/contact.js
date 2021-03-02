import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const Contact = styled.div`
  position: relative;
/* width: 252px;
height: 43px;
left: 594px;
top: 2214px; */
display:flex;
align-items: center;
justify-content:center;
cursor:pointer;
margin-bottom:18px;
transition: 200ms ease-in-out;
color: ${({ theme }) => theme.colors.primary.main.color};

font-family: Fira Sans Condensed;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 43px;

color: #000000;
${breakpointsMedia({
    xs: css`
      font-size:${({ theme }) => theme.typographyVariants.titleXS.fontSize}
    `,
    md: css`
      font-size:${({ theme }) => theme.typographyVariants.title.fontSize};
    `,
  })}
  &:hover,
  &:focus {

    color: #ec5e52;
  }
`;
export default Contact;
