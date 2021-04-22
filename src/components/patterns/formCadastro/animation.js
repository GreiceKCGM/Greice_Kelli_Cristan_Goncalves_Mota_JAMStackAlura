import React from 'react';
import { Lottie } from '@crello/react-lottie';
import PropTypes from 'prop-types';
import Box from '../../foundations/layout/box';
import Text from '../../foundations/text';

import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';
import loadingAnimation from './animations/loading.json';

const animations = {
  DONE: {
    message: 'Mensagem enviada com sucesso!',
    animationData: successAnimation,
  },
  LOADING: {
    message: '...',
    animationData: loadingAnimation,
  },
  ERROR: {
    message: 'Mensagem não enviada, tente novamente!',
    animationData: errorAnimation,
  },
};

// eslint-disable-next-line react/prop-types
export const FormAnimation = ({ animationType }) => {
  const { animationData, message } = animations[animationType];

  return (
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
        config={{ animationData, loop: false, autoplay: true }}
      />
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.main"
        marginBottom="6px"
      >
        { message }
      </Text>
    </Box>
  );
};

FormAnimation.propTypes = {
  animationType: PropTypes.oneOf(['LOADING', 'ERROR', 'DONE']),
};

FormAnimation.defaultProps = {
  animationType: 'DONE',
};
