import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const isUndefined = val => typeof val === 'undefined'
const isInformationPage = id => !isUndefined(id) && id === 'information';
const isIndexPage = id => !isUndefined(id) && id === 'index';

const currentSeason = 'shousho';

const Header = ({ pageId, pageName, isDark }) => (
  <header className={`x xj-between p-fixed top-0 left-0 right-0 z-9 fs-6 ls-loose ${isDark ? 'c-light' : 'c-dark'}`}>
    <Link href={isIndexPage(pageId) ? `/season?id=${currentSeason}` : '/' } as={isIndexPage(pageId) ? '/season/shousho' : undefined}><a className="pa-3 o-50p">{pageName}</a></Link>
    <Link href={isInformationPage(pageId) ? '/' : '/information'}><a className="pa-3">Small Seasons</a></Link>
  </header>
);

Header.propTypes = {
  isDark: PropTypes.bool,
  pageName: PropTypes.string,
  pageId: PropTypes.string.isRequired,
};

Header.defaultProps = {
  isDark: false,
};

export default Header;
