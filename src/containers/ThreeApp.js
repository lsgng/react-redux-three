import React from 'react'
import { connect } from 'react-redux'

import { changeMaterial } from '../actions'
import ThreeDisplay from '../components/ThreeDisplay'

const ThreeApp = ({ running, changeMaterial }) => (
    <div>
        <ThreeDisplay
            running={running}
            changeMaterial={changeMaterial}
        />
    </div>
)

const mapStateToProps = (state) => {
    return {
        running: state.running,
    }
}

const mapDispatchTopProps = (dispatch) => {
    return {
        changeMaterial: () => dispatch(changeMaterial()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchTopProps
)(ThreeApp)


