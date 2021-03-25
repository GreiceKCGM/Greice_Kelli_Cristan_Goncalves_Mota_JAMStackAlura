import React from 'react';
import PropTypes from 'prop-types';
import ProjectsScreen from '../../src/components/screens/projects/projectsScreen';
import websitePageHOC from '../../src/components/wrappers/hoc';
import db from '../../src/db.json';

function PageProjects({
  image, title, description, link,
}) {
  return (
    <ProjectsScreen
      image={image}
      title={title}
      description={description}
      link={link}
    />
  );
}
export default websitePageHOC(PageProjects, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Página de Projetos',
    },
    headerProps: {
      display: true,
    },
  },
});

PageProjects.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { projects } = db;
  const projectInfo = projects.find((project) => (
    project.title.toLowerCase() === slug
  ));

  return {
    props: {
      image: projectInfo.image,
      title: projectInfo.title,
      description: projectInfo.description,
      link: projectInfo.link,
    },
  };
}

export async function getStaticPaths() {
  const { projects } = db;
  const paths = projects.map((project) => (
    { params: { slug: project.title.toLowerCase() } }
  ));

  return {
    paths,
    fallback: false,
  };
}
