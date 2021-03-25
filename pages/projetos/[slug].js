import React from 'react';
import PropTypes from 'prop-types';
import ProjectsScreen from '../../src/components/screens/projects/projectsScreen';
import websitePageHOC from '../../src/components/wrappers/hoc';
import ProjectList from '../../src/components/projects/content';

function PageProjects({
  image, title, description, slug,
}) {
  return (
    <ProjectsScreen
      image={image}
      title={title}
      description={description}
      href={slug}
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
  slug: PropTypes.string.isRequired,
};

export async function getStaticProps({ params }) {
  const { slug } = params;
  const projectInfo = ProjectList.find(({ slug: projectSlug }) => (
    projectSlug === slug
  ));

  return {
    props: {
      image: projectInfo.image,
      title: projectInfo.title,
      description: projectInfo.description,
      slug: projectInfo.href,
    },
  };
}

export async function getStaticPaths() {
  const paths = ProjectList.map(({ slug }) => (
    { params: { slug } }
  ));

  return {
    paths,
    fallback: false,
  };
}
