import React, { Component } from 'react';
import PropTypes from 'prop-types';
import tinytime from 'tinytime';

import Page from 'components/page';
import content from 'data/content.json';

const formatDate = tinytime('{MM} {DD}').render;
const getSekkiDate = sekki => {
  const year = (new Date()).getFullYear();
  const [month, day] = sekki.startDate.split('-');

  return new Date(year, month, day);
}



export default class extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  }

  static getInitialProps ({ query }) {
    const { id } = query;
    return { id };
  }

  render () {
    const { id } = this.props;
    const sekki = content.sekki.find(sekki => sekki.id === id);

    return (
      <Page title={formatDate(getSekkiDate(sekki))} id="season">
        <div className="pt-6 ph-3">
          <h2>{sekki.english}</h2>
          <p>{sekki.description}</p>
        </div>
      </Page>
    );
  }
}
