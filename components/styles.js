import React from 'react';

const map = (obj, fn) => Array.isArray(obj)
  ? obj.map(fn)
  : Object.keys(obj).map(key => fn(obj[key], key));

const spacing = [0, 4, 8, 16, 24, 32, 64, 128];
const fontSize = [48, 36, 24, 20, 16, 14, 11];

const opacity = [1.0, 0.75, 0.5, 0.3, 0.1];
const sizes = [0.5, 1, 2, 3, 4];
const maxWidths = [20, 40];

const colors = {
  gray: '#9fa0a0',
  // sekki
  shokan: '#557FBF',
  daikan: '#77A9D4',
  risshun: '#71A5C6',
  usui: '#73BEB5',
  keichitsu: '#66BFA7',
  shunbun: '#70D2AD',
  seimei: '#9AEC99',
  koku: '#DCF7C7',
  rikka: '#E4F2C1',
  shoman: '#E9F5BF',
  boshu: '#F5F4A7',
  geshi: '#F9EC5F',
  shousho: '#FCBA4A',
  taisho: '#FF9E51',
  risshu: '#FE8860',
  shosho: '#FC885B',
  hakuro: '#F75953',
  shubun: '#E44C4D',
  kanro: '#EF565E',
  soko: '#8C5370',
  ritto: '#8C5F8F',
  shosetsu: '#6F65A1',
  taisetsu: '#5976A9',
  toji: '#6787B9',
};

const classes = (suffix = '') => `
  ${spacing.map((val, i) => `
    .pt-${i}${suffix} { padding-top: ${val}px; }
    .pl-${i}${suffix} { padding-left: ${val}px; }
    .pr-${i}${suffix} { padding-right: ${val}px; }
    .pb-${i}${suffix} { padding-bottom: ${val}px; }
    .ph-${i}${suffix} { padding-left: ${val}px; padding-right: ${val}px; }
    .pv-${i}${suffix} { padding-top: ${val}px; padding-bottom: ${val}px; }

    .mt-${i}${suffix} { margin-top: ${val}px; }
    .ml-${i}${suffix} { margin-left: ${val}px; }
    .mr-${i}${suffix} { margin-right: ${val}px; }
    .mb-${i}${suffix} { margin-bottom: ${val}px; }
    .mh-${i}${suffix} { margin-left: ${val}px; margin-right: ${val}px; }
    .mv-${i}${suffix} { margin-top: ${val}px; margin-bottom: ${val}px; }
  `).join('')}

  .mh-auto${suffix} { margin-left: auto; margin-right: auto; }
  .mv-auto${suffix} { margin-top: auto; margin-bottom: auto; }

  ${fontSize.map((val, i) => `
    .fs-${i+1}${suffix} { font-size: ${val}px; }
  `).join('')}
`;

const getSelectorValue = val => val.toString().replace(/\./g, 'p');

const colorString = map(colors, (val, key) => `.c-${key} { color: ${val}; }`).join('\n');
const backgroundColorString = map(colors, (val, key) => `.bgc-${key} { background-color: ${val}; }`).join('\n');
const sizesString = map(sizes, (val, key) => `
  .w-${getSelectorValue(val)} { width: ${val}rem; }
  .h-${getSelectorValue(val)} { height: ${val}rem; }
`).join('');
const opacityString = map(opacity, (val, key) => `.o-${getSelectorValue(val)} { opacity: ${val}; }`).join('\n');

export default () => (
  <style jsx global>{`
    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }

    html,
    body {
      margin: 0;
      padding: 0;
    }

    html {
      background: #f3efee;
      font-family: 'Sauna-Roman', -apple-system, BlinkMacSystemFont, sans-serif;
      font-size: 28px;
      line-height: 1.3;
    }

    ${colorString}
    ${backgroundColorString}
    ${opacityString}

    .mw-90p { max-width: 90%; }
    .mw-20 { max-width: 20rem; }
    .mw-40 { max-width: 40rem; }

    ${sizesString}
    .h-80vh { height: 80vh; }
    .h-100vh { height: 100vh; }

    .c1{width:8.333333333333332%}
    .c2{width:16.666666666666664%}
    .c3{width:25%}
    .c4{width:33.33333333333333%}
    .c5{width:41.66666666666667%}
    .c6{width:50%}
    .c7{width:58.333333333333336%}
    .c8{width:66.66666666666666%}
    .c9{width:75%}
    .c10{width:83.33333333333334%}
    .c11{width:91.66666666666666%}
    .c12{width:100%}
    .co0{margin-left:0}
    .co1{margin-left:8.333333333333332%}
    .co2{margin-left:16.666666666666664%}
    .co3{margin-left:25%}
    .co4{margin-left:33.33333333333333%}
    .co5{margin-left:41.66666666666667%}
    .co6{margin-left:50%}
    .co7{margin-left:58.333333333333336%}
    .co8{margin-left:66.66666666666666%}
    .co9{margin-left:75%}
    .co10{margin-left:83.33333333333334%}
    .co11{margin-left:91.66666666666666%}
    .co12{margin-left:100%}

    .br-round { border-radius: 50%; }

    .d-inline { display: inline; }
    .d-inlineBlock { display: inline-block; }
    .d-block { display: block; }

    .x { display: flex; }
    .xx { flex: 1 0 auto; }
    .xd-row { flex-direction: row; }
    .xd-column { flex-direction: column; }

    .xa-start { align-items: flex-start; }
    .xa-center { align-items: center; }
    .xa-end { align-items: flex-end; }

    .xj-start { justify-content: flex-start; }
    .xj-around { justify-content: space-around; }
    .xj-between { justify-content: space-between; }
    .xj-center { justify-content: center; }
    .xj-end { justify-content: flex-end; }

    .xw { flex-wrap: wrap; }
    .xw-reverse { flex-wrap: wrap-reverse; }
    .xw-noWrap { flex-wrap: nowrap; }

    .fs-italic { font-style: italic; }

    .ofx-scroll { overflow-x: scroll; }
    .ofx-hidden { overflow-x: hidden; }

    .lh-1p0 { line-height: 1.0; }
    .lh-1p5 { line-height: 1.5; }

    .ta-left { text-align: left; }
    .ta-center { text-align: center; }
    .ta-right { text-align: right; }

    .va-top { vertical-align: top; }
    .va-baseline { vertical-align: baseline; }
    .va-middle { vertical-align: middle; }
    .va-bottom { vertical-align: bottom; }

    ${classes()}
    @media only screen and (min-width: 479px) {
      ${classes('-s')}
    }
    @media only screen and (min-width: 767px) {
      ${classes('-m')}
    }
  `}</style>
);
