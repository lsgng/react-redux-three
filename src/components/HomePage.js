import './HomePage.css'

import React from 'react'

const HomePage = (props) => (
  <div>
      <div id='loading-screen' className={props.running ? 'hidden' : ''} onClick={props.run}>
        Click to start!
      </div>
      <div id='container' className={!props.running ? 'hidden' : ''}></div>
  </div>
)

export default HomePage
