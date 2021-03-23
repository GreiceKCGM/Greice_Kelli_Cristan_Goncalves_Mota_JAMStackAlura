/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../commons/button/button';
import Footer from '../../commons/footer';
import Header from '../../commons/header';
import Box from '../../foundations/layout/box';
import Grid from '../../foundations/layout/grid';
import Text from '../../foundations/text';

export default function SobreScreen({ gitHubRepository }) {
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
        <Grid.Row>
          <Grid.Col
            textAlign="center"
            justifyContent="center"
            flexDirection="column"
          >
            <img
              alt="Imagem avatar GitHub"
              src="https://avatars.githubusercontent.com/u/51801614"
              loading="lazy"
              style={{ maxWidth: '200px', borderRadius: '100%' }}
            />
          </Grid.Col>
        </Grid.Row>
        <Grid.Col
          textAlign="center"
        >
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
          <Grid.Row
            as="ul"
            padding="0"
            listStyle="none"
          >
            <Grid.Col
              flexDirection="column"
              size={{ xs: 12, md: 6, lg: 4 }}
            >
                {gitHubRepository.map((repository) => (
                  <Box
                    key={repository.nome}
                    tag="li"
                    listStyle="none"
                    marginBottom="32px"
                  >
                    <Text
                      as="p"
                      margin="0"
                      variant="paragraph1"
                      fontWeight="700"
                      color="tertiary.main"
                    >
                      {repository.nome}

                    </Text>

                    <Box
                      tag="a"
                      href={repository.url}
                      textDecoration="none"
                    >
                      <Text>
                        {repository.url}
                      </Text>

                    </Box>
                  </Box>
                ))}

            </Grid.Col>
          </Grid.Row>

        </Grid.Col>

      </Grid.Container>
      <Footer />
    </Box>
  );
}
SobreScreen.propTypes = {
  gitHubRepository: PropTypes.arrayOf(PropTypes.shape({
    nome: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,

};

// eslint-disable-next-line no-lone-blocks
{ /* <ul>
            { gitHubData.map( ({title, url}) => (
              <li>
                <Repositorio key={url}
                  title={title}
                  url={url}
                ></Repositorio>
              </li>
            )) }
          </ul>
        </Grid.Col>

      </Grid.Container>
      <Footer />
    </Box>
  );
}

function Repositorio({title,url}) {
  return(
    <li>
      <Text>{title}</Text>
      <Text>{url}</Text>
    </li>
  );
}

const gitHubData = [
  { title: 'Projeto Report', url: 'Link'},
  { title: 'Projeto Report', url: 'Link'},
  { title: 'Projeto Report', url: 'Link'},
]; */ }
