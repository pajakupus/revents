import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layouts/App';
import reportWebVitals from './reportWebVitals';
import "semantic-ui-css/semantic.min.css";

import 'semantic-ui-react';

const rootEl = document.getElementById('root');

let render = () => {
  ReactDOM.render(<App />, rootEl)
}
if(module.hot) {
  module.hot.accept('./app/layouts/App', () => {
    setTimeout(render)
  })
}

render();

reportWebVitals();
