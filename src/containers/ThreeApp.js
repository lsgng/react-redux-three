import React from 'react'
import { connect } from 'react-redux'

import { fadeColor, switchColor, update } from '../actions'
import ThreeDisplay from '../components/ThreeDisplay'
import { getThreeCamera, getThreeRenderer, getThreeScene } from '../threeApp/threeApp'
import { mapStateToScene } from '../threeApp/threeHelpers'


class ThreeApp extends React.Component {
    renderNextFrame = () => {
        this.threeRenderer.render(this.scene, this.camera)
        requestAnimationFrame((timestamp) => this.props.update(timestamp))
    }

    componentDidMount() {
        this.scene = getThreeScene()
        this.camera = getThreeCamera()
        this.threeRenderer = getThreeRenderer()

        this.renderNextFrame()
    }

    componentWillUpdate() {
        mapStateToScene(this.props.spheres, this.scene)
        this.renderNextFrame()
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
        spheres: state.spheres,
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