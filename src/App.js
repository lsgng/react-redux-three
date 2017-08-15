import './App.css';

import React from 'react';

const App = (props) => (
  <div>
    <div id='container' onClick={props.run}></div>
  </div>
);

export default App;
