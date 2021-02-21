import React from 'react';
import styled from 'styled-components';
import Card from './card';

const projects = [
  { title: 'titulo1', image: 'imagem', text: 'texto' },
  { title: 'titulo2', image: 'imagem', text: 'texto' },
  { title: 'titulo3', image: 'imagem', text: 'texto' },
];

const SectionTitle = styled.section`
  background-color: yellow;
  height: 6rem;
  & h2 {
    display: flex;
    color: ${({ theme }) => theme.colors.primary.main.color};
    justify-content: center;
    align-items: center;
  }
`;

export default function Wrapper() {
  return (
    <div>
      <SectionTitle> Meus Projetos </SectionTitle>
      Lista de Projetos:
      <ul>
        {projects.map(({ title, image, text }) => (
          <li>
            <Card title={title} image={image} text={text} />
          </li>
        ))}
        <li>
          <Card type="destaque" title="DESTAQUES" />
        </li>
      </ul>
    </div>
  );
}
