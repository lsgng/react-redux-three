import './ThreeDisplay.css'

import React from 'react'

const ThreeDisplay = ({ running, switchColor, fadeColor }) => (
    <div
        id='container'
        className={running ? 'three-display' : 'three-display hidden'}
        onClick={switchColor}
        onMouseMove={fadeColor}
    ></div>
)

export default ThreeDisplay
