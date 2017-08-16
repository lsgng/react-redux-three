import './App.css'

import React from 'react'

import ThreeApp from './ThreeApp'

const App = (props) => (
  <div>
      <div id='loading-screen' className={props.running ? 'hidden' : ''} onClick={props.run}>
        Click to start!
      </div>
     <ThreeApp running={props.running} />
  </div>
)

export default App
