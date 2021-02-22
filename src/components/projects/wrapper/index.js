import React from 'react';
import styled from 'styled-components';
import Card from '../../commons/card';
import { SectionTitle } from '../../commons/card/styles';

const projects = [
  {
    title: 'title',
    image: '../images/17973919 1.svg',
    text: 'texto',
    href: '',
    alt: 'Placeholder',
  },
  {
    title: 'title',
    image: '../images/17973919 1.svg',
    text: 'texto',
    href: '',
    alt: '',
  },
  {
    title: 'title',
    image: '../images/17973919 1.svg',
    text: 'texto',
    href: '',
    alt: '',
  },
];

const WrapperProjects = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
  }
`;

export default function Wrapper() {
  return (
    <WrapperProjects>
      <SectionTitle> Meus Projetos </SectionTitle>
      Lista de Projetos:
      <ul value={{ xs: 12, md: 6, lg: 4 }}>
        {projects.map(({ title, image, text, href, alt }) => (
          <li>
            <Card
              title={title}
              image={image}
              text={text}
              href={href}
              alt={alt}
            />
          </li>
        ))}
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
