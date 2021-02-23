import React from 'react';

import CardHighlighted from './highlighted';
// eslint-disable-next-line import/no-named-as-default
import CardDefault, { CardImage, CardText, CardTitle } from './styles';

function Card({ type = 'default', title, image, text, href, alt }) {
  const CardStyle = type === 'highlighted' ? CardHighlighted : CardDefault;

  return (
    <CardStyle>
      <CardTitle>{title}</CardTitle>
      <CardImage>
        <a href={href}>
          <img src={image} alt={alt} />
        </a>
      </CardImage>
      <CardText>{text}</CardText>
    </CardStyle>
  );
}

export default Card;
