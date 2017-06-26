import React from 'react';
import Head from 'next/head';

import Styles from 'components/styles';
import content from 'data/content.json';
import tinytime from 'tinytime';

const formatDate = tinytime('{MM} {DD}').render;
const getSeasonName = id => {
  switch (id) {
    case 'risshun':
      return 'Spring';
    case 'rikka':
      return 'Summer';
    case 'risshu':
      return 'Autumn';
    case 'ritto':
      return 'Winter';
  }
}

const getOffset = i => i > 9 ? (9 - (i % 9)) : i % 9;

export default () => (
  <div>
    <Head>
      <title>24 Sekki</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <Styles />

    <div className="ph-6 pv-6 mw-90p">
      <table>
        <thead>
          <th />
          <th />
          <th />
          <th />
        </thead>
        <tbody>
          {content.sekki.map(sekki => (
            <tr key={sekki.id}>
              <td>{getSeasonName(sekki.id)}</td>
              <td className="ph-3 ml-auto c-gray">{formatDate(new Date(sekki.startDate))}</td>
              <td className="ph-3">
                <span className="mr-2">
                  <span className={`d-inlineBlock br-round va-middle w-0p5 h-0p5 bgc-${sekki.id}`} />
                </span>
                <span>{sekki.meaning}</span>
              </td>
              <td className="ph-3 mw-40">{sekki.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* <div className="mw-90p mh-auto">
      <div>
        <p>Until 1873, China and Japan had a traditional calendar based on 24 small seasons, or <span className="fs-italic">sekki</span>. These seasons divided up the year in agricultural terms.</p>
        <p>Living in cities, we don't get to notice these things as much. But since it's good to have more words to understand and describe things, I made this site to share the idea.</p>
      </div>
    </div> */}
  </div>
);
