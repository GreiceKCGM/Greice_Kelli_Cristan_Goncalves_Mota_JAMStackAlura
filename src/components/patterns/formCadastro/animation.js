import React from 'react';
import { Lottie } from '@crello/react-lottie';
import PropTypes from 'prop-types';
import Box from '../../foundations/layout/box';
import Text from '../../foundations/text';

// eslint-disable-next-line react/prop-types
export const FormAnimation = ({ message, animation }) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
  >
    <Lottie
      width="150px"
      height="150px"
      className="lottie"
      config={{ animationData: animation, loop: false, autoplay: true }}
    />
    <Text
      variant="titleXS"
      tag="p"
      color="tertiary.main"
      marginBottom="6px"
    >
      { message }
    </Text>
  </Box>
);

FormAnimation.propTypes = {
  message: PropTypes.string,
};

FormAnimation.defaultProps = {
  message: 'text',
};
