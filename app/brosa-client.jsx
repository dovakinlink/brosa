import React from 'react';
import ReactDOM from 'react-dom';

import { Router, browserHistory } from 'react-router';

import { routes } from 'brosa/routes';

if (process.env.NODE_ENV !== 'production') {
  window.React = React;
}

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.querySelector('.container')
);
