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
      <title>Small Seasons</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <Styles />

    <div className="ph-7 pv-6 mw-40 mh-auto">
      {content.sekki.map((sekki, i) => (
        <div key={sekki.id} className="mb-7 fs-2 x xd-column xj-center">
          {/* <div>{getSeasonName(sekki.id)}</div> */}
          <div className={`ml-auto mb-2 c-${sekki.id}`}>{formatDate(new Date(sekki.startDate))}</div>
          {/* <div className="mb-3">
            <div className="mr-2">
              <span className={`d-inlineBlock br-round va-middle w-0p5 h-0p5 bgc-${sekki.id}`} />
            </div>
          </div> */}
          <div><span>{sekki.english}</span>. <span className="o-0p5">{sekki.description}</span></div>
        </div>
      ))}
    </div>
  </div>
);
