import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const init = () => console.log('init');

ReactDOM.render(<App init={init}/>, document.getElementById('root'));
