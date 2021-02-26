import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../foundations/text';

import CardHighlighted from './highlighted';
// eslint-disable-next-line import/no-named-as-default
import CardDefault, { CardImage, CardText, CardTitle } from './styles';

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
        <CardTitle>{title}</CardTitle>
      </CardImage>
      <CardText>
        <Text
          variant="paragraph1"
          tag="p"
          color="tertiary.light"
          textAlign={{
            xs: 'center',
            md: 'left',
          }}
        >
          {text}
        </Text>
      </CardText>
    </CardStyle>
  );
}
Card.propTypes = {
  // eslint-disable-next-line react/require-default-props
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  href: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  alt: PropTypes.string,

};

export default Card;
