import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';

import Routes from 'ROUTES/Routes';

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  return `
  <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Calories</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" />
        <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
      </head>
      <body>
        <div id="app">${content}</div>
        <script src="clientBundle.js"></script>
      </body>
    </html>
  `;
};
