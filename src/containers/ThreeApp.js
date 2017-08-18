import React from 'react'
import { connect } from 'react-redux'

import { changeMaterial, changeSize } from '../actions'
import ThreeDisplay from '../components/ThreeDisplay'

const ThreeApp = ({ running, changeMaterial, changeSize }) => (
    <div>
        <ThreeDisplay
            running={running}
            changeMaterial={changeMaterial}
            changeSize={changeSize}
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
        changeSize: e => dispatch(changeSize(e)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchTopProps
)(ThreeApp)


