import React from 'react';
import styled, { css } from 'styled-components';
import Card from '../commons/card';
import { SectionTitle } from '../commons/card/styles';
import ProjectList from './content';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';

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
        {ProjectList.map(({ title, image, text, href, alt }, key) => (
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
            title="Titulo "
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec molestie rhoncus vestibulum. Aenean blandit velit."
            image="../images/4901374 2.svg"
          />

        </li>

      </ul>

    </WrapperProjects>
  );
}
