import React from 'react';
import styled from 'styled-components';
import Card from '../commons/card';
import { SectionTitle } from '../commons/card/styles';
import ProjectList from './content';
import Grid from '../foundations/layout/grid';

const WrapperProjects = styled.div`
  /* display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  flex-direction: column; // caso nao fique em coluna verificar aqui
  justify-content: space-between;
  align-items: center; */
  ul {
    display: flex;
    list-style-type: none;
    flex-wrap: wrap;
    flex-direction: column; // caso nao fique em coluna verificar aqui
    justify-content: space-between;
    align-items: center;
  }
`;

export default function Projets() {
  return (
    <WrapperProjects>
      <Grid.Container>
        <Grid.Row>
          <Grid.Col value={12} display="flex" justifyContent="center">
            <SectionTitle> Meus Projetos </SectionTitle>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col>
            <ul
              value={{ xs: 12, md: 6, lg: 4 }}
              display="flex"
              justifyContent="center"
            >
              {ProjectList.map(({
                title, image, text, href, alt,
              }, key) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={key}>
                  <Card
                    image={image}
                    title={title}
                    text={text}
                    href={href}
                    alt={alt}
                  />
                </li>
              ))}
            </ul>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col>
            <ul
              value={{ xs: 12, md: 6, lg: 4 }}
              display="flex"
              justifyContent="center"
            >
              <li>
                <Card
                  type="highlighted"
                  title="DESTAQUES"
                  text="Card em destaque"
                  image="../images/4901374 2.svg"
                />
              </li>
            </ul>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </WrapperProjects>
  );
}
