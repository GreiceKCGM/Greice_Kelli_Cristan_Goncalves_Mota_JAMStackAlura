import styled from 'styled-components';

const FooterIcons = styled.div`
  img {
    width: 18px;
    margin-right: 18px;
  }
  a {
      
      position: absolute;
      transition: 0.3s;
      &:hover,
      &:focus {
        opacity: 0.5;
      }
  }
`;

export default FooterIcons;
