import './StartMessage.css'

import React from 'react'

const  StartMessage = ({running, run}) => (
  <div>
      <div className={!running ? 'start-message' : 'start-message hidden'} onClick={run}>
        Click to start!
      </div>
  </div>
)

export default StartMessage
