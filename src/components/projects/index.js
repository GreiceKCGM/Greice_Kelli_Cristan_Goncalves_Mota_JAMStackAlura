import React from 'react';
import styled from 'styled-components';

import Card from '../commons/card';
import { SectionTitle } from '../commons/card/styles';
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

  }
`;

export default function Projets() {
  return (
    <WrapperProjects>
      <SectionTitle> Meus Projetos </SectionTitle>
      <ul value={{ xs: 12, md: 6, lg: 4 }}>
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

        <li>
          <Card
            type="highlighted"
            title="Projeto"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image="https://placehold.it/250x150"
            href="https://placeholder.com"
            alt="Placeholder"

          />

        </li>

      </ul>

    </WrapperProjects>
  );
}
