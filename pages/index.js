import React from 'react';
// import styled from 'styled-components';
import Cover from '../src/components/commons/cover';
import Footer from '../src/components/commons/footer';
import Header from '../src/components/commons/header';
import Projects from '../src/components/projects';
import Box from '../src/components/foundations/layout/box';
import Contact from '../src/components/commons/cover/contact';
import Text from '../src/components/foundations/text';

export default function Home() {
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
      <Projects />
      <Contact>
        <Text
          variant="title"
          tag="p"
          color="tertiary.light"
          textAlign={{
            xs: 'center',
            md: 'left',
          }}
        >
          Entre em Contato
        </Text>
      </Contact>

      <Footer />
    </Box>
  );
}
