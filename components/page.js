import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Styles from 'components/styles';

const Page = ({ id, title, children, isDark }) => (
  <div>
    <Head>
      <title>{title ? `${title} — Small Seasons` : `Small Seasons`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/static/favicon.png" type="image/png" />
    </Head>
    <Styles />
    <main>
      {children}
    </main>
  </div>
);

Page.propTypes = {
  isDark: PropTypes.bool,
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any,
};

Page.defaultProps = {
  isDark: false,
};

export default Page;
