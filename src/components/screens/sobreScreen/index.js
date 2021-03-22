/* eslint-disable max-len */
import React from 'react';
import Button from '../../commons/button/button';
import Footer from '../../commons/footer';
import Header from '../../commons/header';
import Box from '../../foundations/layout/box';
import Grid from '../../foundations/layout/grid';
import Text from '../../foundations/text';

export default function SobreScreen() {
  return (
    <Box
      flex="1"
      display="flex"
      flexDirection="column"
    >
      <Header />
      <Text
        variant="title"
        tag="h2"
        color="tertiary.main"
        textAlign="center"
      >
        SOBRE MIM
      </Text>
      <Grid.Container>
        <Grid.Col
          textAlign="center"
        >
          <div>
            Imagem

          </div>
          <div>
            <Button
              variant="tertiary.light"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="flex"
              onClick={() => {
              }}
            >
              +
            </Button>
          </div>
          <Grid.Row justifyContent="center">

            <Grid.Col
              value={{ xs: 8, md: 4 }}
              size={{ xs: 12, md: 4, lg: 2 }}
              marginTop="16px"
              textAlign="left"
            >
              <Text
                variant="paragraph1"
                tag="p"
                color="tertiary.main"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at imperdiet urna. Nunc lacinia justo sed augue rutrum cursus. Sed venenatis sem in felis efficitur imperdiet. Etiam dignissim neque vel facilisis facilisis. Morbi vel ligula eros. Nulla dictum porta ante, in luctus nulla dapibus quis. Mauris ipsum arcu, dignissim a felis non, eleifend congue ante.
              </Text>
            </Grid.Col>
            <Grid.Col
              marginTop="16px"
              size={{ xs: 12, md: 4, lg: 2 }}
              value={{ xs: 8, md: 4 }}
              textAlign="right"
              display="flex"
            >
              <Text
                variant="paragraph1"
                tag="p"
                color="tertiary.main"
                textAlign={{
                  xs: 'left',
                  sm: 'left',
                  md: 'right',
                }}
              >
                Fusce vitae ante ut sapien posuere elementum non sit amet purus. Integer vulputate pharetra tincidunt. Maecenas quis rutrum urna. Sed egestas tortor risus, vitae pretium diam varius eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi eu arcu augue.
              </Text>
            </Grid.Col>
          </Grid.Row>
          <Text
            variant="title"
            tag="h2"
            color="tertiary.main"
            textAlign="center"
          >
            MEUS REPOSITÓRIOS
          </Text>
          <ul>
            <li>
              <Text>Projeto Report</Text>
              <Text>Link</Text>
            </li>
            <li>
              <Text>Projeto Report</Text>
              <Text>Link</Text>
            </li>
            <li>
              <Text>Projeto Report</Text>
              <Text>Link</Text>
            </li>
          </ul>
        </Grid.Col>

      </Grid.Container>
      <Footer />
    </Box>
  );
}
