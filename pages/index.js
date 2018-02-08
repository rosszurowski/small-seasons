import React from 'react';
import Page from 'components/page';

import uniq from 'lodash/uniq';
import titleize from 'lodash/capitalize';

import content from 'data/content.json';
import tinytime from 'tinytime';

const formatDate = tinytime('{MM} {DD}').render;

const getSekki = i => content.sekki[i];

const parseDayOfMonth = dayOfMonth => {
  const year = (new Date()).getFullYear();
  const [month, day] = dayOfMonth.split('-');

  return new Date(year, month - 1, day);
}

const isActiveSekki = title => {
  const i = content.sekki.findIndex(sekki => sekki.title === title);
  const current = content.sekki[i];
  const next = content.sekki[(i + 1) % content.sekki.length];

  const now = new Date();
  const startDate = parseDayOfMonth(current.startDate);
  const endDate = parseDayOfMonth(next.startDate);

  return startDate <= now && now <= endDate;
}

const Badge = ({ color, children }) => (
  <div className={`d-inlineBlock br-4 ta-center f-sans ph-2 lh-2p0 fs-7 c-darkFaded bgc-${color} tt-uppercase ls-loose va-middle`}>
    {children}
  </div>
);

export default () => {
  const sekkis = content.sekki;
  const seasons = sekkis.map(sekki => sekki.season);

  return (
    <Page id="index">
      <section className="pv-6 fs-4">
        <div className="w-90p mh-auto mw-40">
          <div className="mv-4 h-50vh x xd-column xj-center">
            A guide to understanding<br />
            <span className="c-hakuro">Small Seasons</span>
          </div>
          <p>In agricultural days, staying in-tune with the seasons was important. <em>When should we plant seeds? When should we harvest? When will the rains come? Are they late this year?</em> Knowing what was happening with nature was the difference between a plentiful harvest and a barren crop.</p>
          <p>Prior to the Gregorian calendar, farmers in China and Japan broke each year down into 24 <em>sekki</em> or “small seasons.” These seasons didn't use dates to mark seasons, but instead, they divided up the year by natural phenomena:</p>
        </div>
        <div className="w-90p mh-auto mw-80">
          <div className="d-none-s mv-6">
            {sekkis.map((sekki, i) => {
              const isLast = i + 1 === sekkis.length;

              return (
                <div key={sekki.id} className="pv-3" style={isLast ? {} : { borderBottom: '1px rgba(0, 0, 0, 0.05) solid' }}>
                    <div className="x xa-center mb-1">
                      {isActiveSekki(sekki.title) && (
                        <div className="mr-2">
                          <Badge color={sekki.id}>Now</Badge>
                        </div>
                      )}
                      <span className="o-50p">{formatDate(parseDayOfMonth(sekki.startDate))}</span>
                    </div>
                    <div><span className="fw-bold">{sekki.title}</span>. {sekki.notes}</div>
                </div>
              );
            })}
          </div>
          <div className="d-none d-block-s fs-5 fs-4-l mv-7 va-middle">
            <table>
              <thead className="ta-left">
                <tr>
                  <th className="pa-2 d-none d-tableCell-m">Season</th>
                  <th className="pa-2 d-none d-tableCell-m" colSpan={2}>Name</th>
                  <th className="pa-2">Meaning</th>
                  <th className="pa-2">Associations</th>
                  <th className="pa-2" />
                  <th className="pa-2">Approx. Date</th>
                </tr>
              </thead>
              <tbody>
                {sekkis.map((sekki, i) => {
                  const isActive = typeof global.window === 'undefined' ? false : isActiveSekki(sekki.title);
                  const isNextActive = !isActive && getSekki(i + 1) && isActiveSekki(getSekki(i + 1).title);
                  const isPrevActive = !isActive && !isNextActive && getSekki(i - 1) && isActiveSekki(getSekki(i - 1).title);

                  const cellProps = { className: 'pa-2' };

                  return (
                    <tr key={sekki.id}>
                      <td className={`d-none d-tableCell-m`}><div {...cellProps}>{seasons.indexOf(sekki.season) === i ? titleize(sekki.season) : ''}</div></td>
                      <td className={`d-none d-tableCell-m`}><div {...cellProps}>{titleize(sekki.romanji)}</div></td>
                      <td className={`d-none d-tableCell-m`}><div {...cellProps}><span className="fs-5 ls-loose ws-noWrap">{sekki.kanji}</span></div></td>
                      <td><div {...cellProps}>{sekki.title}</div></td>
                      <td><div {...cellProps}>{sekki.notes}</div></td>
                      <td>
                        {isActive && (
                          <div {...cellProps}>
                            <div className="mr-3">
                              <Badge color={sekki.id}>Now</Badge>
                            </div>
                          </div>
                        )}
                      </td>
                      <td><div {...cellProps}>{formatDate(parseDayOfMonth(sekki.startDate))}</div></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-90p mh-auto mw-40 fs-4">
          <p>Living in cities, most of us don’t need to know if the rains are late this year, or when the bushwarblers will start warbling.</p>
          <p>But it's nice to have a more fine-grained way of thinking about the year; dividing such a big span of time into four big seasons feels really clumsy. Thinking in two week <em>sekki</em> seems to match how my life and environment changes a lot better.</p>
          <p><a href="/">This site</a> and <a href="https://twitter.com/smallseasonsbot" target="_blank">this twitterbot</a> are a way for <a href="https://rosszurowski.com/">me</a> to enshrine this idea.</p>
          <p className="mt-6 fs-5 o-50p">I'd love to push this idea further, to make it more useful for people. If you have ideas of how you'd like to see this stuff, throw a note on <a href="https://github.com/rosszurowski/small-seasons">this Github repo</a>.</p>
        </div>
      </section>
    </Page>
  );
}
