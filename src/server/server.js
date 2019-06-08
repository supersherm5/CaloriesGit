import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from 'COMPONENTS/Home';

const app = express();
const PORT = 5000;

app.use(express.static('public'));

app.get('*', (req, res) => {

  res.send(renderToString(<Home />));
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
