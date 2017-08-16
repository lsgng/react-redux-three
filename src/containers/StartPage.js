import React from 'react'
import { connect } from 'react-redux'

import { run } from '../actions'

import StartMessage from '../components/StartMessage'

const StartPage = ({running, run}) => (
  <div>
      <StartMessage running={running} run={run} />
  </div>
)

const mapStateToProps = (state) => {
    return {
        running: state.running,
    }
}

const mapDispatchTopProps = (dispatch) => {
    return {
        run: () => dispatch(run()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchTopProps
)(StartPage)

