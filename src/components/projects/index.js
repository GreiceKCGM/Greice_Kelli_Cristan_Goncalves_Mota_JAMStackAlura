import React from 'react';
import styled, { css } from 'styled-components';
import Card from '../commons/card';
import { SectionTitle } from '../commons/card/styles';
import ProjectList from './content';
import Grid from '../foundations/layout/grid';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';

const WrapperProjects = styled.div`
    /* Width:800px; */
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    /* padding: 2px 0; */
    ${breakpointsMedia({
      md: css`
        padding: 4px 0;
      `,
    })}
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
      </ul>
      <ul value={{ xs: 12, md: 6, lg: 4 }}>
        <li>
          <Card
            type="highlighted"
            title="DESTAQUES"
            text="Card em destaque"
            image="../images/4901374 2.svg"
          />
        </li>
      </ul>

    </WrapperProjects>
  );
}
