import './ThreeDisplay.css'

import React from 'react'

const ThreeDisplay = ({ running }) => (
    <div id='container' className={running ? 'three-display' : 'three-display hidden'}></div>
)

export default ThreeDisplay
