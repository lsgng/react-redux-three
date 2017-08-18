import React from 'react'
import { connect } from 'react-redux'

import { fadeColor, switchColor } from '../actions'
import ThreeDisplay from '../components/ThreeDisplay'

const ThreeApp = ({ running, switchColor, fadeColor }) => (
    <div>
        <ThreeDisplay
            running={running}
            fadeColor={fadeColor}
            switchColor={switchColor}
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
        fadeColor: e => dispatch(fadeColor(e)),
        switchColor: () => dispatch(switchColor()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchTopProps
)(ThreeApp)


