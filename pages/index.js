import React from 'react';
import Box from '../src/components/foundations/layout/box';
import Grid from '../src/components/foundations/layout/grid';
import Contact from '../src/components/commons/cover/contact';
import Text from '../src/components/foundations/text';
import Button from '../src/components/commons/button/button';
import websitePageHOC from '../src/components/wrappers/hoc';
import { WebsitePageContext } from '../src/components/wrappers/WebsitePage';
import Cover from '../src/components/commons/cover';
import Projects from '../src/components/projects';
import Header from '../src/components/commons/header';

function HomeScreen() {
  const websitePageContext = React.useContext(WebsitePageContext);

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
                color="tertiary.main"
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
                websitePageContext.toggleModalCadastro();
              }}
            >
              +
            </Button>
          </div>
        </Grid.Col>

      </Grid.Container>
    </Box>
  );
}
export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
  },
});
