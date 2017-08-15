import React from 'react';
import './App.css';

const App = (props) => (
  <div>
    <canvas className='display' onClick={props.init}></canvas>
  </div>
);

export default App;
