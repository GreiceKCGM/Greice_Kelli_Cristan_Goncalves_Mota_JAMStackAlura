import React from 'react';

import CardHighlighted, {
  CardTitleHighlighted,
  CardTextHighlighted,
} from './highlighted';
// eslint-disable-next-line import/no-named-as-default
import CardDefault, {
  CardImage,
  CardTextDefault,
  CardTitleDefault,
} from './styles';

function Card({ type = 'default', title, image, text, href, alt }) {
  const CardStyle = type === 'highlighted' ? CardHighlighted : CardDefault;
  const CardText =
    type === 'highlighted' ? CardTextHighlighted : CardTextDefault;
  const CardTitle =
    type === 'highlighted' ? CardTitleHighlighted : CardTitleDefault;

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
