import React from 'react'

const  StartPage = (props) => (
  <div id='container' className={!props.running ? 'hidden' : ''}></div>
)

export default StartPage
