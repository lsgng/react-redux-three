import './App.css';

import React from 'react';

const App = (props) => (
  <div>
    <div id='container' onClick={props.init}></div>
  </div>
);

export default App;
