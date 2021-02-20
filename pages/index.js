import React from 'react';
// import styled from 'styled-components';
import Cover from '../src/components/commons/cover';
import Footer from '../src/components/commons/footer';
import Header from '../src/components/commons/header';
import WrapperProjects from '../src/components/projects/wrapper';

export default function Home() {
  return (
    <>
      <Cover />
      <Header />
      <WrapperProjects />
      <Footer />
    </>
  );
}

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `;
