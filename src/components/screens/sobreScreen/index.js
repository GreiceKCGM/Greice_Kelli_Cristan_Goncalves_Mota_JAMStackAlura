import React from 'react';
import Button from '../../commons/button/button';
import Cover from '../../commons/cover';
import Contact from '../../commons/cover/contact';
import Footer from '../../commons/footer';
import Header from '../../commons/header';
import Modal from '../../commons/modal';
import Box from '../../foundations/layout/box';
import Grid from '../../foundations/layout/grid';
import Text from '../../foundations/text';
import FormCadastro from '../../patterns/formCadastro';

export default function SobreScreen() {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Cover />
      <Header />
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
      <Grid.Container>
        <Grid.Col
          textAlign="center"
        >
          <div>
            <Contact>
              <Text
                variant="title"
                tag="p"
                color="primary.main"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Entre em Contato
              </Text>
            </Contact>

            <Button
              variant="tertiary.light"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="flex"
              onClick={() => {
                setModalState(!isModalOpen);
              }}
            >
              +
            </Button>
          </div>
        </Grid.Col>

      </Grid.Container>
      <Footer />
    </Box>
  );
}
