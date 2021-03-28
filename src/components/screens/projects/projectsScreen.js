import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '../../foundations/layout/box';
import Grid from '../../foundations/layout/grid';
import Text from '../../foundations/text';

const ProjectImgWrapper = styled.img`
  border: black 2px solid;
  position: relative;
  /* width: 20vw; */
`;

function ProjectsScreen({
  image, title, description, href,
}) {
  return (
    <Box
      flex="1"
      display="flex"
      flexDirection="column"
    >
      <Grid.Container flex={1}>
        <Text
          variant="title"
          tag="h2"
          color="tertiary.main"
          textAlign="center"
        >
          {title}
        </Text>
        <Grid.Row>
          <Grid.Col
            flexDirection="column"
            size={{ xs: 12, md: 4 }}
            marginTop="16px"
            width="100%"
          >
            <ProjectImgWrapper
              src={image}
              alt="texto alternativo"
              width="400"
              height="400"
            />
          </Grid.Col>

          <Grid.Col>
            <Text
              variant="paragraph1"
              tag="p"
              color="black"
              textAlign="left"
              marginBottom="32px"
            >
              {description}
            </Text>
            <Box>

              <Text
                variant="paragraph1"
                tag="p"
                color="tertiary.main"
                textAlign="left"
                marginBottom="8px"
              >
                Visite o site
              </Text>
              <Text
                tag="a"
                variant="paragraph2"
                color="tertiary.main"
                href={href}
                marginBottom="16px"
              >
                {href}
              </Text>
            </Box>
          </Grid.Col>
        </Grid.Row>
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
