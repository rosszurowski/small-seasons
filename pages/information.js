import React from 'react';
import Page from 'components/page';

export default () => (
  <Page title="Information" id="information" isDark>
    <div className="c-light pt-6 ph-3">
      <section className="f-serif fs-4">
        <p>In Kenya Hara’s book <em>White</em>, he talks about 24 <em>sekki</em> or “small seasons” from when calendars were based on natural phenomena. These seasons divided up the year in agricultural terms.</p>
        <p>I like that idea. There’s something clumsy about only breaking the whole year into four parts.</p>
        <p>Seeing this calendar reminds me of seasons and nature, something there’s not a lot of in urban California. It also gives a more tangible way of breaking up the year. I find it a lot easier to understand two week increments than months or seasons.</p>
      </section>
      <section className="pt-6">
        <h4>Sources</h4>
        <ul>
          <li><a href="">White, Kenya Hara</a></li>
          <li><a href="">72 Microseasons</a></li>
        </ul>

        <h4>Small Seasons</h4>
        <ul>
          <li><a href="">Github</a></li>
          <li><a href="">Twitter</a></li>
        </ul>
      </section>
    </div>
  </Page>
);
