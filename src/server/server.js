import express from 'express';
import renderer from 'SERVER_UTILS/renderer';
import createStore from 'SERVER_UTILS/createStore';
import Routes from 'ROUTES/Routes';
import { matchRoutes } from 'react-router-config';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  const store = createStore();
  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then((data) => {
    console.log('data = ', data);
    const content = renderer(req, store);

    res.send(content);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
