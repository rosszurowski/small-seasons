import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import BodyClassName from 'react-body-classname';

export default class CustomDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render () {
    const className = BodyClassName.rewind();

    return (
     <html>
       <body className={className}>
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}
