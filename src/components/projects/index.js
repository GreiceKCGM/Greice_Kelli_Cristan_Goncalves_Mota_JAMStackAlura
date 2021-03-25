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
    padding-left:21px;
    padding-right:21px

  }
`;

export default function Projets() {
  const projects = ProjectList.slice(0, -1);
  const highlightedProject = ProjectList.slice(-1)[0];

  return (
    <WrapperProjects>
      <SectionTitle> Meus Projetos </SectionTitle>
      <ul value={{ xs: 12, md: 6, lg: 4 }}>
        {projects.map(({
          title, image, slug, alt,
        }, key) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={key}>
            <Card
              image={image}
              title={title}
              href={`/projetos/${slug}`}
              alt={alt}
            />
          </li>
        ))}

        <li>
          <Card
            type="highlighted"
            // eslint-disable-next-line react/jsx-props-no-spreading
            image={highlightedProject.image}
            title={highlightedProject.title}
            text={highlightedProject.description}
            href={`/projetos/${highlightedProject.slug}`}
            alt={highlightedProject.alt}
          />

        </li>

      </ul>

    </WrapperProjects>
  );
}
