import React from 'react'
import { connect } from 'react-redux'

import { switchColor, fadeColor } from '../actions'
import ThreeDisplay from '../components/ThreeDisplay'

const ThreeApp = ({ running, switchColor, fadeColor }) => (
    <div>
        <ThreeDisplay
            running={running}
            switchColor={switchColor}
            fadeColor={fadeColor}
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
        switchColor: () => dispatch(switchColor()),
        fadeColor: e => dispatch(fadeColor(e)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchTopProps
)(ThreeApp)


