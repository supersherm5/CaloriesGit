const { resolve } = require('path');

const ROOT = resolve(__dirname);

const CLIENT = `${ROOT}/src/client`;
const clientPaths = {
  CLIENT,
  CLIENT_UTILS: `${CLIENT}/utils`,
  COMPONENTS: `${CLIENT}/components`,
  STATE: `${CLIENT}/state`,
};

const SERVER = `${ROOT}/src/server`;
const serverPaths = {
  SERVER,
  SERVER_UTILS: `${SERVER}/utils`,
};

const ROUTES = `${ROOT}/src/routes`;
const routesPaths = {
  ROUTES,
};


module.exports = {
  ROOT,
  CLIENT,
  ROUTES,
  SERVER,
  clientPaths,
  routesPaths,
  serverPaths,
  resolve: {
    alias: {
      ...clientPaths,
      ...routesPaths,
      ...serverPaths,
    },
  },

};
