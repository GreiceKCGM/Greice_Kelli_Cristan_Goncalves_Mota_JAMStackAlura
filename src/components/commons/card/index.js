import React from 'react';
import PropTypes from 'prop-types';

import CardHighlighted from './highlighted';
// eslint-disable-next-line import/no-named-as-default
import CardDefault, { CardImage, CardText, CardTitle } from './styles';

function Card({ type = 'default', title, image, text, href, alt }) {
  const CardStyle = type === 'highlighted' ? CardHighlighted : CardDefault;

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

Card.propTypes = {
  type: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,

};

export default Card;
