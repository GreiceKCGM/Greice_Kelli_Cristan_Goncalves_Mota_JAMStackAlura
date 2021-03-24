/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../commons/footer';
import SEO from '../../commons/SEO';
import Box from '../../foundations/layout/box';
import Modal from '../../commons/modal';
import FormCadastro from '../../patterns/formCadastro';

export const WebsitePageContext = React.createContext({
  toggleModalCadastro: () => {},
});

export default function WebsitePageWrapper({
  children,
  seoProps,
}) {
  const [isModalOpen, setModalState] = React.useState(false);
  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro: () => {
          setModalState(!isModalOpen);
        },

      }}
    >
      <SEO
        {...seoProps}
      />
      <Box
        flex="1"
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setModalState(false);
          }}
        >
          {(propsDoModal) => (
            <FormCadastro propsDoModal={propsDoModal} />
          )}
        </Modal>
        { children }
        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
}
WebsitePageWrapper.propTypes = {
  children: PropTypes.node.isRequired,

};

WebsitePageWrapper.defaultProps = {
  seoProps: {},
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};
