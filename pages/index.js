import React, { Component } from 'react';
import Swipe from 'react-swipe';
import Page from 'components/page';

import content from 'data/content.json';
import tinytime from 'tinytime';

const formatDate = tinytime('{MM} {DD}').render;

const getSekkiDate = sekki => {
  const year = (new Date()).getFullYear();
  const [month, day] = sekki.startDate.split('-');

  return new Date(year, month, day);
}

const isActiveSekki = i => {
  const now = new Date();
  const startDate = getSekkiDate(content.sekki[i]);
  const endDate = getSekkiDate(content.sekki[(i + 1) % content.sekki.length]);

  return startDate <= now && now <= endDate;
}

export default () => {
  const sekkis = content.sekki.map((sekki, i) => Object.assign(sekki, { active: isActiveSekki(i) }));

  return (
    <Page title="Index" id="index">
      <div className="p-fixed top-0 left-0 right-0 bottom-0 z-1">
        <Swipe>
          {sekkis.map(sekki => (
            <div key={sekki.id}>
              <div className="x xd-column xj-center h-100vh">
                <div className="ph-3 f-serif ta-center h-100p">
                  <div className="p-relative x xa-center xj-center h-50vh mt-6">
                    <div className={`p-absolute p-center w-2 h-2 br-round z-1 bgc-${sekki.id}`} />
                    <div className="p-relative fs-3 z-2">{sekki.english}</div>
                  </div>
                  <div className="mt-3 fs-5">
                    {sekki.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Swipe>
      </div>
    </Page>
  );
}
