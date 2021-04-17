import React from 'react';
import Box from '../../foundations/layout/box';
import FormContent from './formContent';

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ propsDoModal }) {
  return (

    <Box
      boxShadow="0px 1px 25px 5px rgba(0, 0, 0, 0.1)"
      borderRadius="10px 10px 0px 0px"
      flexDirection="column"
      justifyContent="center"
      flex={1}
      padding={{
        xs: '16px',
        md: '21px',
      }}
      backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
      {...propsDoModal}
    >
      {/* <Box textAlign="right">{modalPropsButtonClose}</Box> */}
      <FormContent />
    </Box>
  );
}
