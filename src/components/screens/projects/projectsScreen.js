import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styled from 'styled-components';
import Box from '../../foundations/layout/box';
import Grid from '../../foundations/layout/grid';
import Text from '../../foundations/text';

const ProjectCardWrapper = styled.div`
  background-color: red;
  border: black 2px solid;
  position: relative;
  width: 20vw;
`;

function ProjectsScreen({
  image, title, description, href, ...props
}) {
  return (
    <Box
      flex="1"
      display="flex"
      flexDirection="column"
    >
      <Grid.Container style={{ flex: 1 }}>
        <ProjectCardWrapper>
          <Text
            variant="title"
            tag="h2"
            color="tertiary.main"
            textAlign="center"
          >
            {title}
          </Text>
          <Grid.Row >
            <Grid.Col>
              <Image
                src={image}
                alt="texto alternativo"
                width="500"
                height="500"
              />
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col>
              <Text
                variant="title"
                tag="h2"
                color="tertiary.main"
                textAlign="center"
              >
                {description}
              </Text>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col>
              <Text
                variant="paragrafy"
                tag="p"
                color="tertiary.main"
                textAlign="center"
              >
                Visite o site
              </Text>
              <Text
                tag="a"
                margin="0"
                variant="paragraph1"
                color="tertiary.main"
                href={href}
              >
                {href}
              </Text>
            </Grid.Col>
          </Grid.Row>
        </ProjectCardWrapper>
      </Grid.Container>
    </Box>
  );
}

export default ProjectsScreen;

ProjectsScreen.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
