import React from 'react'

const  StartMessage = ({running, run}) => (
  <div>
      <div id='loading-screen' className={running ? 'hidden' : ''} onClick={run}>
        Click to start!
      </div>
  </div>
)

export default StartMessage
