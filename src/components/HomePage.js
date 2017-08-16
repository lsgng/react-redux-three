import './HomePage.css'

import React from 'react'

import StartPage from './StartPage'
import ThreeApp from './ThreeApp'

const HomePage = (props) => (
  <div>
      <StartPage running={props.running} run={props.run} />
      <ThreeApp running={props.running} />
  </div>
)

export default HomePage
