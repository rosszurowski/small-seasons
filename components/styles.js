import React from 'react';

const map = (obj, fn) => Array.isArray(obj)
  ? obj.map(fn)
  : Object.keys(obj).map(key => fn(obj[key], key));

const spacing = [0, 4, 8, 16, 24, 32, 64, 128];
const fontSize = [48, 36, 24, 20, 16, 14, 11];

const opacity = [1.0, 0.75, 0.5, 0.3, 0.1];
const sizes = [0.5, 1, 2, 3, 4];
const maxWidths = [20, 40];

const sekkiColors = {
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
  shousho: '#FCD084', //'#FCBA4A',
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

const seasonColors = {
  spring: '#f0f4ef',
  summer: '#f7f5e8',
  autumn: '#f8e7e1',
  winter: '#e2e4eb',
};

const colors = {
  black: '#242424',
  gray: '#9fa0a0',
  dark: '#353126',
  darkFaded: 'rgba(54, 49, 38, 0.5)',
  light: '#f7f6f6',
  ...seasonColors,
  ...sekkiColors,
};

const font = {
  sans: '-apple-system, BlinkMacSystemFont, sans-serif',
  serif: `'Quadraat-Regular', serif`,
};

const classes = (suffix = '') => `
  ${spacing.map((val, i) => `
    .pa-${i}${suffix} { padding: ${val}px; }
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

  .d-none${suffix} { display: none; }
  .d-inline${suffix} { display: inline; }
  .d-inlineBlock${suffix} { display: inline-block; }
  .d-block${suffix} { display: block; }
  .d-tableCell${suffix} { display: table-cell; }
`;

const getSelectorValue = val => val.toString().replace(/\./g, 'p');

const colorString = map(colors, (val, key) => `.c-${key} { color: ${val}; }`).join('\n');
const backgroundColorString = map(colors, (val, key) => `.bgc-${key} { background-color: ${val}; }`).join('\n');
const sizesString = map(sizes, (val, key) => `
  .w-${getSelectorValue(val)} { width: ${val}rem; }
  .h-${getSelectorValue(val)} { height: ${val}rem; }
`).join('');
const opacityString = map(opacity, (val, key) => `.o-${getSelectorValue(val)} { opacity: ${val}; }`).join('\n');
const responsiveStyles = `
  ${classes()}
  @media only screen and (min-width: 481px) { ${classes('-s')} }
  @media only screen and (min-width: 769px) { ${classes('-m')} }
`;

export default () => (
  <style jsx global>{`
    @font-face {
      font-family: 'Quadraat';
      font-weight: normal;
      font-style: normal;
      src: url('/static/fonts/Quadraat-Regular.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Quadraat';
      font-weight: bold;
      font-style: normal;
      src: url('/static/fonts/Quadraat-Bold.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Quadraat';
      font-weight: bold;
      font-style: italic;
      src: url('/static/fonts/Quadraat-BoldItalic.woff2') format('woff2');
    }

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
      background-color: ${colors.light};
      color: ${colors.dark};
      font-family: ${font.serif};
      font-size: 16px;
      line-height: 1.5;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    p a {
      border-bottom: 1px currentColor solid;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    .f-serif { font-family: ${font.serif}; }
    .f-sans { font-family: ${font.sans}; }

    .fw-normal { font-weight: normal; }
    .fw-bold { font-weight: bold; }

    ${colorString}
    ${backgroundColorString}
    ${opacityString}

    .mw-90p { max-width: 90%; }
    .mw-20 { max-width: 20rem; }
    .mw-40 { max-width: 40rem; }
    .mw-60 { max-width: 80rem; }

    ${sizesString}

    .w-90p { width: 90%; }
    .h-100p { height: 100%; }
    .h-50vh { height: 50vh; }
    .h-80vh { height: 80vh; }
    .h-100vh { height: 100vh; }

    .br-4 { border-radius: 4px; }
    .br-round { border-radius: 50%; }

    .p-relative { position: relative; }
    .p-absolute { position: absolute; }
    .p-fixed { position: fixed; }

    .top-0 { top: 0; }
    .left-0 { left: 0; }
    .right-0 { right: 0; }
    .bottom-0 { bottom: 0; }
    .p-center { top: 50%; left: 50%; transform: translate(-50%, -50%); }

    .o-50p { opacity: 0.5; }

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
    .ls-loose { letter-spacing: 0.75px; }

    .ofx-scroll { overflow-x: scroll; }
    .ofx-hidden { overflow-x: hidden; }

    .lh-1p0 { line-height: 1.0; }
    .lh-1p5 { line-height: 1.5; }
    .lh-2p0 { line-height: 2.0; }
    .lh-2p5 { line-height: 2.5; }

    .ta-left { text-align: left; }
    .ta-center { text-align: center; }
    .ta-right { text-align: right; }

    .tt-uppercase { text-transform: uppercase; }

    .va-top { vertical-align: top; }
    .va-baseline { vertical-align: baseline; }
    .va-middle { vertical-align: middle; }
    .va-bottom { vertical-align: bottom; }

    ${responsiveStyles}

    .z-1 { z-index: 1; }
    .z-2 { z-index: 2; }
    .z-9 { z-index: 9; }
  `}</style>
);
