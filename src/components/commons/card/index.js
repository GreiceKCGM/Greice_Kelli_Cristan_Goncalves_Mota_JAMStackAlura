import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../foundations/text';

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
      <CardText>
        {text}
      </CardText>
    </CardStyle>
  );
}

Card.propTypes = {
  type: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
  alt: PropTypes.string,

};
Card.defaultProps = {
  type: '',
  image: '',
  title: '',
  text: '',
  href: '',
  alt: '',
};

export default Card;
