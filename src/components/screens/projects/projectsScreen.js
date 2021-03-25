import React from 'react';
// import Box from '../../foundations/layout/box';
import styled from 'styled-components';
import Image from 'next/image';

const ProjectCardWrapper = styled.div`
  background-color: red;
  border: black 2px solid;
  position: relative;
  width: 20vw;
`;

function ProjectsScreen({ image, title, description, link, ...prop }) {

    console.log(image, title, description, link, ...prop);


  return (
    <ProjectCardWrapper>
      <p>{title}</p>
      <p>{description}</p>
      <a>{link}</a>
      <Image
          src={image}
          alt="texto alternativo"
          width="500"
          height="500"
          // layout="fill"
        />
    </ProjectCardWrapper>
  )
}

export default ProjectsScreen;
