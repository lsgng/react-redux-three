import './ThreeDisplay.css'

import React from 'react'

const ThreeDisplay = ({ running, changeMaterial }) => (
    <div id='container' className={running ? 'three-display' : 'three-display hidden'} onClick={changeMaterial}></div>
)

export default ThreeDisplay
