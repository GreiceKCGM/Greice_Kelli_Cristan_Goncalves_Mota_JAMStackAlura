import React from 'react';
import styled from 'styled-components';

import Card from '../commons/card';
import { SectionTitle } from '../commons/card/styles';
import Box from '../foundations/layout/box';
import Grid from '../foundations/layout/grid';
import ProjectList from './content';

const WrapperProjects = styled.div`
  align-self: center;
    /* Width:800px; */
  ul {
    display: flex;
    position: relative;
    justify-content:center;
    flex-wrap: wrap;
    align-items: center;
    list-style-type: none;
    padding-left:10px;
    padding-right:21px

  }
`;

export default function Projets() {
  const projects = ProjectList.slice(0, -1);
  const highlightedProject = ProjectList.slice(-1)[0];

  return (
    <WrapperProjects flex={1}>

      <Grid.Col>
        <SectionTitle> Meus Projetos </SectionTitle>
      </Grid.Col>

      <Box
        as="ul"
        value={{ xs: 12, md: 6, lg: 4 }}
        listStyle="none"
        display="flex"
        position="relative"
      >
        {projects.map(({
          title, image, slug, alt,
        }, key) => (

          <Grid.Col
            as="li"
            paddingLeft="3px"
            paddingRight="3px"
            listStyle="none"
            order={{ xs: 2, md: 0 }}
              // eslint-disable-next-line react/no-array-index-key
            key={key}
          >
            <Grid.Row
              justifyContent="center"
              marginLeft="0"
              marginRigth="10px"
            >

              <Card
                image={image}
                title={title}
                href={`/projetos/${slug}`}
                alt={alt}
              />
            </Grid.Row>
          </Grid.Col>
        ))}

        <Grid.Col
          as="li"
          listStyle="none"
          paddingLeft="13px"
          paddingRight="3px"
          order={{ xs: 1, md: 2 }}
        >
          <Grid.Row
            justifyContent="center"
            // marginLeft="0"
            marginRigth="10px"
          >

            <Card
              type="highlighted"
            // eslint-disable-next-line react/jsx-props-no-spreading
              image={highlightedProject.image}
              title={highlightedProject.title}
              text={highlightedProject.description}
              href={`/projetos/${highlightedProject.slug}`}
              alt={highlightedProject.alt}
            />
          </Grid.Row>
        </Grid.Col>

      </Box>

    </WrapperProjects>
  );
}
