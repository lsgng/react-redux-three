import React from 'react'

const ThreeDisplay = ({ running }) => (
    <div id='container' className={!running ? 'hidden' : ''}></div>
)

export default ThreeDisplay
