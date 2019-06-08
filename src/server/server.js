import express from 'express';
import renderer from 'SERVER_UTILS/renderer';
import createStore from 'SERVER_UTILS/createStore';

const app = express();
const PORT = 5000;

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  res.send(renderer(req, store));
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
