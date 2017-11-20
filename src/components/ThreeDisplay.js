import './ThreeDisplay.css'

import React from 'react'
import {connect} from 'react-redux'

import {fadeColor, switchColor} from '../actions'

class ThreeDisplay extends React.Component {
    shouldComponentUpdate(nextProps) {
        const shouldUpdate = nextProps.lastAction === 'RUN' || 'UPDATE'

        if (!shouldUpdate) {
            // This never gets logged, even if nextProps.lastAction is not 'RUN' or 'UPDATE'
            console.log('ThreeDisplay will not update')
            console.log('Last action: ' + nextProps.lastAction)
        }

        return shouldUpdate
    }

    componentWillUpdate() {
        // This gets logged even if this.props.lastAction is not 'RUN' or 'UPDATE
        console.log('ThreeDisplay will update')
        console.log('Last action: ' + this.props.lastAction)
    }

    render() {
        return (
            <div
                id="container"
                className={
                    this.props.running
                        ? 'three-display'
                        : 'three-display hidden'
                }
                onClick={this.props.switchColor}
                onMouseMove={this.props.fadeColor}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        running: state.running,
        lastAction: state.lastAction
    }
}

const mapDispatchTopProps = dispatch => {
    return {
        fadeColor: e => dispatch(fadeColor(e)),
        switchColor: () => dispatch(switchColor())
    }
}

export default connect(mapStateToProps, mapDispatchTopProps)(ThreeDisplay)
