import React from 'react';
import styled from 'styled-components';
import Card from '../commons/card';
import { SectionTitle } from '../commons/card/styles';
import { projectList } from './content';

const WrapperProjects = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
  }
`;

export default function Projets() {
  return (
    <WrapperProjects>
      <SectionTitle> Meus Projetos </SectionTitle>
      <ul value={{ xs: 12, md: 6, lg: 4 }}>
        {projectList.map(({ title, image, text, href, alt }, key) => (
          <li key={key}>
            <Card image={image} text={text} href={href} alt={alt} />
          </li>
        ))}
      </ul>
      <ul>
        <li>
          <Card
            type="highlighted"
            title="DESTAQUES"
            text="Card em destaque"
            image="../images/17973919 1.svg"
          />
        </li>
      </ul>
    </WrapperProjects>
  );
}
