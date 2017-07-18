import React, { Component } from 'react';
import Page from 'components/page';

import uniq from 'lodash/uniq';
import titleize from 'lodash/capitalize';

import content from 'data/content.json';
import tinytime from 'tinytime';

const formatDate = tinytime('{MM} {DD}').render;

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

const Sekki = ({ id, title, startDate, description, isActive }) => (
  <div className={`mv-5 br-4 ${isActive ? `ta-center pt-7 pb-5 ph-4 bgc-${id}` : ''}`}>
    <div className="mb-3">
      <div className="f-sans fw-bold fs-5 ls-loose ta-center tt-uppercase">{title}</div>
    </div>
    <div>
      <span className="f-sans fs-5 o-50p">
        <span>{formatDate(parseDayOfMonth(startDate))}</span>
        <span className="ph-2">&bull;</span>
      </span>
      <span>{description}</span>
    </div>
  </div>
);

const Season = ({ id, sekki }) => (
  <section className={`pv-3 bgc-${id}`}>
    <div className="w-90p mh-auto mw-40">
      {sekki.map(({ id, title, startDate, description }, i) => (
        <Sekki key={title} id={id} title={title} startDate={startDate} description={description} isActive={isActiveSekki(title)} />
      ))}
    </div>
  </section>
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
          <p>Until 1873, farmers in China and Japan broke the calendar year down into 24 <em>sekki</em> or “small seasons.” They didn't have specific dates marking the start of the season. Instead, these seasons divided up the year by natural phenomena:</p>
        </div>
        <div className="w-90p mh-auto mw-80">
          <div className="mv-7 lh-2p0">
            <table>
              <thead className="ta-left">
                <tr>
                  <th>Season</th>
                  <th />
                  <th colSpan={2}>Name</th>
                  <th>Meaning</th>
                  <th>Associations</th>
                  <th>Approx. Date</th>
                </tr>
              </thead>
              <tbody>
                {sekkis.map((sekki, i) => (
                  <tr key={sekki.id}>
                    <td>{seasons.indexOf(sekki.season) === i ? titleize(sekki.season) : ''}</td>
                    <td>
                      {isActiveSekki(sekki.title) && (
                        <div className={`br-round w-0p5 h-0p5 bgc-${sekki.id} va-middle`} />
                      )}
                    </td>
                    <td>{titleize(sekki.romanji)}</td>
                    <td>{sekki.kanji}</td>
                    <td>{sekki.title}</td>
                    <td>{''}</td>
                    <td>{formatDate(parseDayOfMonth(sekki.startDate))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-90p mh-auto mw-40 fs-4">
          <p>This site and <a href="https://twitter.com/smallseasonsbot" target="_blank">this twitterbot</a> are a way of enshrining this idea.</p>
          <p>Living in a city, I don’t really need to know if the rains are late this year, or when the bushwarblers start warbling. But I think it's nice to have a more fine-grained way of thinking about the year; dividing such a big span of time into four big seasons feels really clumsy. Thinking in two week <em>sekki</em> seems to match how my life and environment changes a lot better.</p>
          <p className="mt-6 fs-5 o-50p">I'd love to push this idea further, to make it more useful for people. If you have ideas of how you'd like to see this stuff, throw a note on <a href="https://github.com/rosszurowski/small-seasons">this Github repo</a>.</p>
        </div>
      </section>
      {/* <div>
        {map(grouped, (sekki, key) => (
          <Season key={key} id={key} sekki={sekki} />
        ))}
        {map(grouped, (sekki, key) => (
          <Season key={key} id={key} sekki={sekki} />
        ))}
      </div> */}
    </Page>
  );
}
