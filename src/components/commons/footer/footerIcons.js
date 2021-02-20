import styled from 'styled-components';

const FooterIcons = styled.div`
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    position: absolute;
    width: 224px;
    height: 68px;
    left: 608px;
    top: 2225px;

    background: #e9c46a;
    color: ${({ theme }) => theme.colors.primary.main.color};
    text-decoration: none;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }
`;

export default FooterIcons;
