import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import runThreeApp from './runThreeApp';

ReactDOM.render(<App run={runThreeApp} />, document.getElementById('root'));
