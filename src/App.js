import './App.css';

import React from 'react';

const App = (props) => (
  <div>
    <canvas className='display' onClick={props.init}></canvas>
  </div>
);

export default App;
