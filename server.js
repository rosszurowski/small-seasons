const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const pathMatch = require('path-match');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();
const route = pathMatch();
const match = route('/season/:id');

app.prepare().then(() => {
  createServer((req, res) => {
    const { pathname, query } = parse(req.url, true);
    const params = match(pathname);

    if (params === false) {
      handle(req, res);
      return;
    }

    app.render(req, res, '/season', Object.assign(params, query));
  }).listen(port, err => {
    if (err) {
      throw err;
    }
    console.log('> Ready on http://localhost:3000');
  });
});
