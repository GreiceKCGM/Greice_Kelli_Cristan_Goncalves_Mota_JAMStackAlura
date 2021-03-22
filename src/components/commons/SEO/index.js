import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export default function SEO({ headTitle }) {
  const hasHeadTitle = Boolean(headTitle);
  const baseTitle = 'Greice Kelli - Portifólio';
  const title = hasHeadTitle
    ? (`${headTitle} | ${baseTitle}`)
    : (baseTitle);
  const description = 'Portifólio desenvolvido durante Bootcamp Alura JAM Stack';
  const urlBase = 'https://portifolio-greicekelli.vercel.app';
  const image = 'https://agenciaplatz.com.br/wp-content/uploads/2019/04/banner-topo-programa%C3%A7%C3%A3o.png';

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlBase} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}

SEO.defaultProps = {
  headTitle: '',
};

SEO.propTypes = {
  headTitle: PropTypes.string,
};
