import './ThreeDisplay.css'

import React from 'react'

const ThreeDisplay = ({ running, changeMaterial, changeSize }) => (
    <div
        id='container'
        className={running ? 'three-display' : 'three-display hidden'}
        onClick={changeMaterial}
        onMouseMove={changeSize}
    ></div>
)

export default ThreeDisplay
