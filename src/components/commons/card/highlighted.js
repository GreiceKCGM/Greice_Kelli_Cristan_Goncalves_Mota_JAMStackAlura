import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import { CardImage, CardText, CardTitle } from './styles';

export const CardTitleHighlighted = styled.div``;
export const CardTextHighlighted = styled.div``;

const CardHighlighted = styled.div`
  ul {
    /* max-width: 340px;
    height: auto;
     display: flex;
    flex-direction: column;
    justify-content: space-between; */
  }
  ${CardImage} {
  }
  a {
    /* width: auto;
    height: 100%;
    padding-top: 20px;
    text-decoration: none; */
  }

  img {
  }

  // eslint-disable-next-line no-undef
  ${CardText} {
  }

  ${CardTitle} {
  }
`;

export default CardHighlighted;
