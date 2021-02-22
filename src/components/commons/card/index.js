import React from 'react';
import styled from 'styled-components';
import CardHighlighted, { CardTitle, CardTextHighlighted } from './highlighted';
// eslint-disable-next-line import/no-named-as-default
import CardDefault, { CardImage, CardTextDefault } from './styles';

function Card({ type = 'default', title, image, text, href, alt }) {
  const CardStyle = type === 'highlighted' ? CardHighlighted : CardDefault;
  const CardText =
    type === 'highlighted' ? CardTextHighlighted : CardTextDefault;

  return (
    <CardStyle>
      <CardImage>
        <a href={href}>
          <img src={image} alt={alt} />
        </a>
      </CardImage>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </CardStyle>
  );
}

export default Card;
