import React from 'react';
// import styled from 'styled-components';
import Cover from '../src/components/commons/cover';
import Footer from '../src/components/commons/footer';
import Header from '../src/components/commons/header';
import Projects from '../src/components/projects';
import Box from '../src/components/foundations/layout/box';
import Grid from '../src/components/foundations/layout/grid';

export default function Home() {
  return (
    <Box>
      <Cover />
      <Header />
      <Projects />
      <Footer />
    </Box>
  );
}
