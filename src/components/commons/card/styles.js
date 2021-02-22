import React from 'react';
import styled from 'styled-components';

export const SectionTitle = styled.section`
  height: 72px;
  margin-top: 20px;
  font-family: Fira Sans Condensed;
  font-size: 30px;
  line-height: 42px;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
`;

export const CardDefault = styled.div`
  background-color: gray;
  margin: 18px;
  max-height: 350px;
  border-radius: 5px;
  border: 1px solid #c1c1c1;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 5px;
  flex: 1 350px;
  transition: all 200ms linear;
  cursor: pointer;
  &:hover {
    transform: scale(0.98) translateY(-5px);
    box-shadow: 0 3px 25px rgba(0, 0, 0, 0.4);
    border-radius: 0;
  }
`;

export const CardTitle = styled.div`
  font-family: Fira Sans Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  text-transform: capitalize;
`;

export const CardImage = styled.div`
  flex-shrink: 1;
  img {
    max-width: 90%;
    max-height: 90%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

export const CardText = styled.div`
  font-family: Fira Sans Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 38px;
  text-align: center;
  text-transform: capitalize;
`;

export default CardDefault;
