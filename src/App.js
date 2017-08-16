import './App.css'

import React from 'react'

import ThreeApp from './ThreeApp'

const App = (props) => (
  <div>
    {!props.running ? (
      <div id='loading-screen' onClick={props.run}>
        Click to start!
      </div>
    ) : (
        <ThreeApp />
      )}
  </div>
)

export default App
