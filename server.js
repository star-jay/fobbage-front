const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 80;
app.listen(port);

// In production, redirect all http requests to https
if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    const reqType = req.headers['x-forwarded-proto'];
    /* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
    reqType === 'https' ? next() : res.redirect(`https://${req.headers.host}${req.url}`);
  });
}

// Catch all routes and redirect to the index file
app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});
