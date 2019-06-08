import React from 'react';
import { hydrate } from 'react-dom';

import Home from 'COMPONENTS/Home';


hydrate(<Home />, document.querySelector('#app'));