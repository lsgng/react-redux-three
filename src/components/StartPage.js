import React from 'react'

const  StartPage = (props) => (
  <div>
      <div id='loading-screen' className={props.running ? 'hidden' : ''} onClick={props.run}>
        Click to start!
      </div>
  </div>
)

export default StartPage
