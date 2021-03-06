import styled from 'styled-components';

const FooterIcons = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.primary.main.color};

  img {
    /* margin-right: 26px; */
    background: #000000;
    border-radius: 0px;
    height: 19.75px;
    width: 20.26px;
  }
  a {
    /* background: red; */
    height: 19.75px;
    width: 20.26px;
    margin: 8px;
    /* padding-bottom: 18px; */
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }
`;

export default FooterIcons;
