import React from 'react';
import Cover from '../src/components/commons/cover';
import Footer from '../src/components/commons/footer';
import Header from '../src/components/commons/header';
import Projects from '../src/components/projects';
import Box from '../src/components/foundations/layout/box';
import Grid from '../src/components/foundations/layout/grid';
import Contact from '../src/components/commons/cover/contact';
import Text from '../src/components/foundations/text';
import Button from '../src/components/commons/button/button';

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
      <Grid.Container>
        <Grid.Col
          textAlign="center"
        >
          <div>
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

            <Button
              variant="primary.main"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="flex"
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
