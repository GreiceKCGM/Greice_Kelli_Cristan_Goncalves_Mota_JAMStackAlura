import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, css } from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../button/button';
import Box from '../../foundations/layout/box';
import Grid from '../../foundations/layout/grid';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: scroll;
  transition: 0.3s;
  z-index: 100;
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;
const LockScroll = createGlobalStyle`
body {
  overflow: hidden;
}

`;

function Modal({ isOpen, onClose, children }) {
  const buttonClose = (event) => {
    const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
    if (!isSafeArea) {
      onClose();
    }
  };
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
        if (!isSafeArea) {
          onClose();
        }
      }}
    >
      {isOpen && <LockScroll />}
      <motion.div
        variants={{
          open: {
            y: 0,
          },
          closed: {
            y: '100%', // quanto maior para sair da tela
          },
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          duration: 0.5,
        }}
        style={{
          display: 'flex',
          flex: 1,
        }}
      >
        <Grid.Row
          marginLeft={0}
          marginRight={0}
          flex={1}
          maxWidth="auto"
          justifyContent="center"
          paddingLeft="50px"
          paddingRight="50px"
          alignContent="flex-end"
        >
          <Grid.Col
            display="flex"
            paddingRight="16px 16px 48px"
            flexDirection="column"
            value={{ xs: 12, md: 8, lg: 6 }}
          >
            <Box
              height="10px"
              paddingRight="5px"
              alignSelf="flex-end"
            >

              <Button
                style={{
                  width: 40,
                  height: 40,
                  color: 'black',
                  borderRadius: 40,
                  marginTop: 15,
                }}
                cursor="pointer"
                onClick={(event) => {
                  buttonClose(event);
                }}
              >
                X
              </Button>
            </Box>
            { children({ 'data-modal-safe-area': 'true' }) }

          </Grid.Col>
        </Grid.Row>

      </motion.div>

    </ModalWrapper>
  );
}
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
