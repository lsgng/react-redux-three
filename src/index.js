import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App onClick={console.log("Test")}/>, document.getElementById('root'));