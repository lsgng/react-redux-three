import React from 'react'
import { connect } from 'react-redux'

import { fadeColor, switchColor, update } from '../actions'
import ThreeDisplay from '../components/ThreeDisplay'
import { getThreeRenderer } from '../threeApp/threeApp'


class ThreeApp extends React.Component {
    updateThreeApp = () => {
            this.threeRenderer.render(this.props.scene, this.props.camera)
            requestAnimationFrame((timestamp) => this.props.update(timestamp))
    }

    componentDidMount() {
        this.threeRenderer = getThreeRenderer()
        this.updateThreeApp()
    }

    componentWillUpdate() {
        this.updateThreeApp()
    }

    render() {
        return (
            <div>
                <ThreeDisplay
                    running={this.props.running}
                    fadeColor={this.props.fadeColor}
                    switchColor={this.props.switchColor}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        running: state.running,
        timestamp: state.timestamp,
        lastAction: state.lastAction,
        scene: state.scene,
        camera: state.camera,
    }
}

const mapDispatchTopProps = (dispatch) => {
    return {
        fadeColor: e => dispatch(fadeColor(e)),
        switchColor: () => dispatch(switchColor()),
        update: timestamp => dispatch(update(timestamp)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchTopProps
)(ThreeApp)