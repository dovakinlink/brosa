import React from 'react';

import Express from 'express';
import compression from 'compression';

import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import { routes } from 'brosa/routes';

const app = new Express();
app.use(compression());

// TODO: Handle page rendering more gracefully, use react-helmet
const renderPage = function(body) {
    return `<!DOCTYPE html> <html lang="en"> <head> <meta charset="utf-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> <title>Jesse Farebrother</title> <link rel="stylesheet" type="text/css" href="assets/styles.css"> <meta name="viewport" content="width=device-width, initial-scale=1"> <script type="application/javascript" src="assets/bootstrap.js"></script> </head> <body> <div class="container"> ${body}</div><script type="application/javascript" src="assets/vendor.js"></script> <script type="application/javascript" src="assets/app.js"></script><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-75494712-1', 'auto'); ga('send', 'pageview');</script> </body> </html>`;
};

// TODO: Consider using a CDN for built assets
app.use("/assets", Express.static('build/assets'));
app.use(Express.static('static'));

app.use((req, res, next) => {
  match({ routes, location: req.url }, async (err, redirect, props) => {
    // TODO: Make 500, 404 look pretty.
    if (err) {
      res.status(500).end();
    } else if (props) {
      try {
        const el = <RouterContext {...props} />;
        const html = renderPage(renderToString(el));
        res.send(html).end();
      } catch(err) {
        next(err);
      }
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else {
      res.status(404);
      res.send("Not Found").end();
    }
  });
});

export default () => {
  const port = process.env.PORT || 8080;

  app.listen(port, () => {
    console.info(`Listening on port ${port}...`)
  });
}
