import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import * as THREE from 'three';

import App from './App';

const init = () => console.log('init');

ReactDOM.render(<App init={init}/>, document.getElementById('root'));
