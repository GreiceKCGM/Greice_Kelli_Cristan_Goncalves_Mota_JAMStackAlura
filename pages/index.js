import React from 'react';
// import styled from 'styled-components';
import Cover from '../src/components/commons/cover';
import Footer from '../src/components/commons/footer';
import Header from '../src/components/commons/header';
import WrapperProjects from '../src/components/projects/wrapper';
import Box from '../src/components/foundations/layout/box';
import Grid from '../src/components/foundations/layout/grid';

export default function Home() {
  return (
    <Box
      flex={1}
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Grid.Container>
        <Grid.Row>
          <Grid.Col>
            <Cover />
            <Header />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col>
            <WrapperProjects />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
      <Footer />
    </Box>
  );
}
