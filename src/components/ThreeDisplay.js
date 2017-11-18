import './ThreeDisplay.css'

import React from 'react'
import {connect} from 'react-redux'

import {fadeColor, switchColor} from '../actions'

class ThreeDisplay extends React.Component {
    shouldComponentUpdate() {
        return  true
    }

    componentWillUpdate() {
        console.log('ThreeDisplay will update')
        console.log(this.props.lastAction)
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
