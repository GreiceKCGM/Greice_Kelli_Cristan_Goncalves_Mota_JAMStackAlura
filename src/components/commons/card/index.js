import React from 'react';
import PropTypes from 'prop-types';

import CardHighlighted from './highlighted';
// eslint-disable-next-line import/no-named-as-default
import CardDefault, { CardImage, CardText, CardTitle } from './styles';
import Text from '../../foundations/text';

function Card({
  type = 'default', title, image, text, href, alt,
}) {
  const CardStyle = type === 'highlighted' ? CardHighlighted : CardDefault;

  return (
    <CardStyle>
      <CardImage>
        <a href={href}>
          <img src={image} alt={alt} />
        </a>
      </CardImage>
      {text ? (
        <CardText>
          <CardTitle>
            <Text
              // variant="titleXS"
              // tag="h2"
              textAlign="center"
              color="primary.main"
              marginTop="0"
            >
              {title}
            </Text>
          </CardTitle>
          {text}

        </CardText>
      )
        : (
          <CardTitle>
            <Text
              variant="titleXS"
              tag="h2"
              textAlign="center"
              color="primary.main"
              marginTop="0"
            >
              {title}
            </Text>
          </CardTitle>
        ) }
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
