import React from 'react'
import {connect} from 'react-redux'

import {update} from '../actions'

import ThreeDisplay from '../components/ThreeDisplay'

import {
    getThreeCamera,
    getThreeRenderer,
    getThreeScene
} from '../threeApp/threeApp'

import {mapStateToScene} from '../threeApp/threeHelpers'

class ThreeApp extends React.Component {
    renderNextFrame = () => {
        this.threeRenderer.render(this.scene, this.camera)
        requestAnimationFrame(timestamp => this.props.update(timestamp))
    }

    componentDidMount() {
        this.scene = getThreeScene()
        this.camera = getThreeCamera()
        this.threeRenderer = getThreeRenderer()

        this.renderNextFrame()
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.lastAction === 'UPDATE'
    }

    componentWillUpdate() {
        mapStateToScene(this.props.sceneState, this.scene)
        this.renderNextFrame()
    }

    render() {
        return (
            <div>
                <ThreeDisplay />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        timestamp: state.timestamp,
        lastAction: state.lastAction,
        sceneState: state.scene
    }
}

const mapDispatchTopProps = dispatch => {
    return {
        update: timestamp => dispatch(update(timestamp))
    }
}

export default connect(mapStateToProps, mapDispatchTopProps)(ThreeApp)
